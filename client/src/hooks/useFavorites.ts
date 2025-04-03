import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { Article } from '@/types';
import { getArticleById } from '@/data/articles';

export function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useLocalStorage<string[]>('favorites', []);
  
  // Get all favorite articles
  const getFavoriteArticles = useCallback((): Article[] => {
    return favoriteIds
      .map(id => getArticleById(id))
      .filter((article): article is Article => article !== undefined);
  }, [favoriteIds]);
  
  // Check if an article is favorited
  const isFavorite = useCallback((articleId: string): boolean => {
    return favoriteIds.includes(articleId);
  }, [favoriteIds]);
  
  // Add an article to favorites
  const addFavorite = useCallback((articleId: string) => {
    if (!favoriteIds.includes(articleId)) {
      setFavoriteIds([...favoriteIds, articleId]);
    }
  }, [favoriteIds, setFavoriteIds]);
  
  // Remove an article from favorites
  const removeFavorite = useCallback((articleId: string) => {
    setFavoriteIds(favoriteIds.filter(id => id !== articleId));
  }, [favoriteIds, setFavoriteIds]);
  
  // Toggle an article's favorite status
  const toggleFavorite = useCallback((articleId: string) => {
    if (favoriteIds.includes(articleId)) {
      removeFavorite(articleId);
    } else {
      addFavorite(articleId);
    }
  }, [favoriteIds, addFavorite, removeFavorite]);
  
  return {
    favoriteIds,
    getFavoriteArticles,
    isFavorite,
    addFavorite,
    removeFavorite,
    toggleFavorite
  };
}