import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

interface ReadingProgressBarProps {
  articleId: string;
}

const ReadingProgressBar = ({ articleId }: ReadingProgressBarProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far the user has scrolled
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
      // Calculate the scroll percentage
      const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(Math.min(scrollPercentage, 100));
      
      // Save reading progress in localStorage
      if (scrollPercentage > 10) { // Only save if user has scrolled a bit
        localStorage.setItem(`reading-progress-${articleId}`, scrollPercentage.toString());
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check if there's a saved progress
    const savedProgress = localStorage.getItem(`reading-progress-${articleId}`);
    if (savedProgress) {
      setScrollProgress(parseFloat(savedProgress));
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [articleId]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1">
      <Progress value={scrollProgress} className="w-full h-1 bg-gray-200" />
    </div>
  );
};

export default ReadingProgressBar;