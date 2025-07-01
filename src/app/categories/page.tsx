"use client";

import React from "react";
import Link from "next/link";
import { useNews } from "@/context/NewsContext";

export default function CategoriesPage() {
  const { categories, articles } = useNews();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          News Categories
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => {
            const categoryArticles = articles.filter(
              (article) => article.category.id === category.id
            );
            const latestArticle = categoryArticles[0];

            return (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className="group block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div
                  className={`h-32 ${category.color} flex items-center justify-center`}
                >
                  <span className="text-4xl">{category.icon}</span>
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h2>

                  <p className="text-gray-600 text-sm mb-4">
                    {category.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{categoryArticles.length} articles</span>
                    {latestArticle && (
                      <span>
                        Latest: {latestArticle.publishedAt.toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
