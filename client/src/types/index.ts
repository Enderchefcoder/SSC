export type AgeLevel = "Elementary" | "Middle School";
export type AgeLevelFilter = AgeLevel | "All";

export type Tag = {
  name: string;
  color: string;
};

export type Author = {
  name: string;
  initials: string;
  bio?: string;
};

export type QuizQuestion = {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
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
  quiz?: QuizQuestion[];
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
  imageUrl?: string;
};

export type SearchFilters = {
  query: string;
  ageLevel: AgeLevelFilter;
};
