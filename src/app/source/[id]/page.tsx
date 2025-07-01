"use client";

import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Globe, Star } from "lucide-react";
import { useNews } from "@/context/NewsContext";
import ArticleCard from "@/components/ArticleCard";
import FiltersBar from "@/components/FiltersBar";
import { getSourceInitials } from "@/lib/utils";

interface SourcePageProps {
  params: Promise<{ id: string }>;
}

export default function SourcePage({ params }: SourcePageProps) {
  const [sourceId, setSourceId] = useState<string | null>(null);
  const { sources, setSearchFilters, filteredArticles } = useNews();

  useEffect(() => {
    params.then(({ id }) => setSourceId(id));
  }, [params]);

  const source = sourceId ? sources.find((s) => s.id === sourceId) : null;

  useEffect(() => {
    if (source) {
      setSearchFilters({ source: source.id });
    }
  }, [source, setSearchFilters]);

  if (!sourceId) {
    return <div>Loading...</div>;
  }

  if (!source) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4 mb-4">
            <Link
              href="/sources"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Sources</span>
            </Link>
          </div>

          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-2xl font-bold text-gray-600">
                {getSourceInitials(source.name)}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {source.name}
                </h1>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Globe className="w-4 h-4" />
                    <span>{source.domain}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">
                      Credibility: {source.credibilityScore}/100
                    </span>
                  </div>
                  <span className="bg-gray-100 px-2 py-1 rounded text-sm">
                    {source.country}
                  </span>
                </div>
                <p className="text-gray-600 mt-2">{source.description}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {filteredArticles.length} articles from this source
                </p>
              </div>
            </div>

            <a
              href={`https://${source.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Visit Website</span>
            </a>
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
              There are no articles from this source yet.
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
