import { useEffect, useState } from "react";
import { useLocation, Link } from "wouter";
import Hero from "@/components/Hero";
import ArticleCard from "@/components/ArticleCard";
import { searchArticles } from "@/data/articles";
import { getArticlesFromLocalStorage } from "@/utils/articleUtils";
import { AgeLevel, AgeLevelFilter, Article } from "@/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  GraduationCap,
  BookOpen,
  Search,
  PlusCircle,
  FileUp,
  Edit
} from "lucide-react";
import { articles } from "@/data/articles";
import { educationalArticles } from "@/data/educationalArticles";


const Articles = () => {
  const [location] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([...articles, ...educationalArticles]);
  const allArticles = [...articles, ...educationalArticles];
  const [ageLevel, setAgeLevel] = useState<AgeLevelFilter>("All");
  const [isSearching, setIsSearching] = useState(false);
  const [selectedTab, setSelectedTab] = useState("all"); // Added state for tab selection

  useEffect(() => {
    // Parse query parameters from URL
    const params = new URLSearchParams(location.split("?")[1]);
    const queryParam = params.get("q") || "";
    const levelParam = params.get("level") as AgeLevelFilter || "All";

    setSearchQuery(queryParam);
    setAgeLevel(levelParam);

    // Perform search with URL parameters
    if (queryParam || levelParam !== "All") {
      performSearch(queryParam, levelParam);
    } else {
      // Show all articles if no search parameters
      setSearchResults([...articles, ...educationalArticles]);
    }
  }, [location]);

  const performSearch = (query: string, level: AgeLevelFilter) => {
    setIsSearching(true);

    // Simulate search delay
    setTimeout(() => {
      // Get standard articles
      const defaultResults = searchArticles(query, level);

      // Get articles from localStorage
      const localArticles = getArticlesFromLocalStorage();

      // Filter local articles based on search criteria
      const localResults = localArticles.filter(article => {
        // Filter by age level if specified
        if (level !== 'All' && article.ageLevel !== level) {
          return false;
        }

        // Search by query in title, description, and content
        if (query) {
          const searchTerms = query.toLowerCase();
          return (
            article.title.toLowerCase().includes(searchTerms) ||
            article.description.toLowerCase().includes(searchTerms) ||
            article.content.toLowerCase().includes(searchTerms)
          );
        }

        return true;
      });

      // Combine results (local articles first to allow overriding)
      const combined = [...localResults, ...defaultResults];

      // Remove duplicates (if a local article has the same ID as a default one)
      const uniqueResults = combined.filter((article, index, self) =>
        index === self.findIndex(a => a.id === article.id)
      );

      setSearchResults(uniqueResults);
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
    setAgeLevel(value as AgeLevelFilter);
    performSearch(searchQuery, value as AgeLevelFilter);

    // Update URL with new level
    const params = new URLSearchParams();
    if (searchQuery) params.set("q", searchQuery);
    if (value !== "All") params.set("level", value);

    history.replaceState(null, "", `?${params.toString()}`);
  };

  useEffect(() => {
    if (params.get("category") === "elementary") {
      setSelectedTab("Elementary School");
    } else if (params.get("category") === "middle") {
      setSelectedTab("Middle School");
    } else if (params.get("category") === "common-core") {
      setSelectedTab("Common Core");
    } else {
      setSelectedTab("all");
    }
  }, [params]);

  useEffect(() => {
    if (selectedTab === "all") {
      setSearchResults(allArticles);
    } else if (selectedTab === "Common Core") {
      setSearchResults(
        allArticles.filter((article) => article.tags.includes("Common Core"))
      );
    } else {
      setSearchResults(
        allArticles.filter((article) => article.category === selectedTab)
      );
    }
  }, [selectedTab]);


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
              <TabsList className="grid grid-cols-3">
                <TabsTrigger value="All">All Levels</TabsTrigger>
                <TabsTrigger value="Elementary" className="flex items-center gap-1">
                  <GraduationCap className="h-4 w-4" />
                  Elementary
                </TabsTrigger>
                <TabsTrigger value="Middle School" className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  Middle School
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="mt-8 mb-12 flex justify-center gap-4">
          <Link href="/create-article">
            <Button className="flex items-center gap-2">
              <PlusCircle className="h-5 w-5" />
              Create New Article
            </Button>
          </Link>

          <Link href="/import-article">
            <Button variant="outline" className="flex items-center gap-2">
              <FileUp className="h-5 w-5" />
              Import Article
            </Button>
          </Link>
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
                <div key={article.id} className="relative group">
                  <ArticleCard article={article} />
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link href={`/edit-article/${article.slug}`}>
                      <Button size="sm" variant="secondary" className="flex items-center gap-1">
                        <Edit className="h-3 w-3" />
                        Edit
                      </Button>
                    </Link>
                  </div>
                </div>
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