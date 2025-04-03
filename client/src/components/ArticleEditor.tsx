import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { Article, AgeLevel, Tag } from '@/types';
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
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  generateArticleId, 
  generateSlug, 
  saveArticleToLocalStorage,
  downloadArticleAsText 
} from '@/utils/articleUtils';
import { Trash2, Download, Plus, X, Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';

interface ArticleEditorProps {
  article?: Article;
  isNew?: boolean;
  onSwitchToCodeEditor?: () => void;
}

const ArticleEditor = ({ article, isNew = false, onSwitchToCodeEditor }: ArticleEditorProps) => {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState<Tag[]>(article?.tags || []);
  const [newTagName, setNewTagName] = useState('');
  const [newTagColor, setNewTagColor] = useState('blue');
  const [discussionQuestions, setDiscussionQuestions] = useState<string[]>(
    article?.discussionQuestions || []
  );
  const [newQuestion, setNewQuestion] = useState('');
  // We'll include a custom interface to handle the didYouKnowFact field
  interface FormDataType extends Partial<Article> {
    didYouKnowFact?: string;
  }
  
  const [formData, setFormData] = useState<FormDataType>(
    article ? {
      ...article,
      didYouKnowFact: article.didYouKnow?.fact
    } : {
      id: generateArticleId(),
      title: '',
      slug: '',
      description: '',
      content: '',
      imageUrl: '',
      imageAlt: '',
      publishDate: new Date().toISOString().slice(0, 10),
      readTime: 5,
      ageLevel: 'Elementary' as AgeLevel,
      author: {
        name: 'Ciaran York',
        initials: 'CY',
        bio: 'Social studies educator with a passion for making history accessible to young learners.'
      },
      tags: [],
      discussionQuestions: [],
      didYouKnowFact: ''
    }
  );

  // Update slug when title changes
  useEffect(() => {
    if (formData.title && isNew) {
      setFormData(prev => ({ ...prev, slug: generateSlug(formData.title || '') }));
    }
  }, [formData.title, isNew]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAgeLevelChange = (value: string) => {
    setFormData(prev => ({ ...prev, ageLevel: value as AgeLevel }));
  };

  const addTag = () => {
    if (newTagName.trim()) {
      const newTag: Tag = { name: newTagName.trim(), color: newTagColor };
      setTags([...tags, newTag]);
      setNewTagName('');
      setNewTagColor('blue');
    }
  };

  const removeTag = (index: number) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  const addQuestion = () => {
    if (newQuestion.trim()) {
      setDiscussionQuestions([...discussionQuestions, newQuestion.trim()]);
      setNewQuestion('');
    }
  };

  const removeQuestion = (index: number) => {
    const newQuestions = [...discussionQuestions];
    newQuestions.splice(index, 1);
    setDiscussionQuestions(newQuestions);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const didYouKnow = formData.didYouKnowFact 
        ? { fact: formData.didYouKnowFact } 
        : undefined;

      const completeArticle: Article = {
        ...(formData as Article),
        tags,
        discussionQuestions,
        didYouKnow
      };

      // Save to localStorage
      saveArticleToLocalStorage(completeArticle);

      toast({
        title: "Success!",
        description: isNew ? "Article created successfully" : "Article updated successfully",
      });

      // Redirect to article page
      setTimeout(() => {
        setLocation(`/article/${completeArticle.slug}`);
      }, 1500);
    } catch (error) {
      console.error("Error saving article:", error);
      toast({
        title: "Error",
        description: "There was a problem saving the article",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    try {
      const didYouKnow = formData.didYouKnowFact 
        ? { fact: formData.didYouKnowFact } 
        : undefined;

      const completeArticle: Article = {
        ...(formData as Article),
        tags,
        discussionQuestions,
        didYouKnow
      };

      downloadArticleAsText(completeArticle);
    } catch (error) {
      console.error("Error downloading article:", error);
      toast({
        title: "Error",
        description: "There was a problem downloading the article",
        variant: "destructive",
      });
    }
  };

  const handleCancel = () => {
    setLocation('/articles');
  };

  return (
    <div className="container mx-auto py-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>{isNew ? 'Create New Article' : 'Edit Article'}</CardTitle>
              <CardDescription>
                Fill in the form below to {isNew ? 'create a new' : 'edit the'} article.
              </CardDescription>
            </div>
            {!isNew && onSwitchToCodeEditor && (
              <div className="flex items-center space-x-2">
                <Label htmlFor="code-mode" className="cursor-pointer">Code Mode</Label>
                <Switch 
                  id="code-mode" 
                  checked={false}
                  onCheckedChange={onSwitchToCodeEditor}
                />
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title || ''}
                    onChange={handleChange}
                    required
                    placeholder="Enter article title"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="slug">Slug</Label>
                  <Input
                    id="slug"
                    name="slug"
                    value={formData.slug || ''}
                    onChange={handleChange}
                    required
                    placeholder="article-url-slug"
                    disabled={isNew} // Auto-generated from title for new articles
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description || ''}
                  onChange={handleChange}
                  required
                  placeholder="Brief description of the article"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="ageLevel">Age Level</Label>
                  <Select 
                    value={formData.ageLevel} 
                    onValueChange={handleAgeLevelChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select age level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Elementary">Elementary</SelectItem>
                      <SelectItem value="Middle School">Middle School</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="publishDate">Publish Date</Label>
                  <Input
                    id="publishDate"
                    name="publishDate"
                    type="date"
                    value={formData.publishDate || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="readTime">Read Time (minutes)</Label>
                  <Input
                    id="readTime"
                    name="readTime"
                    type="number"
                    min="1"
                    value={formData.readTime || 5}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="imageUrl">Image URL</Label>
                  <Input
                    id="imageUrl"
                    name="imageUrl"
                    value={formData.imageUrl || ''}
                    onChange={handleChange}
                    required
                    placeholder="URL to the article's main image"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="imageAlt">Image Alt Text</Label>
                  <Input
                    id="imageAlt"
                    name="imageAlt"
                    value={formData.imageAlt || ''}
                    onChange={handleChange}
                    required
                    placeholder="Descriptive alt text for the image"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="imageCredit">Image Credit (optional)</Label>
                <Input
                  id="imageCredit"
                  name="imageCredit"
                  value={formData.imageCredit || ''}
                  onChange={handleChange}
                  placeholder="Credit for the image (e.g., 'Photo by John Doe on Unsplash')"
                />
              </div>

              <div className="space-y-2">
                <Label>Tags</Label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {tags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      className={`bg-${tag.color}-100 text-${tag.color}-800 hover:bg-${tag.color}-200`}
                    >
                      {tag.name}
                      <button 
                        type="button" 
                        className="ml-1" 
                        onClick={() => removeTag(index)}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    value={newTagName}
                    onChange={(e) => setNewTagName(e.target.value)}
                    placeholder="New tag name"
                    className="flex-1"
                  />
                  <Select 
                    value={newTagColor} 
                    onValueChange={setNewTagColor}
                  >
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Color" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="blue">Blue</SelectItem>
                      <SelectItem value="green">Green</SelectItem>
                      <SelectItem value="red">Red</SelectItem>
                      <SelectItem value="yellow">Yellow</SelectItem>
                      <SelectItem value="purple">Purple</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={addTag}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="didYouKnowFact">Did You Know Fact (optional)</Label>
                <Textarea
                  id="didYouKnowFact"
                  name="didYouKnowFact"
                  value={formData.didYouKnowFact || ''}
                  onChange={handleChange}
                  placeholder="Enter an interesting fact about the topic"
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label>Discussion Questions</Label>
                <div className="space-y-2 mb-2">
                  {discussionQuestions.map((question, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="bg-gray-100 p-2 rounded flex-1">
                        {question}
                      </div>
                      <Button 
                        type="button" 
                        variant="ghost" 
                        onClick={() => removeQuestion(index)}
                        size="sm"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                    placeholder="Add a discussion question"
                    className="flex-1"
                  />
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={addQuestion}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <div className="border rounded-md p-2 bg-gray-50">
                  <p className="text-xs text-gray-500 mb-2">
                    Use HTML tags for formatting. For example:
                    <code className="mx-1 px-1 bg-gray-200 rounded">&lt;p&gt;Paragraph&lt;/p&gt;</code>
                    <code className="mx-1 px-1 bg-gray-200 rounded">&lt;h3&gt;Heading&lt;/h3&gt;</code>
                  </p>
                </div>
                <Textarea
                  id="content"
                  name="content"
                  value={formData.content || ''}
                  onChange={handleChange}
                  required
                  placeholder="Article content in HTML format"
                  rows={12}
                  className="font-mono text-sm"
                />
              </div>
            </div>
            
            <div className="flex justify-between items-center pt-4">
              <div>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={handleDownload}
                  className="mr-2"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download as Text
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
              </div>
              <Button type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <div className="spinner mr-2" /> Saving...
                  </>
                ) : (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    {isNew ? 'Create Article' : 'Update Article'}
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArticleEditor;