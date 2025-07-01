import { clsx, type ClassValue } from "clsx";
import { format, formatDistanceToNow, isToday, isYesterday } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(date: Date): string {
  if (isToday(date)) {
    return `Today at ${format(date, "h:mm a")}`;
  }

  if (isYesterday(date)) {
    return `Yesterday at ${format(date, "h:mm a")}`;
  }

  if (Date.now() - date.getTime() < 7 * 24 * 60 * 60 * 1000) {
    return formatDistanceToNow(date, { addSuffix: true });
  }

  return format(date, "MMM d, yyyy");
}

export function formatReadTime(minutes: number): string {
  return `${minutes} min read`;
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
}

export function getSourceInitials(sourceName: string): string {
  return sourceName
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function shareArticle(article: { title: string; id: string }) {
  if (navigator.share) {
    navigator.share({
      title: article.title,
      url: `${window.location.origin}/article/${article.id}`,
    });
  } else {
    // Fallback to copying to clipboard
    navigator.clipboard.writeText(
      `${window.location.origin}/article/${article.id}`
    );
  }
}
