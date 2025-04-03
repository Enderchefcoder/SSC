import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { Article } from '@/types';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { 
  exportArticleToText, 
  importArticleFromText, 
  saveArticleToLocalStorage,
  downloadArticleAsText
} from '@/utils/articleUtils';
import { FileCode, Save, Download, ArrowLeft } from 'lucide-react';

interface ArticleCodeEditorProps {
  article: Article;
  onSwitchToVisualEditor: () => void;
}

const ArticleCodeEditor = ({ article, onSwitchToVisualEditor }: ArticleCodeEditorProps) => {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [articleText, setArticleText] = useState('');
  const [parseError, setParseError] = useState('');

  // When component mounts, convert article to text
  useEffect(() => {
    const textContent = exportArticleToText(article);
    setArticleText(textContent);
  }, [article]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setArticleText(e.target.value);
    // Clear any error when user starts editing again
    if (parseError) {
      setParseError('');
    }
  };

  const handleSave = () => {
    setLoading(true);
    setParseError('');

    try {
      // Try to parse the text into an article
      const parsedArticle = importArticleFromText(articleText);
      
      if (!parsedArticle) {
        throw new Error('Failed to parse article from text');
      }

      // Keep the original ID to ensure we're updating the same article
      parsedArticle.id = article.id;
      
      // Save to localStorage
      saveArticleToLocalStorage(parsedArticle);

      toast({
        title: "Success!",
        description: "Article updated successfully",
      });

      // Redirect to article page after a short delay
      setTimeout(() => {
        setLocation(`/article/${parsedArticle.slug}`);
      }, 1500);
    } catch (error) {
      console.error("Error parsing article:", error);
      setParseError(error instanceof Error ? error.message : 'Unknown error parsing article');
      toast({
        title: "Error",
        description: "There was a problem parsing the article text",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    try {
      // Create a blob from the text and trigger download
      const blob = new Blob([articleText], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = `${article.slug}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading article:", error);
      toast({
        title: "Error",
        description: "There was a problem downloading the article",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto py-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Edit Article Code</CardTitle>
              <CardDescription>
                Edit the article directly in text format
              </CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Label htmlFor="code-mode" className="cursor-pointer">Code Mode</Label>
              <Switch 
                id="code-mode" 
                checked={true}
                onCheckedChange={onSwitchToVisualEditor}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-gray-100 p-3 rounded-md">
              <h3 className="text-sm font-semibold flex items-center mb-2">
                <FileCode className="h-4 w-4 mr-1" /> Code Editor Instructions
              </h3>
              <p className="text-xs text-gray-600">
                Edit the article in text format. Make sure to maintain the correct format with field names 
                followed by values. The CONTENT section must be last, and all other fields must come before it.
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Required fields: TITLE, SLUG, DESCRIPTION, AGE_LEVEL, PUBLISH_DATE, READ_TIME, 
                IMAGE_URL, IMAGE_ALT, AUTHOR_NAME, AUTHOR_INITIALS, and CONTENT.
              </p>
            </div>

            {parseError && (
              <div className="bg-red-50 text-red-700 p-3 rounded-md text-sm">
                <strong>Error parsing article:</strong> {parseError}
              </div>
            )}

            <Textarea
              value={articleText}
              onChange={handleTextChange}
              className="font-mono text-sm h-[500px]"
              placeholder="Article content in text format"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center pt-4">
          <div>
            <Button 
              type="button" 
              variant="outline" 
              onClick={onSwitchToVisualEditor}
              className="mr-2"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Visual Editor
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={handleDownload}
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
          <Button 
            onClick={handleSave}
            disabled={loading}
            className="px-4"
          >
            {loading ? (
              <>
                <div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-current border-t-transparent" />
                Saving...
              </>
            ) : (
              <>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ArticleCodeEditor;