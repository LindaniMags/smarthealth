"use client";

import React, { useState } from "react";
import { Filter, X, Calendar } from "lucide-react";
import { useNews } from "@/context/NewsContext";

export default function FiltersBar() {
  const { searchFilters, setSearchFilters, sources } = useNews();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const handleDateRangeChange = (
    dateRange: "today" | "week" | "month" | "all"
  ) => {
    setSearchFilters({
      ...searchFilters,
      dateRange: dateRange === "all" ? undefined : dateRange,
    });
  };

  const handleSortChange = (sortBy: "relevance" | "date" | "popularity") => {
    setSearchFilters({
      ...searchFilters,
      sortBy,
    });
  };

  const handleSourceChange = (sourceId: string) => {
    setSearchFilters({
      ...searchFilters,
      source: searchFilters.source === sourceId ? undefined : sourceId,
    });
  };

  const clearFilters = () => {
    setSearchFilters({
      query: searchFilters.query, // Keep the search query but clear other filters
    });
  };

  const hasActiveFilters =
    searchFilters.category ||
    searchFilters.source ||
    searchFilters.dateRange ||
    (searchFilters.sortBy && searchFilters.sortBy !== "relevance");

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsFiltersOpen(!isFiltersOpen)}
              className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
              {hasActiveFilters && (
                <span className="bg-blue-600 text-white text-xs rounded-full w-2 h-2"></span>
              )}
            </button>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center space-x-1 px-3 py-2 text-sm text-red-600 hover:text-red-700"
              >
                <X className="w-4 h-4" />
                <span>Clear filters</span>
              </button>
            )}
          </div>

          {/* Sort options - always visible */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Sort by:</span>
            <select
              value={searchFilters.sortBy || "relevance"}
              onChange={(e) =>
                handleSortChange(
                  e.target.value as "relevance" | "date" | "popularity"
                )
              }
              className="text-sm border border-gray-300 rounded px-3 py-1 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="relevance">Relevance</option>
              <option value="date">Date</option>
              <option value="popularity">Popularity</option>
            </select>
          </div>
        </div>

        {/* Expanded filters */}
        {isFiltersOpen && (
          <div className="border-t border-gray-200 py-4 space-y-4">
            {/* Date Range Filter */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Date Range
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  { value: "all", label: "All time" },
                  { value: "today", label: "Today" },
                  { value: "week", label: "This week" },
                  { value: "month", label: "This month" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() =>
                      handleDateRangeChange(
                        option.value as "today" | "week" | "month" | "all"
                      )
                    }
                    className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                      (searchFilters.dateRange || "all") === option.value
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Source Filter */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">
                Sources
              </h4>
              <div className="flex flex-wrap gap-2">
                {sources.map((source) => (
                  <button
                    key={source.id}
                    onClick={() => handleSourceChange(source.id)}
                    className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                      searchFilters.source === source.id
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {source.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
