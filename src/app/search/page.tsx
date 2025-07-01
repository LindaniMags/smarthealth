"use client";

import React from "react";
import { Search as SearchIcon } from "lucide-react";
import { useNews } from "@/context/NewsContext";
import ArticleCard from "@/components/ArticleCard";
import FiltersBar from "@/components/FiltersBar";
import Link from "next/link";

export default function SearchPage() {
  const { filteredArticles, searchFilters } = useNews();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-3 mb-4">
            <SearchIcon className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Search Results</h1>
          </div>

          {searchFilters.query && (
            <p className="text-gray-600">
              Showing results for:{" "}
              <span className="font-semibold">
                &ldquo;{searchFilters.query}&rdquo;
              </span>
            </p>
          )}

          <p className="text-sm text-gray-500 mt-2">
            {filteredArticles.length} article
            {filteredArticles.length !== 1 ? "s" : ""} found
          </p>
        </div>
      </div>

      <FiltersBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-12">
            <SearchIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              No results found
            </h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              We couldn&apos;t find any articles matching your search. Try
              different keywords or adjust your filters.
            </p>
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Browse All Articles
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
