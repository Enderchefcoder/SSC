import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CornerDownLeft, RefreshCw } from 'lucide-react';

interface ArticleSummaryProps {
  content: string;
}

export default function ArticleSummary({ content }: ArticleSummaryProps) {
  const [summary, setSummary] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const generateSummary = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/summarize-text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: content }),
      });

      const data = await response.json();
      setSummary(data.summary);
    } catch (error) {
      console.error('Error generating summary:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Generate summary on initial load if content is available
  useEffect(() => {
    if (content && !summary) {
      generateSummary();
    }
  }, [content]);

  return (
    <div className="mb-8">
      {!summary ? (
        <Button 
          onClick={generateSummary} 
          disabled={isLoading}
          className="w-full mb-4"
          variant="outline"
        >
          {isLoading ? 'Generating Summary...' : 'Generate Article Summary'}
          {!isLoading && <CornerDownLeft className="ml-2 h-4 w-4" />}
        </Button>
      ) : (
        <Card className="p-4 bg-muted/50">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium text-lg">Article Summary</h3>
            {!isLoading && (
              <Button 
                onClick={generateSummary} 
                variant="ghost" 
                size="sm" 
                className="flex items-center gap-1"
              >
                <RefreshCw className="h-3 w-3" />
                Regenerate
              </Button>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{summary}</p>
        </Card>
      )}
    </div>
  );
}