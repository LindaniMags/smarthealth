"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Clock,
  Bookmark,
  Share2,
  Calendar,
  User,
} from "lucide-react";
import { useNews } from "@/context/NewsContext";
import { formatDate, formatReadTime, shareArticle } from "@/lib/utils";
import ArticleCard from "@/components/ArticleCard";

interface ArticlePageProps {
  params: Promise<{ id: string }>;
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const [articleId, setArticleId] = useState<string | null>(null);
  const { articles, bookmarkedArticles, toggleBookmark } = useNews();

  useEffect(() => {
    params.then(({ id }) => setArticleId(id));
  }, [params]);

  if (!articleId) {
    return <div>Loading...</div>;
  }

  const article = articles.find((a) => a.id === articleId);

  if (!article) {
    notFound();
  }

  const isBookmarked = bookmarkedArticles.includes(article.id);
  const relatedArticles = articles
    .filter((a) => a.id !== article.id && a.category.id === article.category.id)
    .slice(0, 3);

  const handleBookmark = () => {
    toggleBookmark(article.id);
  };

  const handleShare = () => {
    shareArticle(article);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 lg:h-[500px]">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Back Button */}
        <div className="absolute top-4 left-4">
          <Link
            href="/"
            className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg text-gray-900 hover:bg-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </Link>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`inline-block px-3 py-2 rounded-full text-sm font-medium text-white ${article.category.color}`}
          >
            {article.category.name}
          </span>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 lg:p-8">
            {/* Article Header */}
            <header className="mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-sm font-semibold text-gray-600">
                      {article.source.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .toUpperCase()
                        .slice(0, 2)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {article.source.name}
                      </p>
                      <div className="flex items-center space-x-3 text-sm text-gray-500">
                        <span className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {article.author}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(article.publishedAt)}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {formatReadTime(article.readTime)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={handleBookmark}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
                      isBookmarked
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <Bookmark
                      className="w-4 h-4"
                      fill={isBookmarked ? "currentColor" : "none"}
                    />
                    <span>{isBookmarked ? "Bookmarked" : "Bookmark"}</span>
                  </button>

                  <button
                    onClick={handleShare}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </header>

            {/* Article Excerpt */}
            <div className="mb-8 p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
              <p className="text-lg text-gray-700 font-medium leading-relaxed">
                {article.excerpt}
              </p>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {article.content.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return (
                    <h3
                      key={index}
                      className="text-xl font-bold text-gray-900 mt-8 mb-4"
                    >
                      {paragraph.replace(/\*\*/g, "")}
                    </h3>
                  );
                }
                return (
                  <p key={index} className="text-gray-700 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="mt-12 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <ArticleCard
                  key={relatedArticle.id}
                  article={relatedArticle}
                  variant="compact"
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
