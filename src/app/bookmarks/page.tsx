"use client";

import React from "react";
import { Bookmark as BookmarkIcon } from "lucide-react";
import { useNews } from "@/context/NewsContext";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";

export default function BookmarksPage() {
  const { articles, bookmarkedArticles } = useNews();

  const bookmarkedArticlesList = articles.filter((article) =>
    bookmarkedArticles.includes(article.id)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center space-x-3 mb-8">
          <BookmarkIcon className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">
            Bookmarked Articles
          </h1>
        </div>

        {bookmarkedArticlesList.length === 0 ? (
          <div className="text-center py-12">
            <BookmarkIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              No bookmarks yet
            </h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Start bookmarking articles you want to read later. Click the
              bookmark icon on any article to save it here.
            </p>
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Browse Articles
            </Link>
          </div>
        ) : (
          <>
            <p className="text-gray-600 mb-6">
              You have {bookmarkedArticlesList.length} bookmarked article
              {bookmarkedArticlesList.length !== 1 ? "s" : ""}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookmarkedArticlesList.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
