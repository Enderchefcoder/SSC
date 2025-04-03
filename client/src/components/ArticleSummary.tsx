
import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';

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
        className="w-full mb-4"
      >
        {isLoading ? 'Generating Summary...' : 'Get AI Summary'}
      </Button>
      
      {summary && (
        <Card className="p-4 bg-gray-50">
          <h3 className="text-sm font-medium mb-2">Summary</h3>
          <p className="text-sm text-gray-600">{summary}</p>
        </Card>
      )}
    </div>
  );
}
