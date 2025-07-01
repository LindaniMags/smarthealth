"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  Article,
  Category,
  Source,
  SearchFilters,
  NewsContextType,
} from "@/types";
import { mockArticles, mockCategories, mockSources } from "@/data/mockData";

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export function NewsProvider({ children }: { children: ReactNode }) {
  const [articles] = useState<Article[]>(mockArticles);
  const [categories] = useState<Category[]>(mockCategories);
  const [sources] = useState<Source[]>(mockSources);
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({});
  const [bookmarkedArticles, setBookmarkedArticles] = useState<string[]>([]);

  // Load bookmarks from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem("bookmarkedArticles");
    if (saved) {
      setBookmarkedArticles(JSON.parse(saved));
    }
  }, []);

  // Save bookmarks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(
      "bookmarkedArticles",
      JSON.stringify(bookmarkedArticles)
    );
  }, [bookmarkedArticles]);

  const toggleBookmark = (articleId: string) => {
    setBookmarkedArticles((prev) =>
      prev.includes(articleId)
        ? prev.filter((id) => id !== articleId)
        : [...prev, articleId]
    );
  };

  // Filter articles based on search criteria
  const filteredArticles = React.useMemo(() => {
    let filtered = [...articles];

    // Text search
    if (searchFilters.query) {
      const query = searchFilters.query.toLowerCase();
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query) ||
          article.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          article.author.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (searchFilters.category) {
      filtered = filtered.filter(
        (article) => article.category.slug === searchFilters.category
      );
    }

    // Source filter
    if (searchFilters.source) {
      filtered = filtered.filter(
        (article) => article.source.id === searchFilters.source
      );
    }

    // Date range filter
    if (searchFilters.dateRange && searchFilters.dateRange !== "all") {
      const now = new Date();
      const filterDate = new Date();

      switch (searchFilters.dateRange) {
        case "today":
          filterDate.setDate(now.getDate() - 1);
          break;
        case "week":
          filterDate.setDate(now.getDate() - 7);
          break;
        case "month":
          filterDate.setMonth(now.getMonth() - 1);
          break;
      }

      filtered = filtered.filter(
        (article) => article.publishedAt >= filterDate
      );
    }

    // Sort articles
    switch (searchFilters.sortBy) {
      case "date":
        filtered.sort(
          (a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()
        );
        break;
      case "popularity":
        // Mock popularity sorting based on readTime (simulating engagement)
        filtered.sort((a, b) => b.readTime - a.readTime);
        break;
      default: // relevance
        // Keep current order for relevance (could implement more sophisticated scoring)
        break;
    }

    return filtered;
  }, [articles, searchFilters]);

  const value: NewsContextType = {
    articles,
    categories,
    sources,
    searchFilters,
    bookmarkedArticles,
    setSearchFilters,
    toggleBookmark,
    filteredArticles,
  };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
}

export function useNews() {
  const context = useContext(NewsContext);
  if (context === undefined) {
    throw new Error("useNews must be used within a NewsProvider");
  }
  return context;
}
