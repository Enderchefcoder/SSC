import { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft, Calendar, Clock } from 'lucide-react';

export type TimelineEvent = {
  id: string;
  date: string;
  title: string;
  description: string;
  imageUrl?: string;
};

interface InteractiveTimelineProps {
  events: TimelineEvent[];
  title?: string;
}

const InteractiveTimeline = ({ events, title = "Historical Timeline" }: InteractiveTimelineProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  
  if (!events || events.length === 0) {
    return null;
  }
  
  const currentEvent = events[currentIndex];
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : events.length - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < events.length - 1 ? prevIndex + 1 : 0));
  };
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  
  return (
    <div className="my-8">
      <Card className="relative overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center text-lg">
            <Calendar className="h-5 w-5 mr-2" />
            {title}
          </CardTitle>
          <CardDescription>
            Explore key events in chronological order
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handlePrev}
              className="flex items-center"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
            <div className="text-sm font-medium">
              Event {currentIndex + 1} of {events.length}
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleNext}
              className="flex items-center"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          
          <div className="relative">
            {currentEvent.imageUrl && (
              <div className="relative h-48 md:h-64 mb-4 overflow-hidden rounded-md">
                <img 
                  src={currentEvent.imageUrl} 
                  alt={currentEvent.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <div className="flex items-center text-white">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">{currentEvent.date}</span>
                  </div>
                </div>
              </div>
            )}
            
            {!currentEvent.imageUrl && (
              <div className="flex items-center mb-2 text-primary">
                <Clock className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">{currentEvent.date}</span>
              </div>
            )}
            
            <h3 className="text-xl font-bold mb-2">{currentEvent.title}</h3>
            
            <div className={`prose prose-sm max-w-none ${isExpanded ? '' : 'line-clamp-3'}`}>
              <p>{currentEvent.description}</p>
            </div>
            
            {currentEvent.description.length > 150 && (
              <Button 
                variant="link" 
                size="sm" 
                onClick={toggleExpand} 
                className="mt-2 p-0 h-auto"
              >
                {isExpanded ? 'Show less' : 'Show more'}
              </Button>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="pt-0">
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1">
            <div 
              className="bg-primary h-1.5 rounded-full" 
              style={{ width: `${((currentIndex + 1) / events.length) * 100}%` }}
            ></div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default InteractiveTimeline;