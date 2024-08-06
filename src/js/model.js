import { MIN, MAX } from './config.js';

export const state = {
   articles: [],
   bookmarks: [],
};

const persistArticle = function (article, id) {
   localStorage.setItem('article-' + id, JSON.stringify(article));
};

const persistBookmark = function (bookmark, bookmarkID) {
   localStorage.setItem('bookmark-' + bookmarkID, JSON.stringify(bookmark));
};

const removeArticleFromStorage = function (id) {
   localStorage.removeItem('article-' + id);
};

const removeBookmarkFromStorage = function (bookmarkID) {
   localStorage.removeItem('bookmark-' + bookmarkID);
};

export const addArticle = function (article) {
   state.articles?.push(article);
   persistArticle(article, article?.id);
};

export const deleteArticle = function (articleH2text) {
   const content = state.articles.filter((el) => el.title === articleH2text);
   const contentObject = content[0];
   removeArticleFromStorage(contentObject.id);

   const articleIndex = state.articles.indexOf(contentObject);
   state.articles.splice(articleIndex, 1);
};

const allStorage = function () {
   let archive = [],
      keys = Object.keys(localStorage),
      i = 0,
      key;

   for (; (key = keys[i]); i++) {
      archive.push(key + '=' + localStorage.getItem(key));
   }

   return archive;
};

export const addBookmark = function (h2content) {
   // - Fetch current article
   const [theArticle] = state.articles.filter((el) => el.title === h2content);
   const articleIndex = state.articles.indexOf(theArticle);
   const currentArticle = state.articles[articleIndex];
   currentArticle.isBookmarked = true;

   const currentArticleID = currentArticle.id.toString();
   persistArticle(currentArticle, currentArticleID);

   // - Create current bookmark object
   const [bookmark] = state.articles.filter((el) => el.title === h2content);

   state.bookmarks.push(bookmark);
   const bookmarkIndex = state.bookmarks.indexOf(bookmark);

   state.bookmarks[bookmarkIndex].rendered = undefined;
   state.bookmarks[bookmarkIndex].bookmarkID = Math.round(
      Math.random() * (MAX - MIN) + MIN
   );

   persistBookmark(bookmark, bookmark?.bookmarkID);
};

export const deleteBookmarkData = function (articleH2) {
   // - Fetch current article
   const [theArticle] = state.articles.filter((el) => el.title === articleH2);

   const articleIndex = state.articles.indexOf(theArticle);
   const currentArticle = state.articles[articleIndex];
   currentArticle.isBookmarked = false;

   const currentArticleID = currentArticle.id.toString();
   persistArticle(currentArticle, currentArticleID);

   // - Remove current bookmark object
   const [theBookmark] = state.bookmarks.filter(
      (bookmark) => bookmark.title === articleH2
   );
   removeBookmarkFromStorage(theBookmark.bookmarkID);
   const bookmarkIndex = state.bookmarks.indexOf(theBookmark);
   state.bookmarks.splice(bookmarkIndex, 1);
};

export const deleteBookmarkData2 = function (articleh2) {
   // - Find article data to be deleted
   const [theBookmark] = state.bookmarks.filter(
      (bookmark) => bookmark.title === articleh2
   );

   const [theArticle] = state.articles.filter((el) => el.title === articleh2);
   const articleIndex = state.articles.indexOf(theArticle);
   if (!state.articles.length === 0)
      state.articles[articleIndex].isBookmarked = false;

   removeBookmarkFromStorage(theBookmark.bookmarkID);
   const bookmarkIndex = state.bookmarks.indexOf(theBookmark);
   state.bookmarks.splice(bookmarkIndex, 1);
};

const init = function () {
   const allItems = allStorage();

   // Exclude all except article IDs

   const storageArticles = allItems.filter(
      (item) => !item.includes('selectedTheme=light')
   );
   const storageArticles2 = storageArticles.filter(
      (item) => !item.includes('selectedTheme=dark')
   );

   const storageArticles3 = storageArticles2.filter(
      (item) => !item.includes('bookmark-')
   );

   const articleIDs = storageArticles3?.map((item) => item.slice(0, 18));

   articleIDs?.forEach((item) =>
      state.articles.push(JSON.parse(localStorage.getItem(item)))
   );

   // Exclude all except bookmark IDs

   const storageBookmarks = allItems.filter(
      (item) => !item.includes('selectedTheme=light')
   );
   const storageBookmarks2 = storageBookmarks.filter(
      (item) => !item.includes('selectedTheme=dark')
   );

   const storageBookmarks3 = storageBookmarks2.filter(
      (item) => !item.includes('article-')
   );

   const bookmarkIDs = storageBookmarks3?.map((item) => item.slice(0, 19));

   bookmarkIDs?.forEach((item) =>
      state.bookmarks.push(JSON.parse(localStorage.getItem(item)))
   );
};
init();

// localStorage.clear();
