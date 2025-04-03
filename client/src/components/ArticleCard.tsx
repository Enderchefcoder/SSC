import { Link } from "wouter";
import { Bookmark, Printer, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Article, AgeLevel } from "@/types";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const getAgeLevelClasses = (ageLevel: AgeLevel) => {
  switch (ageLevel) {
    case "Elementary":
      return "bg-amber-500 text-white";
    case "Middle School":
      return "bg-indigo-500 text-white";
    case "High School":
      return "bg-purple-600 text-white";
    default:
      return "bg-gray-500 text-white";
  }
};

const getTagColorClasses = (color: string) => {
  switch (color) {
    case "blue":
      return "bg-blue-100 text-blue-800";
    case "green":
      return "bg-green-100 text-green-800";
    case "red":
      return "bg-red-100 text-red-800";
    case "yellow":
      return "bg-yellow-100 text-yellow-800";
    case "purple":
      return "bg-purple-100 text-purple-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

interface ArticleCardProps {
  article: Article;
  compact?: boolean;
}

const ArticleCard = ({ article, compact = false }: ArticleCardProps) => {
  const [savedArticles, setSavedArticles] = useLocalStorage<string[]>("savedArticles", []);
  
  const isSaved = savedArticles.includes(article.id);
  
  const toggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isSaved) {
      setSavedArticles(savedArticles.filter(id => id !== article.id));
    } else {
      setSavedArticles([...savedArticles, article.id]);
    }
  };

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.description,
        url: window.location.origin + '/article/' + article.slug,
      })
      .catch(console.error);
    } else {
      // Fallback for browsers that don't support navigator.share
      navigator.clipboard.writeText(window.location.origin + '/article/' + article.slug);
      alert("Link copied to clipboard!");
    }
  };

  const handlePrint = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    window.open(`/article/${article.slug}?print=true`, '_blank');
  };

  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white h-full">
      <div className="flex-shrink-0 relative">
        <img 
          className="h-48 w-full object-cover" 
          src={article.imageUrl} 
          alt={article.imageAlt} 
        />
        <div className="absolute top-0 right-0 mt-2 mr-2">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getAgeLevelClasses(article.ageLevel)}`}>
            {article.ageLevel}
          </span>
        </div>
      </div>
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-primary-600 flex flex-wrap gap-2">
            {article.tags.map((tag, index) => (
              <span 
                key={index} 
                className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${getTagColorClasses(tag.color)}`}
              >
                {tag.name}
              </span>
            ))}
          </p>
          <Link href={`/article/${article.slug}`}>
            <a className="block mt-2">
              <p className="text-xl font-semibold text-gray-900 font-serif">{article.title}</p>
              {!compact && (
                <p className="mt-3 text-base text-gray-500 line-clamp-3">{article.description}</p>
              )}
            </a>
          </Link>
        </div>
        {!compact && (
          <div className="mt-6">
            <div className="flex items-center">
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
            <div className="mt-4 flex justify-between">
              <Button
                onClick={toggleSave}
                variant="outline"
                size="sm"
                className={`inline-flex items-center px-3 py-1.5 text-xs font-medium rounded ${isSaved ? 'text-primary-700 bg-primary-100' : 'text-gray-700 bg-white'}`}
              >
                <Bookmark className={`mr-1.5 h-3 w-3 ${isSaved ? 'fill-primary-700' : ''}`} />
                {isSaved ? 'Saved' : 'Save'}
              </Button>
              <div className="flex space-x-1">
                <Button
                  onClick={handlePrint}
                  variant="outline"
                  size="sm"
                  className="inline-flex items-center p-1.5 text-xs font-medium rounded text-gray-700 bg-gray-100 hover:bg-gray-200"
                >
                  <Printer className="h-3 w-3" />
                </Button>
                <Button
                  onClick={handleShare}
                  variant="outline"
                  size="sm"
                  className="inline-flex items-center p-1.5 text-xs font-medium rounded text-gray-700 bg-gray-100 hover:bg-gray-200"
                >
                  <Share2 className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleCard;
