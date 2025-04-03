import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import ArticleDetail from "@/components/ArticleDetail";
import RelatedArticles from "@/components/RelatedArticles";
import Newsletter from "@/components/Newsletter";
import { getArticleBySlug, getRelatedArticles } from "@/data/articles";
import { Article } from "@/types";

type ArticlePageProps = {
  params: {
    slug: string;
  };
};

const ArticlePage = ({ params }: ArticlePageProps) => {
  const [article, setArticle] = useState<Article | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPrintMode, setIsPrintMode] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const fetchArticle = () => {
      setIsLoading(true);
      
      // Check for print mode in URL
      const urlParams = new URLSearchParams(window.location.search);
      setIsPrintMode(urlParams.get('print') === 'true');
      
      // Get article by slug
      const foundArticle = getArticleBySlug(params.slug);
      
      if (foundArticle) {
        setArticle(foundArticle);
        
        // Get related articles
        if (foundArticle.relatedArticles && foundArticle.relatedArticles.length > 0) {
          const related = getRelatedArticles(foundArticle.id);
          setRelatedArticles(related);
        }
      } else {
        // Article not found, redirect to 404
        setLocation("/not-found");
      }
      
      setIsLoading(false);
    };
    
    fetchArticle();
  }, [params.slug, setLocation]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        <span className="ml-2">Loading article...</span>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Article not found</h1>
          <p className="mt-2">The article you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={isPrintMode ? "print-mode" : ""}>
      <ArticleDetail article={article} isPrintMode={isPrintMode} />
      
      {!isPrintMode && (
        <>
          <RelatedArticles articles={relatedArticles} />
          <Newsletter />
        </>
      )}
    </div>
  );
};

export default ArticlePage;
