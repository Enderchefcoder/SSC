
import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Article } from '@/types';
import { getArticleBySlug } from '@/data/articles';
import { generateArticleId, generateSlug } from '@/utils/articleUtils';

interface ArticleGeneratorProps {
  baseArticleSlug: string;
  onGenerated: (articles: Article[]) => void;
}

export default function ArticleGenerator({ baseArticleSlug, onGenerated }: ArticleGeneratorProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedCount, setGeneratedCount] = useState(0);

  const handleGenerateArticles = async () => {
    setIsLoading(true);
    const baseArticle = getArticleBySlug(baseArticleSlug);
    
    if (!baseArticle) {
      console.error('Base article not found');
      setIsLoading(false);
      return;
    }
    
    try {
      const response = await fetch('/api/generate-articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          baseArticle,
          count: 10 
        }),
      });
      
      const data = await response.json();
      setGeneratedCount(data.articles.length);
      onGenerated(data.articles);
    } catch (error) {
      console.error('Error generating articles:', error);
    }
    
    setIsLoading(false);
  };

  return (
    <div className="mb-6">
      <Button 
        onClick={handleGenerateArticles} 
        disabled={isLoading}
        className="w-full mb-4"
      >
        {isLoading ? 'Generating Articles...' : 'Generate 10 Similar Articles'}
      </Button>
      
      {generatedCount > 0 && (
        <Card className="p-4 bg-green-50">
          <p className="text-sm text-green-600">Successfully generated {generatedCount} articles!</p>
        </Card>
      )}
    </div>
  );
}
