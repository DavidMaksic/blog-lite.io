import View from './view.js';

class BookmarkView extends View {
   dropdownParent = document.querySelector('.bookmark-parent');
   dropdownBtn = document.querySelector('.dropdown-btn');
   bookmarkContainer = document.querySelector('.bookmark-container');
   dropdownItems = [];
   bookmarkH2s = [];
   articleH2;

   renderBookmarks(bookmarkObjects) {
      bookmarkObjects.forEach((obj) => {
         if (!obj.rendered) {
            this.#render(obj);
            obj.rendered = true;
         }
      });
   }

   toggleDropdown(bookmarks) {
      const thisObject = this;
      thisObject.renderBookmarkMessage();

      this.dropdownBtn?.addEventListener('click', function () {
         // - Check if any bookmarks exist
         if (bookmarks.length === 0) {
            thisObject.bookmarkContainer.classList.toggle('dropdown-active');
            thisObject.dropdownBtn.classList.add('focus:dark:brightness-150');
            thisObject.dropdownBtn.classList.add('focus:brightness-50');
            thisObject.exitDropdown();
            return;
         }

         const bookmarkMsg = document.querySelector('.bookmark-message');
         bookmarkMsg?.remove();

         thisObject.bookmarkContainer.classList.toggle('dropdown-active');
         thisObject.dropdownBtn.classList.add('focus:dark:brightness-150');
         thisObject.dropdownBtn.classList.add('focus:brightness-50');

         thisObject.exitDropdown();
      });
   }

   renderBookmarkMessage() {
      this.dropdownParent?.insertAdjacentHTML(
         'afterend',
         this.#generateBookmarkMessage()
      );
   }

