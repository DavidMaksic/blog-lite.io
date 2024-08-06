import View from './view.js';
import { MIN, MAX } from '../config.js';

class ArticleView extends View {
   #btnParentEl = document.getElementById('btn-parent');
   article;

   upload(handler) {
      const thisObject = this;

      this.form?.addEventListener('submit', function (e) {
         e.preventDefault();
         const dataArr = [...new FormData(this)];
         const data = Object.fromEntries(dataArr);

         // - Close modal and delete starter message
         thisObject.togglePublishModal();
         thisObject.clearMessage();

         // - Create NEW article
         thisObject.article = data;
         thisObject.article.date = thisObject.#date();
         thisObject.article.id = thisObject.#getRandomNumber();
         thisObject.#clearInput();
         thisObject.render(data);

         handler();
      });
   }

   #clearInput() {
      const inputElements = document.querySelectorAll('.input-element');
      inputElements.forEach((el) => (el.value = ''));
   }

   #getRandomNumber() {
      return Math.round(Math.random() * (MAX - MIN) + MIN);
   }

   render(data) {
      this.#btnParentEl?.insertAdjacentHTML(
         'afterend',
         this.#generateMarkup(data)
      );
   }

   #date() {
      const now = new Date();
      const options = {
         day: 'numeric',
         month: 'long',
         year: 'numeric',
      };
      const locale = navigator.language;
      return new Intl.DateTimeFormat(locale, options).format(now);
   }

   #generateMarkup(data) {
      return `    
         <article 
         id="${data.id}"
         class="article-element relative flex flex-col justify-self-center w-1/2 gap-8 px-24 py-20 pb-12 mt-10 2xl:w-2/3 xl:w-2/3 lg:w-3/4 md:pt-16 md:pb-10 md:px-12 md:w-full sm:gap-6 sm:mt-6 sm:p-8 sm:pb-6 sm:px-6 bg-[#ebeff5] dark:bg-slate-600 "
         style="transition: all 0.4s">
            <div class="flex flex-col gap-2 sm:gap-2">
               <h2 class="article-h2 text-7xl sm:text-6xl pb-2 sm:pb-0 bg-gradient-to-r from-slate-600 to-[#7a75aa] dark:from-slate-200 dark:to-[#d2cfe4]" style="
               background-clip: text;
               -webkit-text-fill-color: transparent;
               ">${data.title}
               </h2>
               <h3 class="delete-h3 text-3xl text-slate-400 dark:text-slate-400 sm:text-2xl">${data.description}
               </h3>
            </div>

            <div id="bookmarks" class="bookmarks absolute top-[-9px] right-6 2xl:top-[-10px] md:right-10 sm:top-[-9px] sm:right-1">
               <img class="bookmark-thin cursor-pointer w-14 h-14 2xl:w-16 2xl:h-16 sm:w-14 sm:h-14" src="././src/img/bookmark.png" alt="">
               <img class="bookmark-full hidden cursor-pointer w-14 h-14 2xl:w-16 2xl:h-16 sm:w-14 sm:h-14" src="././src/img/bookmark-filled.png" alt="">
            </div>
            
            <div
               class="a-div mt-2 sm:mt-0 h-[1px] bg-gradient-to-r from-slate-400 to-slate-200 to-100% dark:from-slate-400 dark:to-slate-600"
            ></div>

            <span class="delete-span mt-[-12px] sm:mt-[-20px] text-slate-500 dark:text-slate-300 sm:text-base">Posted on ${data.date}</span>


            <img class="delete-img"  src="${data.imageURL}" alt="">

            <p class="delete-p text-3xl text-justify sm:leading-[1.7rem] whitespace-pre-line text-slate-600 dark:text-slate-100 sm:text-xl sm:text-slate-700" style="font-family: 'Cormorant Garamond', serif;">${data.content}
            </p>

            <div
                  class="h-[1px] bg-gradient-to-l from-slate-400 to-slate-200 to-100% dark:from-slate-400 dark:to-slate-600"
               ></div>


            <div class="flex justify-end gap-8 sm:mt-2">          
               <button
               id="delete-btn"
               class="delete-btn text-4xl sm:text-3xl sm:mt-[-16px] transition duration-150 border-b-2 dark:text-redhover hover:text-redhover text-red2 border-b-transparent hover:border-b-redhover"
               >
               Delete
            </button>
         </div>
         </article>
      `;
   }
}

export default new ArticleView();
