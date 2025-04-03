import { Article } from "@/types";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";

interface RelatedArticlesProps {
  articles: Article[];
}

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

const RelatedArticles = ({ articles }: RelatedArticlesProps) => {
  if (!articles.length) return null;

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Related Articles</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Discover more about ancient civilizations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link key={article.id} href={`/article/${article.slug}`}>
              <a className="flex flex-col rounded-lg shadow-sm overflow-hidden">
                <div className="flex-shrink-0">
                  <img 
                    className="h-48 w-full object-cover" 
                    src={article.imageUrl} 
                    alt={article.imageAlt} 
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-primary-600">
                      {article.tags.slice(0, 1).map((tag, index) => (
                        <span 
                          key={index} 
                          className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${getTagColorClasses(tag.color)}`}
                        >
                          {tag.name}
                        </span>
                      ))}
                    </p>
                    <div className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900 font-serif">{article.title}</p>
                      <p className="mt-3 text-base text-gray-500">{article.description}</p>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedArticles;
