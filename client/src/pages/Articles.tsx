import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import Hero from "@/components/Hero";
import ArticleCard from "@/components/ArticleCard";
import { searchArticles } from "@/data/articles";
import { AgeLevel, Article } from "@/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { GraduationCap, BookOpen, Award, Search } from "lucide-react";

const Articles = () => {
  const [location] = useLocation();
  const [searchResults, setSearchResults] = useState<Article[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [ageLevel, setAgeLevel] = useState<AgeLevel | "All">("All");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    // Parse query parameters from URL
    const params = new URLSearchParams(location.split("?")[1]);
    const queryParam = params.get("q") || "";
    const levelParam = params.get("level") as AgeLevel || "All";
    
    setSearchQuery(queryParam);
    setAgeLevel(levelParam);
    
    // Perform search with URL parameters
    if (queryParam || levelParam !== "All") {
      performSearch(queryParam, levelParam);
    } else {
      // Show all articles if no search parameters
      setSearchResults(searchArticles(""));
    }
  }, [location]);

  const performSearch = (query: string, level: AgeLevel | "All") => {
    setIsSearching(true);
    
    // Simulate search delay
    setTimeout(() => {
      const results = searchArticles(query, level);
      setSearchResults(results);
      setIsSearching(false);
    }, 500);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(searchQuery, ageLevel);
    
    // Update URL with search parameters
    const params = new URLSearchParams();
    if (searchQuery) params.set("q", searchQuery);
    if (ageLevel !== "All") params.set("level", ageLevel);
    
    history.replaceState(null, "", `?${params.toString()}`);
  };

  const handleAgeLevelChange = (value: string) => {
    setAgeLevel(value as AgeLevel | "All");
    performSearch(searchQuery, value as AgeLevel | "All");
    
    // Update URL with new level
    const params = new URLSearchParams();
    if (searchQuery) params.set("q", searchQuery);
    if (value !== "All") params.set("level", value);
    
    history.replaceState(null, "", `?${params.toString()}`);
  };

  return (
    <div>
      <Hero showSearch={false} />
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Articles & Resources
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Explore our collection of educational content for all age levels
          </p>
        </div>
        
        <div className="mt-10 max-w-3xl mx-auto">
          <form onSubmit={handleSearch} className="flex gap-2">
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for topics, regions, or time periods..."
              className="flex-grow"
            />
            <Button type="submit" disabled={isSearching}>
              <Search className="mr-2 h-4 w-4" />
              {isSearching ? "Searching..." : "Search"}
            </Button>
          </form>
          
          <div className="mt-6">
            <Tabs defaultValue={ageLevel} onValueChange={handleAgeLevelChange}>
              <TabsList className="grid grid-cols-4">
                <TabsTrigger value="All">All Levels</TabsTrigger>
                <TabsTrigger value="Elementary" className="flex items-center gap-1">
                  <GraduationCap className="h-4 w-4" />
                  Elementary
                </TabsTrigger>
                <TabsTrigger value="Middle School" className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  Middle School
                </TabsTrigger>
                <TabsTrigger value="High School" className="flex items-center gap-1">
                  <Award className="h-4 w-4" />
                  High School
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        
        <div className="mt-12">
          {isSearching ? (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
              <p className="mt-4 text-gray-500">Searching for articles...</p>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
              {searchResults.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">No articles found matching your search criteria.</p>
              <p className="mt-2 text-gray-500">Try adjusting your search terms or filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Articles;
