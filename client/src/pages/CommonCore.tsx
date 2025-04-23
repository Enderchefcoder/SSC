import React from "react";
import { articles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import { Layout } from "@/components/Layout";

export default function CommonCore() {
  // Filter articles tagged with 'Common Core'
  const commonCoreArticles = articles.filter(article =>
    article.tags && article.tags.includes("Common Core")
  );

  return (
    <Layout>
      <div className="container mx-auto py-10">
        <h1 className="mb-8 text-4xl font-bold tracking-tight">Common Core Articles</h1>
        <p className="mb-6 text-lg text-muted-foreground">
          Explore our curated collection of articles aligned with Common Core standards for 5th and 6th grade social studies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {commonCoreArticles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
