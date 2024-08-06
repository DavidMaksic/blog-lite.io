class darkModeView {
   root = document.querySelector(':root');
   darkBtn = document.getElementById('dark-mode');
   dot = document.getElementById('dot');

   loadTheme() {
      document.addEventListener('DOMContentLoaded', () => {
         const theme = localStorage.getItem('selectedTheme');

         // When loading document select theme from localStorage
         if (theme === 'dark') {
            this.root.classList.add('dark');
            this.dot.classList.toggle('translate-x-6');
         }

         if (theme === 'light') {
            this.root.classList.remove('dark');
         }

         if (!theme) {
            localStorage.setItem('selectedTheme', 'light');
         }
      });
   }

   toggleTheme() {
      this.darkBtn.addEventListener('click', () => {
         this.root.classList.toggle('dark');
         this.dot.classList.toggle('translate-x-6');

         // If user changes theme, save it to localStorage
         if (this.root.classList.contains('dark')) {
            localStorage.setItem('selectedTheme', 'dark');
         }

         if (!this.root.classList.contains('dark')) {
            localStorage.setItem('selectedTheme', 'light');
         }
      });
   }
}

export default new darkModeView();
