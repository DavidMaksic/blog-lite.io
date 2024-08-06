import * as model from './model.js';
import darkModeView from './views/darkModeView.js';
import publishView from './views/publishView.js';
import deleteView from './views/deleteView.js';
import articleView from './views/articleView.js';
import bookmarkView from './views/bookmarkView.js';
// import '../../node_modules/core-js/stable';

const controlArticle = function () {
   articleView.upload(controlAddArticles);
};

const controlAddArticles = function () {
   model.addArticle(articleView.article);
};

const controlDeleteArticles = function () {
   model.deleteArticle(deleteView.articleH2text);
};

const controlDarkMode = function () {
   darkModeView.loadTheme();
   darkModeView.toggleTheme();
};

const controlPublish = function () {
   publishView.showPublishModal();
   publishView.exitPublishModal();
};

const controlDelete = function () {
   deleteView.deleteArticleMarkup(
      controlDeleteArticles,
      controlRemoveBookmarkData2
   );
   deleteView.deleteMessageOnLoad(model.state.articles);
};

const renderArticlesOnLoad = function () {
   model.state.articles?.map((article) => articleView.render(article));
};

const renderBookmarksOnLoad = function () {
   bookmarkView.renderBookmarks(model.state.bookmarks);
   bookmarkView.persistBookmarkIcon(model.state.articles);
};

const controlBookmarks = function () {
   bookmarkView.createBookmark(controlAddBookmark, controlRemoveBookmarkData);
   bookmarkView.toggleDropdown(model.state.bookmarks);
};

const controlAddBookmark = function () {
   model.addBookmark(bookmarkView.articleH2);
   bookmarkView.renderBookmarks(model.state.bookmarks);
};

const controlRemoveBookmarkData = function () {
   model.deleteBookmarkData(bookmarkView.articleH2);
};

const controlRemoveBookmarkData2 = function () {
   model.deleteBookmarkData2(deleteView.articleH2text);
};

const init = function () {
   controlArticle();
   renderArticlesOnLoad();
   renderBookmarksOnLoad();
   controlBookmarks();
   controlPublish();
   controlDelete();
   controlDarkMode();
};
init();
