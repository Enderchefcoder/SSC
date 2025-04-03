import { useState } from "react";
import { QuizQuestion } from "@/types";
import { AlertTriangle, Check, X, HelpCircle, Award, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface QuizSectionProps {
  questions: QuizQuestion[];
}

const QuizSection = ({ questions }: QuizSectionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);
  const [hasCompletedQuiz, setHasCompletedQuiz] = useState(false);

  const handleAnswerSelection = (answerIndex: number) => {
    if (showResults) return;

    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
      setHasCompletedQuiz(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers(Array(questions.length).fill(-1));
    setShowResults(false);
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  if (questions.length === 0) {
    return null;
  }

  const score = calculateScore();
  const currentQuiz = questions[currentQuestion];
  const hasSelectedAnswer = selectedAnswers[currentQuestion] !== -1;

  return (
    <div className="bg-indigo-50 rounded-lg p-6 my-8 border-l-4 border-indigo-500">
      <h4 className="text-xl font-bold text-indigo-800 flex items-center">
        <HelpCircle className="mr-2 text-indigo-500 h-6 w-6" />
        Quiz Time
      </h4>

      {showResults ? (
        <div className="mt-6">
          <div className="flex items-center justify-center mb-6">
            <div className="relative w-36 h-36 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-indigo-100"></div>
              <div className="relative flex flex-col items-center justify-center">
                <Award className="w-12 h-12 text-indigo-500 mb-2" />
                <span className="text-3xl font-bold text-indigo-700">{score}/{questions.length}</span>
                <span className="text-sm text-indigo-600">
                  {score === questions.length ? "Perfect Score!" : 
                   score >= questions.length * 0.7 ? "Great Job!" : 
                   score >= questions.length * 0.5 ? "Good Effort!" : 
                   "Keep Learning!"}
                </span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 mb-6">
            {questions.map((question, index) => (
              <div 
                key={index} 
                className="bg-white rounded-md p-4 shadow-sm"
              >
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium mr-2">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <p className="font-medium mb-2">{question.question}</p>
                    <div className="grid gap-2">
                      {question.options.map((option, optIndex) => {
                        const isCorrect = optIndex === question.correctAnswer;
                        const isSelected = selectedAnswers[index] === optIndex;
                        const isWrongSelection = isSelected && !isCorrect;
                        
                        return (
                          <div 
                            key={optIndex}
                            className={cn(
                              "flex items-center p-2 rounded border",
                              isCorrect ? "bg-green-50 border-green-300" : 
                              isWrongSelection ? "bg-red-50 border-red-300" : 
                              "border-gray-200"
                            )}
                          >
                            <div className="mr-2">
                              {isCorrect && <Check className="h-4 w-4 text-green-600" />}
                              {isWrongSelection && <X className="h-4 w-4 text-red-600" />}
                            </div>
                            <span>{option}</span>
                          </div>
                        );
                      })}
                    </div>
                    {question.explanation && (
                      <div className="mt-3 bg-blue-50 p-2 rounded text-sm text-blue-800 border border-blue-100">
                        <strong>Explanation:</strong> {question.explanation}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <Button 
            onClick={resetQuiz}
            className="w-full"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center text-sm text-indigo-600 mt-2 mb-4">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            {currentQuestion > 0 && (
              <button 
                onClick={handlePrevQuestion}
                className="underline hover:text-indigo-800"
              >
                Previous Question
              </button>
            )}
          </div>

          <div className="bg-white rounded-md p-4 shadow-sm">
            <p className="font-medium text-lg mb-4">{currentQuiz.question}</p>
            
            <RadioGroup 
              className="space-y-3"
              value={selectedAnswers[currentQuestion].toString()}
              onValueChange={(value) => handleAnswerSelection(parseInt(value))}
            >
              {currentQuiz.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 bg-gray-50 p-3 rounded hover:bg-gray-100 transition-colors">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            {!hasSelectedAnswer && (
              <div className="mt-4 flex items-center text-amber-600 text-sm">
                <AlertTriangle className="h-4 w-4 mr-1" />
                Please select an answer to continue
              </div>
            )}
            
            <Button 
              onClick={handleNextQuestion}
              className="mt-6 w-full"
              disabled={!hasSelectedAnswer}
            >
              {currentQuestion < questions.length - 1 ? "Next Question" : "Check Results"}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default QuizSection;