   #generateBookmarkMessage() {
      return `
         <span class="bookmark-message select-none border-2 border-slate-300 dark:border-transparent text-3xl text-slate-600 dark:text-slate-300 text-center bg-white dark:bg-slate-800 py-6 px-12 w-1/2 shadow-lg rounded-xl sm:w-full">You haven't saved any articles yet!</span>
      `;
   }

   exitDropdown() {
      const thisObject = this;

      // - Remove focus on container mouseleave
      this.bookmarkContainer.addEventListener('mouseleave', function () {
         thisObject.bookmarkContainer.classList.remove('dropdown-active');
         thisObject.dropdownBtn.classList.remove('focus:dark:brightness-150');
         thisObject.dropdownBtn.classList.remove('focus:brightness-50');
      });
   }

   persistBookmarkIcon(articles) {
      const theArticles = articles.filter(
         (article) => article.isBookmarked === true
      );

      const ids = theArticles.map((article) => article.id);

      const allArticles = [...document.getElementsByTagName('article')];
      const articleIDs = allArticles.map((article) => +article.id);

      const savedArticles = articleIDs.filter((articleID) =>
         ids.includes(articleID)
      );

      const articleStringsID = savedArticles.map((article) =>
         article.toString()
      );

      articleStringsID.map((currentStringID) => {
         const currentMarkup = document.getElementById(`${currentStringID}`);

         // - Change icon
         const bookmarkBtnThin = currentMarkup.querySelector('.bookmark-thin');
         const bookmarkBtnFull = currentMarkup.querySelector('.bookmark-full');
         bookmarkBtnThin.classList.add('hidden');
         bookmarkBtnFull.classList.remove('hidden');

         // - Change article color
         if (currentMarkup.classList.contains('dark:bg-slate-600')) {
            currentMarkup.classList.remove('dark:bg-slate-600');
            currentMarkup.classList.add('dark:bg-[#404d5f]');
         }

         if (currentMarkup.classList.contains('bg-[#ebeff5]')) {
            currentMarkup.classList.remove('bg-[#ebeff5]');
            currentMarkup.classList.add('bg-slate-200');
         }
      });
   }

   createBookmark(handleAdd, handleDelete) {
      window.addEventListener('click', (e) => {
         if (e.target.closest('#bookmarks')) {
            const bookmarks = e.target.closest('#bookmarks');
            const bookmarkBtnThin = bookmarks.querySelector('.bookmark-thin');
            const bookmarkBtnFull = bookmarks.querySelector('.bookmark-full');
            const articleMarkup = bookmarks.closest('.article-element');

            if (bookmarkBtnFull.classList.contains('hidden')) {
               // - Change icon
               bookmarkBtnThin.classList.add('hidden');
               bookmarkBtnFull.classList.remove('hidden');

               // - Change article color
               if (articleMarkup.classList.contains('dark:bg-slate-600')) {
                  articleMarkup.classList.remove('dark:bg-slate-600');
                  articleMarkup.classList.add('dark:bg-[#404d5f]');
               }

               if (articleMarkup.classList.contains('bg-[#ebeff5]')) {
                  articleMarkup.classList.remove('bg-[#ebeff5]');
                  articleMarkup.classList.add('bg-slate-200');
               }

               // - Get header content
               this.articleH2 =
                  articleMarkup.querySelector('.article-h2').innerText;

               handleAdd();

               // - Get bookmark headers
               const dropdownItem = document.querySelector('.dropdown-item');
               this.dropdownItems?.push(dropdownItem);

               this.bookmarkH2s = this.dropdownItems.map((item) =>
                  item?.querySelector('.bookmark-h2').textContent.trim()
               );

               //
            } else {
               // - Get bookmark headers
               const dropdownItem = document.querySelector('.dropdown-item');
               if (!this.dropdownItems.includes(dropdownItem))
                  this.dropdownItems.push(dropdownItem);

               this.bookmarkH2s = this.dropdownItems.map((item) =>
                  item?.querySelector('.bookmark-h2').textContent.trim()
               );

               // - Change icon
               bookmarkBtnFull.classList.add('hidden');
               bookmarkBtnThin.classList.remove('hidden');

               // - Change article color
               if (!articleMarkup.classList.contains('dark:bg-slate-600')) {
                  articleMarkup.classList.remove('dark:bg-[#404d5f]');
                  articleMarkup.classList.add('dark:bg-slate-600');
               }

               if (!articleMarkup.classList.contains('bg-[#ebeff5]')) {
                  articleMarkup.classList.add('bg-[#ebeff5]');
                  articleMarkup.classList.remove('bg-slate-200');
               }

               // - Get header content
               this.articleH2 =
                  articleMarkup.querySelector('.article-h2').innerText;

               const [filteredString] = this.bookmarkH2s.filter(
                  (bookmarkH2) => bookmarkH2 === this.articleH2
               );

               const [theItem] = this.dropdownItems.filter(
                  (item) =>
                     item?.querySelector('.bookmark-h2').textContent.trim() ===
                     filteredString
               );

               // - Delete currently clicked item's markup from this array
               const [theBookmarkMarkup] = this.dropdownItems.filter(
                  (bookmark) =>
                     bookmark
                        .querySelector('.bookmark-h2')
                        .textContent.trim() === this.articleH2
               );

               const theBookmarkMarkupIndex =
                  this.dropdownItems.indexOf(theBookmarkMarkup);
               this.dropdownItems.splice(theBookmarkMarkupIndex, 1);

               // - Delete clicked bookmark from bookmarkh2s array
               const [theBookmark] = this.bookmarkH2s.filter(
                  (bookmark) => bookmark === this.articleH2
               );
               const theBookmarkIndex = this.bookmarkH2s.indexOf(theBookmark);
               this.bookmarkH2s.splice(theBookmarkIndex, 1);

               // - Delete bookmark
               handleDelete();
               theItem?.remove();

               const bookmarkMsg = document.querySelector('.bookmark-message');
               if (!bookmarkMsg) this.renderBookmarkMessage();
            }
         }
      });
   }

   #render(data) {
      this.dropdownParent?.insertAdjacentHTML(
         'afterend',
         this.#generateMarkup(data)
      );
   }

   #generateMarkup(data) {
      return `
         <a href="#${data.id}" class="dropdown-item text-2xl text-slate-300" style="filter: drop-shadow(0 1.5rem 2rem rgba(0, 0, 0, 0.342))">
                  <div class="grid items-center grid-cols-2 transition-all sm:grid-cols-1 hover:brightness-110">
                     <img class="object-cover w-full h-48 sm:h-28" src="${data.imageURL}" alt="">
                     <div class="p-8 bg-slate-50 dark:bg-slate-800 sm:flex sm:flex-col sm:gap-1 sm:px-12 sm:pt-5 sm:pb-7 sm:bg-white">
                        <h2 class="bookmark-h2 text-3xl transition text-slate-500 dark:text-slate-200 sm:text-2xl sm:text-slate-600">${data.title}
                        </h2>
                        <h3 class="text-lg sm:text-base text-slate-400 dark:text-[#a9b5c6]">${data.description}
                        </h3>
                     </div>
                  </div>
               </a>
      `;
   }
}

export default new BookmarkView();
