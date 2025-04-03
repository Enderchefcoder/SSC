import { useState } from 'react';
import { useLocation } from 'wouter';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { importArticleFromText, saveArticleToLocalStorage } from '@/utils/articleUtils';
import { Upload, FileText, ArrowRight } from 'lucide-react';

const ArticleImporter = () => {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setErrorMsg('');
    }
  };

  const handleImport = async () => {
    if (!file) {
      setErrorMsg('Please select a text file to import');
      return;
    }

    if (!file.name.endsWith('.txt')) {
      setErrorMsg('Only .txt files are supported');
      return;
    }

    setIsLoading(true);
    setErrorMsg('');

    try {
      // Read the file
      const text = await file.text();
      
      // Import the article
      const article = importArticleFromText(text);
      
      if (!article) {
        throw new Error('Failed to parse article from file');
      }
      
      // Save to localStorage
      saveArticleToLocalStorage(article);
      
      toast({
        title: "Success!",
        description: "Article imported successfully",
      });
      
      // Redirect to the article page
      setTimeout(() => {
        setLocation(`/article/${article.slug}`);
      }, 1500);
      
    } catch (error) {
      console.error('Error importing article:', error);
      setErrorMsg(error instanceof Error ? error.message : 'An error occurred while importing the article');
      toast({
        title: "Import Failed",
        description: "There was a problem importing the article",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <Card className="w-full max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Import Article</CardTitle>
          <CardDescription>
            Import an article from a text file in the appropriate format.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="file-upload">Select Article File</Label>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Input
                  id="file-upload"
                  type="file"
                  accept=".txt"
                  onChange={handleFileChange}
                  className="cursor-pointer"
                />
              </div>
              {file && (
                <div className="text-sm text-gray-600 flex items-center mt-2">
                  <FileText className="h-4 w-4 mr-1" /> {file.name}
                </div>
              )}
            </div>
            
            {errorMsg && (
              <div className="text-red-500 text-sm">
                {errorMsg}
              </div>
            )}
            
            <div className="bg-gray-100 p-4 rounded-md mt-4">
              <h3 className="text-sm font-medium mb-2 flex items-center">
                <FileText className="h-4 w-4 mr-1" /> File Format Information
              </h3>
              <p className="text-xs text-gray-600">
                The text file should follow a specific format with field names followed by values.
                The required fields are: TITLE, SLUG, DESCRIPTION, AGE_LEVEL, PUBLISH_DATE, 
                READ_TIME, IMAGE_URL, IMAGE_ALT, AUTHOR_NAME, AUTHOR_INITIALS, and CONTENT.
              </p>
              <p className="text-xs text-gray-600 mt-2">
                Additional optional fields include: IMAGE_CREDIT, AUTHOR_BIO, TAGS, DID_YOU_KNOW,
                DISCUSSION_QUESTIONS, SOURCES, RELATED_ARTICLES, and WORKSHEETS.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={() => setLocation('/articles')}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleImport} 
            disabled={!file || isLoading}
          >
            {isLoading ? (
              <span className="flex items-center">
                <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-r-transparent"></span>
                Importing...
              </span>
            ) : (
              <span className="flex items-center">
                <Upload className="h-4 w-4 mr-2" />
                Import Article
              </span>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ArticleImporter;