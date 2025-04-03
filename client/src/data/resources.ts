import { Resource, AgeLevelFilter } from "@/types";

export const resources: Resource[] = [
  {
    id: "1",
    title: "Ancient Egypt Timeline Activity",
    description: "Place key events from ancient Egyptian history on a timeline and understand how they connect to world history.",
    type: "Worksheet",
    ageLevel: ["Elementary", "Middle School"],
    downloadUrl: "https://www.education.com/download/worksheet/172814/timeline-ancient-egypt.pdf",
    thumbnailIcon: "file-pdf",
    imageUrl: "https://images.unsplash.com/photo-1608155686393-8fdd966d784d?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "Wonders of the Ancient World",
    description: "Comprehensive slideshow featuring all seven ancient wonders with high-quality images and key facts.",
    type: "Presentation",
    ageLevel: ["Middle School"],
    downloadUrl: "https://www.slideshare.net/download/seven-wonders-of-the-ancient-world-presentation",
    thumbnailIcon: "file-powerpoint",
    imageUrl: "https://images.unsplash.com/photo-1608416026650-66b5d770399c?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "Tour the Great Pyramids",
    description: "Experience the wonders of ancient Egypt with our guided 360° virtual tour of the Giza Pyramid Complex.",
    type: "Virtual Field Trip",
    ageLevel: ["Elementary", "Middle School"],
    downloadUrl: "https://historyview.org/library/pyramids-of-giza/",
    thumbnailIcon: "video",
    imageUrl: "https://images.unsplash.com/photo-1590102389740-b48e86dbd761?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: "4",
    title: "Roman Republic Government Structure",
    description: "Compare and contrast Roman Republic government branches with modern democratic systems.",
    type: "Worksheet",
    ageLevel: ["Middle School"],
    downloadUrl: "https://www.icivics.org/teachers/lesson-plans/roman-republic-comparison",
    thumbnailIcon: "file-pdf",
    imageUrl: "https://images.unsplash.com/photo-1581271962026-f3673253bc56?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: "6",
    title: "Ancient Civilizations Comparison Chart",
    description: "Compare the key developments, achievements, and legacies of major ancient civilizations.",
    type: "Worksheet",
    ageLevel: ["Elementary", "Middle School"],
    downloadUrl: "https://www.teacherspayteachers.com/Product/Ancient-Civilizations-Comparison-Chart-3766734",
    thumbnailIcon: "file-pdf",
    imageUrl: "https://images.unsplash.com/photo-1596825764253-94970057def5?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: "7",
    title: "Virtual Tour of Ancient Athens",
    description: "Explore the birthplace of democracy and see the Parthenon as it appeared in ancient times through digital reconstruction.",
    type: "Virtual Field Trip",
    ageLevel: ["Middle School"],
    downloadUrl: "https://www.yougoculture.com/virtual-tour/athens/",
    thumbnailIcon: "video",
    imageUrl: "https://images.unsplash.com/photo-1603779702200-ea19a28070e3?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: "8",
    title: "Mesopotamian Innovations",
    description: "Explore how Mesopotamian inventions like writing, the wheel, and irrigation systems changed human history.",
    type: "Presentation",
    ageLevel: ["Elementary", "Middle School"],
    downloadUrl: "https://www.nationalgeographic.org/media/mesopotamian-innovations/",
    thumbnailIcon: "file-powerpoint",
    imageUrl: "https://images.unsplash.com/photo-1570870802499-f12b24252110?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: "9",
    title: "World History Interactive Timeline",
    description: "Comprehensive visual timeline of major historical events from prehistory to modern times.",
    type: "Presentation",
    ageLevel: ["Elementary", "Middle School"],
    downloadUrl: "https://www.timetoast.com/timelines/world-history-major-events",
    thumbnailIcon: "file-powerpoint",
    imageUrl: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: "10",
    title: "California Gold Rush Activity Pack",
    description: "Engage students with activities about the California Gold Rush including mapping, primary sources, and role-playing.",
    type: "Worksheet",
    ageLevel: ["Elementary"],
    downloadUrl: "https://www.docsteach.org/activities/teacher/the-california-gold-rush",
    thumbnailIcon: "file-pdf",
    imageUrl: "https://images.unsplash.com/photo-1605615923013-c0e4562e1b1f?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: "11",
    title: "United States Regions Explorer",
    description: "Interactive presentation about the different regions of the United States with geography, climate, and cultural highlights.",
    type: "Presentation",
    ageLevel: ["Elementary"],
    downloadUrl: "https://www.nationalgeographic.org/education/resource-library/united-states-geography/",
    thumbnailIcon: "file-powerpoint",
    imageUrl: "https://images.unsplash.com/photo-1618944913480-b67ee16d7b77?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: "12",
    title: "Virtual Tour of the California Gold Country",
    description: "Take your students on a virtual journey to historic gold mining towns and learn about the people who sought their fortune.",
    type: "Virtual Field Trip",
    ageLevel: ["Elementary", "Middle School"],
    downloadUrl: "https://www.parks.ca.gov/VirtualTours/MarshallGold/",
    thumbnailIcon: "video",
    imageUrl: "https://images.unsplash.com/photo-1578067255410-5945c8a6a65e?q=80&w=300&auto=format&fit=crop"
  }
];

export const getResourcesByType = (type: string): Resource[] => {
  return resources.filter(resource => resource.type === type);
};

export const getResourcesByAgeLevel = (ageLevel: AgeLevelFilter): Resource[] => {
  return resources.filter(resource => resource.ageLevel.includes(ageLevel as any));
};

export const searchResources = (query: string, ageLevel: AgeLevelFilter = 'All'): Resource[] => {
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