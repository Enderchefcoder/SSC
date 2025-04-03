import { useEffect, useRef } from "react";
import { Download, Printer, Facebook, Twitter, Mail, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Article } from "@/types";
import DidYouKnow from "./DidYouKnow";
import QuizSection from "./QuizSection";
import Sources from "./Sources";
import { useToast } from "@/hooks/use-toast";

interface ArticleDetailProps {
  article: Article;
  isPrintMode?: boolean;
}

const ArticleDetail = ({ article, isPrintMode = false }: ArticleDetailProps) => {
  const { toast } = useToast();
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isPrintMode) {
      setTimeout(() => {
        window.print();
      }, 500);
    }
    
    // Set article content from HTML
    if (contentRef.current) {
      contentRef.current.innerHTML = article.content;
    }
  }, [article, isPrintMode]);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = article.title;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'email':
        window.open(`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this article: ${url}`)}`, '_blank');
        break;
      default:
        navigator.clipboard.writeText(url);
        toast({
          title: "Link copied to clipboard",
          description: "You can now share it with others.",
        });
    }
  };

  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Featured Article</h2>
            <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl font-serif">{article.title}</h1>
            <div className="mt-4 flex items-center">
              <div className="flex-shrink-0">
                <span className="sr-only">{article.author.name}</span>
                <Avatar className="h-10 w-10 bg-primary-100">
                  <AvatarFallback className="text-primary-600 font-medium">
                    {article.author.initials}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  {article.author.name}
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime={article.publishDate}>
                    {new Date(article.publishDate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </time>
                  <span aria-hidden="true">&middot;</span>
                  <span>{article.readTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img 
                    className="rounded-lg shadow-lg object-cover object-center" 
                    src={article.imageUrl} 
                    alt={article.imageAlt}
                    width="1184" 
                    height="658"
                  />
                </div>
                {article.imageCredit && (
                  <figcaption className="mt-3 flex text-sm text-gray-500">
                    <Camera className="flex-none mt-0.5 mr-2 h-4 w-4" />
                    <span>{article.imageCredit}</span>
                  </figcaption>
                )}
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">{article.description}</p>
            </div>
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1 font-serif">
              <div ref={contentRef}></div>
              
              {article.didYouKnow && <DidYouKnow fact={article.didYouKnow.fact} />}
              
              {article.quiz && article.quiz.length > 0 && (
                <QuizSection questions={article.quiz} />
              )}
              
              {article.sources && article.sources.length > 0 && (
                <Sources sources={article.sources} />
              )}
              
              <div className="border-t border-gray-200 pt-6 flex items-center justify-between">
                <div className="flex space-x-3">
                  <Button className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700">
                    <Download className="mr-2 h-4 w-4" />
                    Download Worksheet
                  </Button>
                  <Button 
                    variant="outline" 
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    onClick={() => window.open(`/article/${article.slug}?print=true`, '_blank')}
                  >
                    <Printer className="mr-2 h-4 w-4" />
                    Print Version
                  </Button>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-500">Share:</span>
                  <div className="flex space-x-1">
                    <Button
                      variant="outline"
                      size="icon"
                      className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                      onClick={() => handleShare('facebook')}
                    >
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-400 hover:text-white"
                      onClick={() => handleShare('twitter')}
                    >
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-700"
                      onClick={() => handleShare('email')}
                    >
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
