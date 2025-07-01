export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  publishedAt: Date;
  author: string;
  source: Source;
  category: Category;
  tags: string[];
  readTime: number;
  isBookmarked?: boolean;
}

export interface Source {
  id: string;
  name: string;
  domain: string;
  logoUrl: string;
  description: string;
  country: string;
  credibilityScore: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  color: string;
  description: string;
}

export interface SearchFilters {
  query?: string;
  category?: string;
  source?: string;
  dateRange?: "today" | "week" | "month" | "all";
  sortBy?: "relevance" | "date" | "popularity";
}

export interface NewsContextType {
  articles: Article[];
  categories: Category[];
  sources: Source[];
  searchFilters: SearchFilters;
  bookmarkedArticles: string[];
  setSearchFilters: (filters: SearchFilters) => void;
  toggleBookmark: (articleId: string) => void;
  filteredArticles: Article[];
}
