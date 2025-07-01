"use client";

import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useNews } from "@/context/NewsContext";
import ArticleCard from "@/components/ArticleCard";
import FiltersBar from "@/components/FiltersBar";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const [categorySlug, setCategorySlug] = useState<string | null>(null);
  const { categories, setSearchFilters, filteredArticles } = useNews();

  useEffect(() => {
    params.then(({ slug }) => setCategorySlug(slug));
  }, [params]);

  const category = categorySlug
    ? categories.find((c) => c.slug === categorySlug)
    : null;

  useEffect(() => {
    if (category) {
      setSearchFilters({ category: category.slug });
    }
  }, [category, setSearchFilters]);

  if (!categorySlug) {
    return <div>Loading...</div>;
  }

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4 mb-4">
            <Link
              href="/categories"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Categories</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div
              className={`w-16 h-16 ${category.color} rounded-lg flex items-center justify-center`}
            >
              <span className="text-2xl">{category.icon}</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {category.name}
              </h1>
              <p className="text-gray-600 mt-1">{category.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                {filteredArticles.length} articles in this category
              </p>
            </div>
          </div>
        </div>
      </div>

      <FiltersBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              No articles found
            </h2>
            <p className="text-gray-600">
              There are no articles in this category yet.
            </p>
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
