export type AgeLevel = "Elementary" | "Middle School" | "High School";

export type Tag = {
  name: string;
  color: string;
};

export type Author = {
  name: string;
  initials: string;
  bio?: string;
};

export type Article = {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  imageUrl: string;
  imageAlt: string;
  imageCredit?: string;
  publishDate: string;
  readTime: number;
  ageLevel: AgeLevel;
  tags: Tag[];
  author: Author;
  didYouKnow?: {
    fact: string;
  };
  discussionQuestions?: string[];
  sources?: {
    title: string;
    author?: string;
    publisher?: string;
    url?: string;
    year?: number;
  }[];
  relatedArticles?: string[];
  worksheets?: string[];
};

export type Resource = {
  id: string;
  title: string;
  description: string;
  type: "Worksheet" | "Presentation" | "Virtual Field Trip";
  ageLevel: AgeLevel[];
  downloadUrl?: string;
  thumbnailIcon: string;
};

export type SearchFilters = {
  query: string;
  ageLevel: AgeLevel | "All";
};
