export default class View {
   form = document.getElementById('modal-content');
   publishModal = document.getElementById('modal');
   message = document.getElementById('message');

   clearMessage() {
      this.message?.classList.add('hidden');
   }

   addMessage() {
      this.message?.classList.remove('hidden');
   }

   togglePublishModal() {
      this.publishModal.classList.toggle('active');
   }
}
