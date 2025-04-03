import { Lightbulb } from "lucide-react";

interface DidYouKnowProps {
  fact: string;
}

const DidYouKnow = ({ fact }: DidYouKnowProps) => {
  return (
    <div className="bg-blue-50 rounded-lg p-6 my-8 border-l-4 border-blue-500">
      <h4 className="text-lg font-bold text-blue-800 flex items-center">
        <Lightbulb className="mr-2 text-blue-500 h-5 w-5" />
        Did You Know?
      </h4>
      <p className="mt-2">{fact}</p>
    </div>
  );
};

export default DidYouKnow;
