"use client";

import React from "react";
import ArticleCard from "@/components/ArticleCard";
import CategoryFilter from "@/components/CategoryFilter";
import FiltersBar from "@/components/FiltersBar";
import { useNews } from "@/context/NewsContext";
import { TrendingUp, Clock, Star, Users } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function HomePage() {
  const { filteredArticles, categories, sources } = useNews();

  const featuredArticles = filteredArticles.slice(0, 5); // Get first 5 articles for carousel
  const otherArticles = filteredArticles.slice(5, 11); // Adjust to start from 6th article

  // Get trending categories (categories with most articles)
  const trendingCategories = categories
    .map((category) => ({
      ...category,
      articleCount: filteredArticles.filter(
        (article) => article.category.id === category.id
      ).length,
    }))
    .sort((a, b) => b.articleCount - a.articleCount)
    .slice(0, 5);

  // Get most recent articles for sidebar
  const recentArticles = [...filteredArticles]
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
    .slice(0, 4);

  // Get top sources by article count
  const topSources = sources
    .map((source) => ({
      ...source,
      articleCount: filteredArticles.filter(
        (article) => article.source.id === source.id
      ).length,
    }))
    .sort((a, b) => b.articleCount - a.articleCount)
    .slice(0, 4);

  return (
    <div>
      <CategoryFilter />
      <FiltersBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              No articles found
            </h2>
            <p className="text-gray-300">
              Try adjusting your filters or search terms.
            </p>
          </div>
        ) : (
          <>
            {/* Featured Stories Carousel */}
            {featuredArticles.length > 0 && (
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Featured Stories
                </h2>
                <Swiper
                  modules={[Autoplay, Pagination, Navigation]}
                  spaceBetween={30}
                  slidesPerView={1}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                  }}
                  navigation={true}
                  loop={true}
                  className="featured-carousel"
                >
                  {featuredArticles.map((article) => (
                    <SwiperSlide key={article.id}>
                      <ArticleCard article={article} variant="featured" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </section>
            )}

            {/* Other Articles Grid */}
            {otherArticles.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Latest News
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </section>
            )}

            {/* Trending Stories Section */}
            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-8">
                <TrendingUp className="w-8 h-8 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">
                  Trending Stories
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Sidebar */}
                <aside className="lg:col-span-3">
                  <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        Trending Categories
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {trendingCategories.map((category) => (
                        <div
                          key={category.id}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-lg">{category.icon}</span>
                            <span className="font-medium text-gray-900">
                              {category.name}
                            </span>
                          </div>
                          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            {category.articleCount}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <Clock className="w-5 h-5 text-blue-500" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        Recent Updates
                      </h3>
                    </div>
                    <div className="space-y-4">
                      {recentArticles.map((article) => (
                        <div
                          key={article.id}
                          className="border-b border-gray-100 pb-3 last:border-b-0"
                        >
                          <h4 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-blue-600 cursor-pointer">
                            {article.title}
                          </h4>
                          <div className="flex items-center space-x-2 mt-1 text-xs text-gray-500">
                            <span>{article.source.name}</span>
                            <span>•</span>
                            <span>{article.readTime} min read</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </aside>

                {/* Main Content Area */}
                <main className="lg:col-span-6">
                  <div className="space-y-6">
                    <ArticleCard
                      key={filteredArticles[0].id}
                      article={filteredArticles[0]}
                      variant="featured"
                    />
                  </div>
                </main>

                {/* Right Sidebar */}
                <aside className="lg:col-span-3">
                  <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <Users className="w-5 h-5 text-green-500" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        Top Sources
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {topSources.map((source) => (
                        <div
                          key={source.id}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-semibold text-gray-600">
                              {source.name
                                .split(" ")
                                .map((word) => word[0])
                                .join("")
                                .toUpperCase()
                                .slice(0, 2)}
                            </div>
                            <div>
                              <div className="font-medium text-gray-900 text-sm">
                                {source.name}
                              </div>
                              <div className="text-xs text-gray-500">
                                {source.country}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                              {source.articleCount}
                            </div>
                            <div className="text-xs text-yellow-600 mt-1">
                              ★ {source.credibilityScore}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Stay Updated
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Get the latest news delivered to your inbox. Never miss
                      important updates.
                    </p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <button className="w-full bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </aside>
              </div>
            </section>

            {/* Sports Section */}
            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-8">
                <span className="text-3xl">⚽</span>
                <h2 className="text-2xl font-bold text-white">Sports News</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Wider (2/3) */}
                <div className="lg:col-span-2">
                  <div className="space-y-6 mb-6">
                    {filteredArticles
                      .filter((article) => article.category.slug === "sports")
                      .slice(0, 3)
                      .map((article) => (
                        <ArticleCard
                          key={article.id}
                          article={article}
                          variant="featured"
                        />
                      ))}
                  </div>
                </div>

                {/* Right Column - Narrower (1/3) */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Sports Headlines
                    </h3>
                    <div className="space-y-4">
                      {/* If we have sports articles, show them */}
                      {filteredArticles
                        .filter((article) => article.category.slug === "sports")
                        .slice(3, 6)
                        .map((article) => (
                          <div
                            key={article.id}
                            className="border-b border-gray-100 pb-3 last:border-b-0"
                          >
                            <h4 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-blue-600 cursor-pointer mb-2">
                              {article.title}
                            </h4>
                            <div className="flex items-center justify-between text-xs text-gray-500">
                              <span>{article.source.name}</span>
                              <span>{article.readTime} min read</span>
                            </div>
                          </div>
                        ))}

                      {/* Additional static sports headlines for demonstration */}
                      <div className="border-b border-gray-100 pb-3">
                        <h4 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-blue-600 cursor-pointer mb-2">
                          NBA Finals Game 7: Historic Overtime Thriller Breaks
                          Viewership Records
                        </h4>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>ESPN</span>
                          <span>3 min read</span>
                        </div>
                      </div>

                      <div className="border-b border-gray-100 pb-3">
                        <h4 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-blue-600 cursor-pointer mb-2">
                          World Cup 2026 Venues Announced: Record 16 Cities to
                          Host Matches
                        </h4>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>FIFA</span>
                          <span>4 min read</span>
                        </div>
                      </div>

                      <div className="border-b border-gray-100 pb-3">
                        <h4 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-blue-600 cursor-pointer mb-2">
                          Tennis: Wimbledon Sees Youngest Ever Champion in
                          Stunning Upset Victory
                        </h4>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>BBC Sport</span>
                          <span>2 min read</span>
                        </div>
                      </div>

                      <div className="border-b border-gray-100 pb-3">
                        <h4 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-blue-600 cursor-pointer mb-2">
                          Olympic Swimming Records Fall as New Technology
                          Swimsuits Debut
                        </h4>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>Swimming World</span>
                          <span>5 min read</span>
                        </div>
                      </div>

                      <div className="border-b border-gray-100 pb-3">
                        <h4 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-blue-600 cursor-pointer mb-2">
                          NFL Draft Surprise: Rookie QB Sets New Combine Records
                        </h4>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>NFL Network</span>
                          <span>3 min read</span>
                        </div>
                      </div>

                      <div className="pb-3">
                        <h4 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-blue-600 cursor-pointer mb-2">
                          Formula 1: New Electric Series Announced for 2026
                          Season
                        </h4>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>F1 Official</span>
                          <span>4 min read</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Live Scores
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">
                            Lakers vs Warriors
                          </span>
                          <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">
                            LIVE
                          </span>
                        </div>
                        <div className="text-lg font-bold text-gray-900">
                          108 - 112
                        </div>
                        <div className="text-xs text-gray-500">Q4 2:34</div>
                      </div>

                      <div className="bg-white rounded-lg p-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">
                            Chiefs vs Bills
                          </span>
                          <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                            FINAL
                          </span>
                        </div>
                        <div className="text-lg font-bold text-gray-900">
                          28 - 21
                        </div>
                        <div className="text-xs text-gray-500">Final</div>
                      </div>

                      <div className="bg-white rounded-lg p-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">
                            Barcelona vs Madrid
                          </span>
                          <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">
                            TODAY 3PM
                          </span>
                        </div>
                        <div className="text-sm text-gray-600">El Clasico</div>
                        <div className="text-xs text-gray-500">La Liga</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
}
