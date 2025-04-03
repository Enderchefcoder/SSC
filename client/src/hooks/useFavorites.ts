import { useState, useEffect, useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage<string[]>('article-favorites', []);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize favorites from localStorage
  useEffect(() => {
    setIsInitialized(true);
  }, []);

  // Check if an article is favorited
  const isFavorite = useCallback(
    (articleId: string) => {
      return favorites.includes(articleId);
    },
    [favorites]
  );

  // Toggle favorite status for an article
  const toggleFavorite = useCallback(
    (articleId: string) => {
      if (isFavorite(articleId)) {
        setFavorites(favorites.filter((id) => id !== articleId));
      } else {
        setFavorites([...favorites, articleId]);
      }
    },
    [favorites, isFavorite, setFavorites]
  );

  // Add an article to favorites
  const addFavorite = useCallback(
    (articleId: string) => {
      if (!isFavorite(articleId)) {
        setFavorites([...favorites, articleId]);
      }
    },
    [favorites, isFavorite, setFavorites]
  );

  // Remove an article from favorites
  const removeFavorite = useCallback(
    (articleId: string) => {
      if (isFavorite(articleId)) {
        setFavorites(favorites.filter((id) => id !== articleId));
      }
    },
    [favorites, isFavorite, setFavorites]
  );

  // Get all favorite IDs
  const getFavorites = useCallback(() => {
    return favorites;
  }, [favorites]);

  return {
    isFavorite,
    toggleFavorite,
    addFavorite,
    removeFavorite,
    getFavorites,
    isInitialized,
  };
}