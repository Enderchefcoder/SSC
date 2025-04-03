import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { useLocalStorage } from '@/hooks/useLocalStorage';

interface ReadingProgressBarProps {
  articleId: string;
}

const ReadingProgressBar = ({ articleId }: ReadingProgressBarProps) => {
  const [progress, setProgress] = useState(0);
  const [readingData, setReadingData] = useLocalStorage<Record<string, number>>(
    'reading-progress',
    {}
  );

  // Load the saved progress when the component mounts
  useEffect(() => {
    // Check if we have saved progress for this article
    if (readingData[articleId]) {
      setProgress(readingData[articleId]);
    }
  }, [articleId, readingData]);

  // Set up scroll event listener to track reading progress
  useEffect(() => {
    const calculateReadingProgress = () => {
      const article = document.getElementById('article-content');
      if (!article) return;

      const articleHeight = article.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      
      // Calculate progress based on scroll position
      const currentPosition = scrollTop + windowHeight;
      const articleStart = article.offsetTop;
      const articleEnd = articleStart + articleHeight;
      
      // Adjust formula to account for article position in the page
      let calculatedProgress = Math.min(
        100,
        ((currentPosition - articleStart) / (articleEnd - articleStart)) * 100
      );
      
      // Ensure progress is between 0 and 100
      calculatedProgress = Math.max(0, Math.min(100, calculatedProgress));
      
      // Round to nearest integer
      const roundedProgress = Math.round(calculatedProgress);
      
      // Only update if it's a meaningful change (avoid excessive re-renders)
      if (Math.abs(roundedProgress - progress) >= 1) {
        setProgress(roundedProgress);
        
        // Save this progress to localStorage
        setReadingData(prev => ({
          ...prev,
          [articleId]: roundedProgress
        }));
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', calculateReadingProgress);
    
    // Calculate initial reading progress
    calculateReadingProgress();
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', calculateReadingProgress);
    };
  }, [articleId, progress, setReadingData]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <Progress value={progress} className="h-1 rounded-none" />
      <div className="container mx-auto px-4 py-1 flex justify-end">
        <span className="text-xs text-gray-500">
          {progress}% read
        </span>
      </div>
    </div>
  );
};

export default ReadingProgressBar;