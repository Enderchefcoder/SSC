
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { articles } from "@/data/articles";
import { Article } from "@/types";

interface FeaturedArticlesProps {
  category: string;
}

const FeaturedArticles = ({ category }: FeaturedArticlesProps) => {
  const [featuredArticles, setFeaturedArticles] = useState<Article[]>([]);

  useEffect(() => {
    const filtered = articles.filter(article => article.featured === category);
    setFeaturedArticles(filtered);
  }, [category]);

  if (featuredArticles.length === 0) {
    return null;
  }

  return (
    <div className="bg-blue-50 py-8 px-4 rounded-lg my-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-serif font-bold text-blue-900 mb-6">
          Featured: {category}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <Link key={article.id} href={`/articles/${article.slug}`}>
              <a className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                    <img 
                      src={article.imageUrl} 
                      alt={article.imageAlt} 
                      className="object-cover w-full h-full" 
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {article.tags.slice(0, 2).map((tag) => (
                        <span 
                          key={tag.name}
                          className={`inline-block px-2 py-1 text-xs font-medium rounded-full text-white bg-${tag.color}-500`}
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-semibold font-serif mb-2 group-hover:text-blue-600">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      {article.description}
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <span>{article.readTime} min read</span>
                      <span className="mx-2">•</span>
                      <span>{new Date(article.publishDate).toLocaleDateString()}</span>
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

export default FeaturedArticles;
