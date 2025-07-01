"use client";

import React from "react";
import { useNews } from "@/context/NewsContext";

export default function CategoryFilter() {
  const { categories, searchFilters, setSearchFilters } = useNews();

  const handleCategoryClick = (categorySlug: string) => {
    const isSelected = searchFilters.category === categorySlug;
    setSearchFilters({
      ...searchFilters,
      category: isSelected ? undefined : categorySlug,
    });
  };

  return (
    <div className="bg-white py-4 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 overflow-x-auto scrollbar-hide">
          <button
            onClick={() =>
              setSearchFilters({ ...searchFilters, category: undefined })
            }
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              !searchFilters.category
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.slug)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center space-x-2 ${
                searchFilters.category === category.slug
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
