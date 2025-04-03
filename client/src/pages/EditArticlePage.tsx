import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import ArticleEditor from '@/components/ArticleEditor';
import ArticleCodeEditor from '@/components/ArticleCodeEditor';
import { Article } from '@/types';
import { getArticleBySlug } from '@/data/articles';
import { getArticlesFromLocalStorage } from '@/utils/articleUtils';

type EditArticlePageProps = {
  params: {
    slug: string;
  };
};

const EditArticlePage = ({ params }: EditArticlePageProps) => {
  const [article, setArticle] = useState<Article | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [isCodeEditorMode, setIsCodeEditorMode] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const fetchArticle = () => {
      setIsLoading(true);
      
      // First, check if it's in the standard articles
      let foundArticle = getArticleBySlug(params.slug);
      
      // If not found, check if it's in localStorage
      if (!foundArticle) {
        const localArticles = getArticlesFromLocalStorage();
        foundArticle = localArticles.find(a => a.slug === params.slug);
      }
      
      if (foundArticle) {
        setArticle(foundArticle);
      } else {
        // Article not found, redirect to 404
        setLocation("/not-found");
      }
      
      setIsLoading(false);
    };
    
    fetchArticle();
  }, [params.slug, setLocation]);

  // Toggle between visual editor and code editor
  const toggleEditorMode = () => {
    setIsCodeEditorMode(!isCodeEditorMode);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        <span className="ml-2">Loading article...</span>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Article not found</h1>
          <p className="mt-2">The article you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    );
  }

  // Render either the code editor or the visual editor based on the mode
  return isCodeEditorMode ? (
    <ArticleCodeEditor 
      article={article} 
      onSwitchToVisualEditor={toggleEditorMode} 
    />
  ) : (
    <ArticleEditor 
      article={article} 
      isNew={false} 
      onSwitchToCodeEditor={toggleEditorMode}
    />
  );
};

export default EditArticlePage;