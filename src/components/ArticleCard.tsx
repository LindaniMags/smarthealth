"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, Bookmark, Share2 } from "lucide-react";
import { Article } from "@/types";
import { useNews } from "@/context/NewsContext";
import {
  formatDate,
  formatReadTime,
  getSourceInitials,
  shareArticle,
} from "@/lib/utils";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "featured" | "compact";
}

export default function ArticleCard({
  article,
  variant = "default",
}: ArticleCardProps) {
  const { bookmarkedArticles, toggleBookmark } = useNews();
  const isBookmarked = bookmarkedArticles.includes(article.id);

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleBookmark(article.id);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    shareArticle(article);
  };

  if (variant === "featured") {
    return (
      <Link href={`/article/${article.id}`}>
        <article className="group cursor-pointer bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
          <div className="relative h-64 lg:h-80">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium text-white ${article.category.color}`}
              >
                {article.category.name}
              </span>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-semibold text-gray-600">
                  {getSourceInitials(article.source.name)}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {article.source.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatDate(article.publishedAt)}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handleBookmark}
                  className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${
                    isBookmarked ? "text-blue-600" : "text-gray-400"
                  }`}
                >
                  <Bookmark
                    className="w-4 h-4"
                    fill={isBookmarked ? "currentColor" : "none"}
                  />
                </button>
                <button
                  onClick={handleShare}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
              {article.title}
            </h2>

            <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {formatReadTime(article.readTime)}
              </span>
              <span>By {article.author}</span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link href={`/article/${article.id}`}>
        <article className="group cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 border border-gray-100">
          <div className="flex space-x-4">
            <div className="relative w-20 h-20 flex-shrink-0">
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                className="object-cover rounded-md"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
                {article.title}
              </h3>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <span>{article.source.name}</span>
                  <span>•</span>
                  <span>{formatDate(article.publishedAt)}</span>
                </div>

                <button
                  onClick={handleBookmark}
                  className={`p-1 rounded hover:bg-gray-100 transition-colors ${
                    isBookmarked ? "text-blue-600" : "text-gray-400"
                  }`}
                >
                  <Bookmark
                    className="w-3 h-3"
                    fill={isBookmarked ? "currentColor" : "none"}
                  />
                </button>
              </div>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  // Default variant
  return (
    <Link href={`/article/${article.id}`}>
      <article className="group cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100">
        <div className="relative h-48">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <span
              className={`inline-block px-2 py-1 rounded-full text-xs font-medium text-white ${article.category.color}`}
            >
              {article.category.name}
            </span>
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs font-semibold text-gray-600">
                {getSourceInitials(article.source.name)}
              </div>
              <span className="text-xs text-gray-500">
                {article.source.name}
              </span>
            </div>

            <button
              onClick={handleBookmark}
              className={`p-1 rounded hover:bg-gray-100 transition-colors ${
                isBookmarked ? "text-blue-600" : "text-gray-400"
              }`}
            >
              <Bookmark
                className="w-4 h-4"
                fill={isBookmarked ? "currentColor" : "none"}
              />
            </button>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
            {article.title}
          </h3>

          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>{formatDate(article.publishedAt)}</span>
            <div className="flex items-center space-x-3">
              <span className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {formatReadTime(article.readTime)}
              </span>
              <button
                onClick={handleShare}
                className="p-1 rounded hover:bg-gray-100 transition-colors hover:text-gray-700"
              >
                <Share2 className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
