"use client";

import React from "react";
import Link from "next/link";
import { ExternalLink, Globe, Star } from "lucide-react";
import { useNews } from "@/context/NewsContext";
import { getSourceInitials } from "@/lib/utils";

export default function SourcesPage() {
  const { sources, articles } = useNews();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            News Sources
          </h1>
          <p className="text-gray-600">
            Explore news from our trusted sources. We aggregate content from
            reputable news organizations worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sources.map((source) => {
            const sourceArticles = articles.filter(
              (article) => article.source.id === source.id
            );
            const latestArticle = sourceArticles[0];

            return (
              <div
                key={source.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-lg font-bold text-gray-600">
                        {getSourceInitials(source.name)}
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-gray-900">
                          {source.name}
                        </h2>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Globe className="w-4 h-4" />
                          <span>{source.domain}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium text-gray-700">
                        {source.credibilityScore}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">
                    {source.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="bg-gray-100 px-2 py-1 rounded">
                      {source.country}
                    </span>
                    <span>{sourceArticles.length} articles</span>
                  </div>

                  {latestArticle && (
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-xs text-gray-500 mb-1">
                        Latest article:
                      </p>
                      <Link
                        href={`/article/${latestArticle.id}`}
                        className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors line-clamp-2"
                      >
                        {latestArticle.title}
                      </Link>
                    </div>
                  )}

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <Link
                        href={`/source/${source.id}`}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                      >
                        View all articles →
                      </Link>
                      <a
                        href={`https://${source.domain}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Visit site</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
