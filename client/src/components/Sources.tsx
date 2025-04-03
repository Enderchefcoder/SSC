import { BookOpen } from "lucide-react";

interface Source {
  title: string;
  author?: string;
  publisher?: string;
  url?: string;
  year?: number;
}

interface SourcesProps {
  sources: Source[];
}

const Sources = ({ sources }: SourcesProps) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 my-8 border-l-4 border-gray-500">
      <h4 className="text-lg font-bold text-gray-800 flex items-center">
        <BookOpen className="mr-2 text-gray-500 h-5 w-5" />
        Sources & Further Reading
      </h4>
      <ul className="mt-2 space-y-1 text-sm">
        {sources.map((source, index) => (
          <li key={index}>
            {source.author && <span>{source.author}. </span>}
            {source.year && <span>({source.year}). </span>}
            <em>{source.title}</em>
            {source.publisher && <span>. {source.publisher}</span>}
            {source.url && (
              <span>
                . Retrieved from{" "}
                <a 
                  href={source.url.startsWith('http') ? source.url : `https://${source.url}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:underline"
                >
                  {source.url}
                </a>
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sources;
