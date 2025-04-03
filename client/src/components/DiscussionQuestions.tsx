import { MessageSquare } from "lucide-react";

interface DiscussionQuestionsProps {
  questions: string[];
}

const DiscussionQuestions = ({ questions }: DiscussionQuestionsProps) => {
  return (
    <div className="bg-green-50 rounded-lg p-6 my-8 border-l-4 border-green-500">
      <h4 className="text-lg font-bold text-green-800 flex items-center">
        <MessageSquare className="mr-2 text-green-500 h-5 w-5" />
        Discussion Questions
      </h4>
      <ul className="mt-2 space-y-2">
        {questions.map((question, index) => (
          <li key={index}>{question}</li>
        ))}
      </ul>
    </div>
  );
};

export default DiscussionQuestions;
