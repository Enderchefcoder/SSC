import { useState } from "react";
import { useLocation } from "wouter";
import Hero from "@/components/Hero";
import ArticleCard from "@/components/ArticleCard";
import ResourcesSection from "@/components/ResourcesSection";
import Newsletter from "@/components/Newsletter";
import { articles } from "@/data/articles";
import { resources } from "@/data/resources";
import { AgeLevel } from "@/types";

const FeaturedArticles = ({ category }: { category: string }) => {
  const filteredArticles = articles.filter((article) => article.category === category);
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Featured Articles</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Handpicked content to inspire curiosity and learning
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};


const Home = () => {
  const [, setLocation] = useLocation();

  const handleSearch = (query: string, ageLevel: AgeLevel | "All") => {
    const params = new URLSearchParams();
    if (query) params.append("q", query);
    if (ageLevel !== "All") params.append("level", ageLevel);

    setLocation(`/articles?${params.toString()}`);
  };

  return (
    <div>
      {/* Hero */}
      <Hero onSearch={handleSearch} />

      {/* Monthly Theme */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">Monthly Theme</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">Ancient Civilizations</p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">Explore the foundations of human society through the remarkable achievements of ancient cultures.</p>
          </div>
        </div>
      </div>

      {/* Featured Articles */}
      <FeaturedArticles category="Greek geography" />

      {/* Resources Section */}
      <ResourcesSection 
        resources={resources.slice(0, 3)} 
        title="Educational Resources"
        subtitle="Enhance your learning with our downloadable materials and activities"
      />

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Home;