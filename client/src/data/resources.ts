import { Resource } from "@/types";

export const resources: Resource[] = [
  {
    id: "1",
    title: "Ancient Egypt Timeline Activity",
    description: "Place key events from ancient Egyptian history on a timeline and understand how they connect to world history.",
    type: "Worksheet",
    ageLevel: ["Elementary", "Middle School"],
    downloadUrl: "#",
    thumbnailIcon: "file-pdf"
  },
  {
    id: "2",
    title: "Wonders of the Ancient World",
    description: "Comprehensive slideshow featuring all seven ancient wonders with high-quality images and key facts.",
    type: "Presentation",
    ageLevel: ["Middle School", "High School"],
    downloadUrl: "#",
    thumbnailIcon: "file-powerpoint"
  },
  {
    id: "3",
    title: "Tour the Great Pyramids",
    description: "Experience the wonders of ancient Egypt with our guided 360° virtual tour of the Giza Pyramid Complex.",
    type: "Virtual Field Trip",
    ageLevel: ["Elementary", "Middle School", "High School"],
    downloadUrl: "#",
    thumbnailIcon: "video"
  },
  {
    id: "4",
    title: "Roman Republic Government Structure",
    description: "Compare and contrast Roman Republic government branches with modern democratic systems.",
    type: "Worksheet",
    ageLevel: ["Middle School", "High School"],
    downloadUrl: "#",
    thumbnailIcon: "file-pdf"
  },
  {
    id: "5",
    title: "Maya Mathematics and Calendar Systems",
    description: "Interactive worksheet explaining the Maya number system, calendar calculations, and astronomical predictions.",
    type: "Worksheet",
    ageLevel: ["High School"],
    downloadUrl: "#",
    thumbnailIcon: "file-pdf"
  },
  {
    id: "6",
    title: "Ancient Civilizations Comparison Chart",
    description: "Compare the key developments, achievements, and legacies of major ancient civilizations.",
    type: "Worksheet",
    ageLevel: ["Elementary", "Middle School", "High School"],
    downloadUrl: "#",
    thumbnailIcon: "file-pdf"
  },
  {
    id: "7",
    title: "Virtual Tour of Ancient Athens",
    description: "Explore the birthplace of democracy and see the Parthenon as it appeared in ancient times through digital reconstruction.",
    type: "Virtual Field Trip",
    ageLevel: ["Middle School", "High School"],
    downloadUrl: "#",
    thumbnailIcon: "video"
  },
  {
    id: "8",
    title: "Mesopotamian Innovations",
    description: "Explore how Mesopotamian inventions like writing, the wheel, and irrigation systems changed human history.",
    type: "Presentation",
    ageLevel: ["Elementary", "Middle School"],
    downloadUrl: "#",
    thumbnailIcon: "file-powerpoint"
  },
  {
    id: "9",
    title: "World History Interactive Timeline",
    description: "Comprehensive visual timeline of major historical events from prehistory to modern times.",
    type: "Presentation",
    ageLevel: ["Elementary", "Middle School", "High School"],
    downloadUrl: "#",
    thumbnailIcon: "file-powerpoint"
  }
];

export const getResourcesByType = (type: string): Resource[] => {
  return resources.filter(resource => resource.type === type);
};

export const getResourcesByAgeLevel = (ageLevel: string): Resource[] => {
  return resources.filter(resource => resource.ageLevel.includes(ageLevel as any));
};

export const searchResources = (query: string, ageLevel: string = 'All'): Resource[] => {
  const lowercaseQuery = query.toLowerCase();
  
  return resources.filter(resource => {
    const matchesQuery = (
      resource.title.toLowerCase().includes(lowercaseQuery) ||
      resource.description.toLowerCase().includes(lowercaseQuery) ||
      resource.type.toLowerCase().includes(lowercaseQuery)
    );
    
    const matchesAgeLevel = ageLevel === 'All' || resource.ageLevel.includes(ageLevel as any);
    
    return matchesQuery && matchesAgeLevel;
  });
};
