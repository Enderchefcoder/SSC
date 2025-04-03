
import { useState } from 'react';
import { Slider } from './ui/slider';
import { Button } from './ui/button';

interface ArticleAIControlsProps {
  content: string;
  onContentChange: (content: string) => void;
}

export default function ArticleAIControls({ content, onContentChange }: ArticleAIControlsProps) {
  const [complexity, setComplexity] = useState([5]);
  const [isLoading, setIsLoading] = useState(false);

  const handleTransform = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/transform-text', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          text: content,
          complexity: complexity[0]
        }),
      });
      const data = await response.json();
      onContentChange(data.text);
    } catch (error) {
      console.error('Error transforming text:', error);
    }
    setIsLoading(false);
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg space-y-4 mb-6">
      <h3 className="text-sm font-medium">AI Text Controls</h3>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm">Complexity Level</span>
          <span className="text-sm font-medium">{complexity[0]}</span>
        </div>
        <Slider
          value={complexity}
          onValueChange={setComplexity}
          min={1}
          max={10}
          step={1}
        />
      </div>
      <Button 
        onClick={handleTransform} 
        disabled={isLoading}
        className="w-full"
      >
        {isLoading ? 'Transforming...' : 'Transform Text'}
      </Button>
    </div>
  );
}
