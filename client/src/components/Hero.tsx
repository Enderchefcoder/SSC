import { useState } from "react";
import { useLocation } from "wouter";
import { Search, GraduationCap, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AgeLevel } from "@/types";

type HeroProps = {
  onSearch?: (query: string, ageLevel: AgeLevel | "All") => void;
  showSearch?: boolean;
};

const Hero = ({ onSearch, showSearch = true }: HeroProps) => {
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<AgeLevel | "All">("All");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery, activeFilter);
    } else {
      // If no onSearch prop, navigate to articles with query params
      const params = new URLSearchParams();
      if (searchQuery) params.set("q", searchQuery);
      if (activeFilter !== "All") params.set("level", activeFilter);
      
      setLocation(`/articles?${params.toString()}`);
    }
  };

  const handleFilterClick = (level: AgeLevel) => {
    setActiveFilter(level === activeFilter ? "All" : level);
  };

  return (
    <div className="relative bg-primary-600">
      <div className="absolute inset-0">
        <img 
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="World map with historical elements"
        />
        <div className="absolute inset-0 bg-primary-600 mix-blend-multiply opacity-70"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Explore Our World's Rich History
        </h1>
        <p className="mt-6 text-xl text-white max-w-3xl">
          Discover engaging educational content crafted for students of all ages. From ancient civilizations to modern events, dive into the stories that shaped our world.
        </p>
        
        {showSearch && (
          <>
            {/* Search Bar */}
            <div className="mt-10 max-w-xl">
              <form onSubmit={handleSearch} className="mt-1 flex rounded-md shadow-sm">
                <div className="relative flex items-stretch flex-grow">
                  <Input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-l-md pl-4 sm:text-sm border-gray-300 py-3"
                    placeholder="Search topics, regions, or time periods..."
                  />
                </div>
                <Button 
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-teal-500 hover:bg-teal-600"
                >
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </form>
            </div>
            
            {/* Age Filter Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                onClick={() => handleFilterClick("Elementary")}
                className={`inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-amber-500 hover:bg-amber-600 focus:outline-none ${activeFilter === "Elementary" ? "ring-2 ring-offset-2 ring-amber-500" : ""}`}
              >
                <GraduationCap className="mr-2 h-4 w-4" />
                Elementary
              </Button>
              <Button
                onClick={() => handleFilterClick("Middle School")}
                className={`inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none ${activeFilter === "Middle School" ? "ring-2 ring-offset-2 ring-indigo-500" : ""}`}
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Middle School
              </Button>
              <Button
                onClick={() => handleFilterClick("High School")}
                className={`inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none ${activeFilter === "High School" ? "ring-2 ring-offset-2 ring-purple-500" : ""}`}
              >
                <Award className="mr-2 h-4 w-4" />
                High School
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Hero;
