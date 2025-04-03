import { useState } from 'react';
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from '@/components/ui/card';

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
  const [activeEvent, setActiveEvent] = useState<string | null>(events.length > 0 ? events[0].id : null);
  const [zoomed, setZoomed] = useState(false);

  // Sort events by date
  const sortedEvents = [...events].sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  const getActiveEvent = () => {
    return events.find(event => event.id === activeEvent);
  };

  return (
    <div className="my-8">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">Click on a point to learn more about the event</p>
      </div>
      
      {/* Timeline UI */}
      <div className={`relative bg-gray-100 rounded-lg p-4 transition-all duration-300 ${zoomed ? 'h-96' : 'h-32'}`}>
        <div className="absolute left-0 right-0 top-1/2 h-1 bg-primary-200 transform -translate-y-1/2">
          {sortedEvents.map((event, index) => {
            const position = `${(index / (events.length - 1)) * 100}%`;
            
            return (
              <button
                key={event.id}
                className={`absolute w-4 h-4 rounded-full -ml-2 -mt-1.5 transform transition-all duration-200 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-primary-500 
                  ${event.id === activeEvent ? 'bg-primary-600 scale-125' : 'bg-primary-400'}`}
                style={{ left: position }}
                onClick={() => setActiveEvent(event.id)}
                title={`${event.date}: ${event.title}`}
              />
            );
          })}
        </div>
        
        {/* Date labels */}
        <div className="absolute left-0 right-0 top-1/2 h-1 mt-8">
          {sortedEvents.map((event, index) => {
            const position = `${(index / (events.length - 1)) * 100}%`;
            return (
              <div
                key={`date-${event.id}`}
                className="absolute -ml-8 text-xs font-medium text-gray-500"
                style={{ left: position }}
              >
                {event.date}
              </div>
            );
          })}
        </div>
        
        {/* Expand/Collapse button */}
        <button 
          className="absolute bottom-1 right-1 text-xs text-primary-500 hover:text-primary-700"
          onClick={() => setZoomed(!zoomed)}
        >
          {zoomed ? 'Collapse' : 'Expand'}
        </button>
      </div>
      
      {/* Event detail */}
      {activeEvent && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>{getActiveEvent()?.title}</span>
              <span className="text-sm font-normal text-gray-500">{getActiveEvent()?.date}</span>
            </CardTitle>
            <CardDescription>
              {getActiveEvent()?.description}
            </CardDescription>
          </CardHeader>
          {getActiveEvent()?.imageUrl && (
            <CardContent>
              <img 
                src={getActiveEvent()?.imageUrl} 
                alt={getActiveEvent()?.title}
                className="w-full h-auto rounded-md"
              />
            </CardContent>
          )}
        </Card>
      )}
    </div>
  );
};

export default InteractiveTimeline;