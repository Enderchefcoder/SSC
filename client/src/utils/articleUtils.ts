import { Article, Tag, Author, AgeLevel } from "@/types";
import { articles as defaultArticles } from "@/data/articles";

// Function to save an article to localStorage
export const saveArticleToLocalStorage = (article: Article): void => {
  const savedArticles = localStorage.getItem('local-articles');
  let articles: Article[] = [];
  
  if (savedArticles) {
    articles = JSON.parse(savedArticles);
  }
  
  // Check if article already exists
  const existingIndex = articles.findIndex(a => a.id === article.id);
  if (existingIndex >= 0) {
    // Update existing article
    articles[existingIndex] = article;
  } else {
    // Add new article
    articles.push(article);
  }
  
  localStorage.setItem('local-articles', JSON.stringify(articles));
};

// Function to get all articles from localStorage
export const getArticlesFromLocalStorage = (): Article[] => {
  const savedArticles = localStorage.getItem('local-articles');
  if (!savedArticles) return [];
  
  return JSON.parse(savedArticles);
};

// Function to delete an article from localStorage
export const deleteArticleFromLocalStorage = (articleId: string): void => {
  const savedArticles = localStorage.getItem('local-articles');
  if (!savedArticles) return;
  
  const articles = JSON.parse(savedArticles);
  const updatedArticles = articles.filter((article: Article) => article.id !== articleId);
  
  localStorage.setItem('local-articles', JSON.stringify(updatedArticles));
};

// Generate a unique ID for a new article
export const generateArticleId = (): string => {
  const allArticles = [...defaultArticles, ...getArticlesFromLocalStorage()];
  const ids = allArticles.map(article => parseInt(article.id));
  const maxId = Math.max(...ids);
  return (maxId + 1).toString();
};

// Generate a slug from a title
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
};

// Export article to text file
export const exportArticleToText = (article: Article): string => {
  // Convert article to text format
  let text = `TITLE: ${article.title}\n`;
  text += `SLUG: ${article.slug}\n`;
  text += `DESCRIPTION: ${article.description}\n`;
  text += `AGE_LEVEL: ${article.ageLevel}\n`;
  text += `PUBLISH_DATE: ${article.publishDate}\n`;
  text += `READ_TIME: ${article.readTime}\n`;
  text += `IMAGE_URL: ${article.imageUrl}\n`;
  text += `IMAGE_ALT: ${article.imageAlt}\n`;
  
  if (article.imageCredit) {
    text += `IMAGE_CREDIT: ${article.imageCredit}\n`;
  }
  
  // Author info
  text += `AUTHOR_NAME: ${article.author.name}\n`;
  text += `AUTHOR_INITIALS: ${article.author.initials}\n`;
  
  if (article.author.bio) {
    text += `AUTHOR_BIO: ${article.author.bio}\n`;
  }
  
  // Tags
  if (article.tags && article.tags.length > 0) {
    text += `TAGS: ${article.tags.map(tag => `${tag.name}|${tag.color}`).join(',')}\n`;
  }
  
  // DidYouKnow fact
  if (article.didYouKnow) {
    text += `DID_YOU_KNOW: ${article.didYouKnow.fact}\n`;
  }
  
  // Discussion questions
  if (article.discussionQuestions && article.discussionQuestions.length > 0) {
    text += `DISCUSSION_QUESTIONS: ${article.discussionQuestions.join('|||')}\n`;
  }
  
  // Sources
  if (article.sources && article.sources.length > 0) {
    text += `SOURCES: ${JSON.stringify(article.sources)}\n`;
  }
  
  // Related articles
  if (article.relatedArticles && article.relatedArticles.length > 0) {
    text += `RELATED_ARTICLES: ${article.relatedArticles.join(',')}\n`;
  }
  
  // Worksheets
  if (article.worksheets && article.worksheets.length > 0) {
    text += `WORKSHEETS: ${article.worksheets.join(',')}\n`;
  }
  
  // Content (must be last)
  text += `CONTENT:\n${article.content}`;
  
  return text;
};

// Import article from text file
export const importArticleFromText = (text: string): Article | null => {
  try {
    const lines = text.split('\n');
    let content = '';
    let contentStartIndex = -1;
    
    // Find where content begins
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('CONTENT:')) {
        contentStartIndex = i + 1;
        break;
      }
    }
    
    if (contentStartIndex === -1) {
      throw new Error('Content section not found');
    }
    
    // Extract content
    content = lines.slice(contentStartIndex).join('\n');
    
    // Extract metadata
    const metadata = lines.slice(0, contentStartIndex - 1);
    
    // Helper function to extract field value
    const getField = (prefix: string): string => {
      const line = metadata.find(line => line.startsWith(prefix));
      if (!line) return '';
      return line.substring(prefix.length).trim();
    };
    
    // Parse tags
    const tagsStr = getField('TAGS: ');
    const tags: Tag[] = tagsStr ? tagsStr.split(',').map(tagStr => {
      const [name, color] = tagStr.split('|');
      return { name, color };
    }) : [];
    
    // Parse discussion questions
    const questionsStr = getField('DISCUSSION_QUESTIONS: ');
    const discussionQuestions = questionsStr ? questionsStr.split('|||') : [];
    
    // Parse sources
    const sourcesStr = getField('SOURCES: ');
    const sources = sourcesStr ? JSON.parse(sourcesStr) : [];
    
    // Parse related articles
    const relatedStr = getField('RELATED_ARTICLES: ');
    const relatedArticles = relatedStr ? relatedStr.split(',') : [];
    
    // Parse worksheets
    const worksheetsStr = getField('WORKSHEETS: ');
    const worksheets = worksheetsStr ? worksheetsStr.split(',') : [];
    
    // Create author object
    const author: Author = {
      name: getField('AUTHOR_NAME: '),
      initials: getField('AUTHOR_INITIALS: '),
      bio: getField('AUTHOR_BIO: ') || undefined,
    };
    
    // Create didYouKnow object if fact exists
    const didYouKnowFact = getField('DID_YOU_KNOW: ');
    const didYouKnow = didYouKnowFact ? { fact: didYouKnowFact } : undefined;
    
    // Create article object
    const article: Article = {
      id: generateArticleId(),
      title: getField('TITLE: '),
      slug: getField('SLUG: '),
      description: getField('DESCRIPTION: '),
      content,
      imageUrl: getField('IMAGE_URL: '),
      imageAlt: getField('IMAGE_ALT: '),
      imageCredit: getField('IMAGE_CREDIT: ') || undefined,
      publishDate: getField('PUBLISH_DATE: '),
      readTime: parseInt(getField('READ_TIME: ')) || 10,
      ageLevel: getField('AGE_LEVEL: ') as AgeLevel,
      tags,
      author,
      didYouKnow,
      discussionQuestions,
      sources,
      relatedArticles,
      worksheets
    };
    
    return article;
  } catch (error) {
    console.error('Error importing article:', error);
    return null;
  }
};

// Download article as text file
export const downloadArticleAsText = (article: Article): void => {
  const text = exportArticleToText(article);
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = `${article.slug}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// Get all articles (combines default articles with local ones)
export const getAllArticles = (): Article[] => {
  const localArticles = getArticlesFromLocalStorage();
  return [...defaultArticles, ...localArticles];
};