
import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Sparkles } from 'lucide-react';

interface ArticleSummaryProps {
  content: string;
}

export default function ArticleSummary({ content }: ArticleSummaryProps) {
  const [summary, setSummary] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGetSummary = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/summarize-text', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: content }),
      });
      const data = await response.json();
      setSummary(data.summary);
    } catch (error) {
      console.error('Error getting summary:', error);
    }
    setIsLoading(false);
  };

  return (
    <div className="mb-6">
      <Button 
        onClick={handleGetSummary} 
        disabled={isLoading}
        className="w-full mb-4 bg-amber-500 hover:bg-amber-600"
      >
        <Sparkles className="mr-2 h-4 w-4" />
        {isLoading ? 'Generating AI Summary...' : 'Get AI Article Summary'}
      </Button>
      
      {isLoading && (
        <Card className="p-4 bg-gray-50 animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
          <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
          <div className="h-3 bg-gray-200 rounded w-3/4"></div>
        </Card>
      )}
      
      {!isLoading && summary && (
        <Card className="p-4 bg-amber-50 border-amber-200">
          <h3 className="text-sm font-medium mb-2 text-amber-800 flex items-center">
            <Sparkles className="mr-2 h-4 w-4 text-amber-500" />
            AI Summary
          </h3>
          <p className="text-sm text-amber-700">{summary}</p>
        </Card>
      )}
    </div>
  );
}
