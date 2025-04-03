import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import Hero from "@/components/Hero";
import ResourcesSection from "@/components/ResourcesSection";
import Newsletter from "@/components/Newsletter";
import { resources, searchResources } from "@/data/resources";
import { AgeLevel, Resource } from "@/types";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, GraduationCap, BookOpen, Award, FileText, Presentation, Video } from "lucide-react";

const Resources = () => {
  const [location] = useLocation();
  const [searchResults, setSearchResults] = useState<Resource[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [ageLevel, setAgeLevel] = useState<AgeLevel | "All">("All");
  const [resourceType, setResourceType] = useState<string>("All");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    // Parse query parameters from URL
    const params = new URLSearchParams(location.split("?")[1]);
    const queryParam = params.get("q") || "";
    const levelParam = params.get("level") as AgeLevel || "All";
    const typeParam = params.get("type") || "All";
    
    setSearchQuery(queryParam);
    setAgeLevel(levelParam);
    setResourceType(typeParam);
    
    // Perform search with URL parameters
    performSearch(queryParam, levelParam, typeParam);
  }, [location]);

  const performSearch = (query: string, level: AgeLevel | "All", type: string = "All") => {
    setIsSearching(true);
    
    // Simulate search delay
    setTimeout(() => {
      let results = searchResources(query, level);
      
      // Filter by resource type if specified
      if (type !== "All") {
        results = results.filter(resource => resource.type === type);
      }
      
      setSearchResults(results);
      setIsSearching(false);
    }, 500);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(searchQuery, ageLevel, resourceType);
    
    // Update URL with search parameters
    updateSearchParams();
  };

  const updateSearchParams = () => {
    const params = new URLSearchParams();
    if (searchQuery) params.set("q", searchQuery);
    if (ageLevel !== "All") params.set("level", ageLevel);
    if (resourceType !== "All") params.set("type", resourceType);
    
    history.replaceState(null, "", `?${params.toString()}`);
  };

  const handleAgeLevelChange = (value: string) => {
    setAgeLevel(value as AgeLevel | "All");
    performSearch(searchQuery, value as AgeLevel | "All", resourceType);
    
    // Update URL with search parameters after state changes
    setTimeout(updateSearchParams, 0);
  };

  const handleResourceTypeChange = (value: string) => {
    setResourceType(value);
    performSearch(searchQuery, ageLevel, value);
    
    // Update URL with search parameters after state changes
    setTimeout(updateSearchParams, 0);
  };

  // Group resources by type for display
  const worksheets = searchResults.filter(r => r.type === "Worksheet");
  const presentations = searchResults.filter(r => r.type === "Presentation");
  const virtualTours = searchResults.filter(r => r.type === "Virtual Field Trip");

  return (
    <div>
      <Hero showSearch={false} />
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Educational Resources
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Download materials and activities for your classroom or homeschool
          </p>
        </div>
        
        <div className="mt-10 max-w-3xl mx-auto">
          <form onSubmit={handleSearch} className="flex gap-2">
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for resources..."
              className="flex-grow"
            />
            <Button type="submit" disabled={isSearching}>
              <Search className="mr-2 h-4 w-4" />
              {isSearching ? "Searching..." : "Search"}
            </Button>
          </form>
          
          <div className="mt-6 space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Age Level</h3>
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
            
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Resource Type</h3>
              <Tabs defaultValue={resourceType} onValueChange={handleResourceTypeChange}>
                <TabsList className="grid grid-cols-4">
                  <TabsTrigger value="All">All Types</TabsTrigger>
                  <TabsTrigger value="Worksheet" className="flex items-center gap-1">
                    <FileText className="h-4 w-4" />
                    Worksheets
                  </TabsTrigger>
                  <TabsTrigger value="Presentation" className="flex items-center gap-1">
                    <Presentation className="h-4 w-4" />
                    Presentations
                  </TabsTrigger>
                  <TabsTrigger value="Virtual Field Trip" className="flex items-center gap-1">
                    <Video className="h-4 w-4" />
                    Virtual Tours
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          {isSearching ? (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
              <p className="mt-4 text-gray-500">Searching for resources...</p>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="space-y-16">
              {resourceType === "All" || resourceType === "Worksheet" ? (
                worksheets.length > 0 && <ResourcesSection resources={worksheets} title="Worksheets" subtitle="Printable activities for classroom use" />
              ) : null}
              
              {resourceType === "All" || resourceType === "Presentation" ? (
                presentations.length > 0 && <ResourcesSection resources={presentations} title="Presentations" subtitle="Comprehensive slideshows with visual content" />
              ) : null}
              
              {resourceType === "All" || resourceType === "Virtual Field Trip" ? (
                virtualTours.length > 0 && <ResourcesSection resources={virtualTours} title="Virtual Field Trips" subtitle="Experience historical sites through interactive tours" />
              ) : null}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">No resources found matching your search criteria.</p>
              <p className="mt-2 text-gray-500">Try adjusting your search terms or filters.</p>
            </div>
          )}
        </div>
      </div>
      
      <Newsletter />
    </div>
  );
};

export default Resources;
