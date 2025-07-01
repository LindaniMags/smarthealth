# SmartNews - News Aggregation Platform

A modern news aggregation platform built with Next.js, TypeScript, and Tailwind CSS. SmartNews aggregates articles from multiple sources, providing users with a clean, unbiased interface to browse news across different categories.

## 🚀 Features

- **News Aggregation**: Browse articles from multiple trusted news sources
- **Category Filtering**: Filter news by categories (Politics, Technology, Sports, etc.)
- **Advanced Search**: Search articles by keywords, sources, and date ranges
- **Bookmarking**: Save articles to read later
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Source Transparency**: View articles by specific news sources
- **Modern UI**: Clean, professional interface inspired by Ground News

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context API
- **Date Handling**: date-fns
- **Utilities**: clsx for conditional styling

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── article/[id]/      # Article detail pages
│   ├── category/[slug]/   # Category pages
│   ├── source/[id]/       # Source pages
│   ├── bookmarks/         # Bookmarks page
│   ├── categories/        # Categories overview
│   ├── sources/          # Sources overview
│   └── search/           # Search results
├── components/            # Reusable UI components
│   ├── ArticleCard.tsx   # Article display component
│   ├── CategoryFilter.tsx # Category filtering
│   ├── FiltersBar.tsx    # Search and sort filters
│   └── Header.tsx        # Navigation header
├── context/              # React Context for state management
│   └── NewsContext.tsx   # News data and filters
├── data/                 # Mock data
│   └── mockData.ts       # Articles, sources, and categories
├── lib/                  # Utility functions
│   └── utils.ts          # Helper functions
└── types/                # TypeScript type definitions
    └── index.ts          # Application types
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd smartnews
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📱 Pages & Features

### Homepage

- Featured article display
- Latest news grid
- Category filtering
- Search functionality

### Article Detail

- Full article content
- Source information
- Related articles
- Bookmark and share options

### Categories

- Browse by news categories
- Category-specific article feeds
- Visual category organization

### Sources

- View all news sources
- Source credibility information
- Source-specific article feeds

### Search & Filters

- Keyword search
- Date range filtering
- Source filtering
- Sort options (relevance, date, popularity)

### Bookmarks

- Save articles for later
- Personal reading list
- Persistent storage

## 🎨 Design Features

- **Responsive Grid Layout**: Adapts to different screen sizes
- **Clean Typography**: Easy-to-read article content
- **Visual Hierarchy**: Clear information organization
- **Interactive Elements**: Hover effects and smooth transitions
- **Accessibility**: Proper contrast and keyboard navigation

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📊 Mock Data

The application uses comprehensive mock data including:

- **8 News Articles** with full content, metadata, and images
- **6 News Sources** with credibility scores and descriptions
- **8 Categories** covering major news topics
- **Realistic Timestamps** and author information

## 🌟 Key Components

### ArticleCard

- Multiple display variants (default, featured, compact)
- Bookmark functionality
- Share capabilities
- Responsive design

### NewsContext

- Centralized state management
- Article filtering logic
- Bookmark persistence
- Search functionality

### FiltersBar

- Advanced filtering options
- Sort controls
- Filter persistence
- Clear filters option

## 🚀 Deployment

The application is ready for deployment on platforms like Vercel, Netlify, or any static hosting service.

For Vercel deployment:

```bash
npm run build
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Support

If you have any questions or need help with the project, please open an issue on GitHub.
