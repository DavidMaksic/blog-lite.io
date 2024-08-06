import View from './view.js';

class PublishView extends View {
   #addPostBtn = document.getElementById('add-btn');
   #exitModalBtn = document.getElementById('exit-modal-btn');

   showPublishModal() {
      this.#addPostBtn?.addEventListener(
         'click',
         this.togglePublishModal.bind(this)
      );
   }

   exitPublishModal() {
      const thisObject = this;

      // - When ESC is pressed
      window.onkeydown = (e) => {
         if (
            e.key === 'Escape' &&
            this.publishModal.classList.contains('active')
         ) {
            this.togglePublishModal();
         }
      };

      // - By clicking outside
      this.publishModal?.addEventListener(
         'click',
         this.togglePublishModal.bind(this)
      );

      this.form?.addEventListener('click', (e) => e.stopPropagation());

      this.#exitModalBtn?.addEventListener('click', function () {
         thisObject.togglePublishModal();
      });
   }
}

export default new PublishView();
