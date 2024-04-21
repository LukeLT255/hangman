import home from './app/js/home'
import howTo from './app/js/howTo'
import category from './app/js/category'
import hangman from './app/js/hangman'
import './app/sass/style.scss'



//check if page local storage variable is set, if not set to home
let page = localStorage.getItem('page');
let currentCategory = localStorage.getItem('category');
if(!page) {
  localStorage.setItem('page', 'home');
  page = 'home';
}

if(!currentCategory) {
  localStorage.setItem('category', '');
}


function setPage(currentPage, cat='') {
  document.body.removeAttribute("class");
  if(currentPage === 'home') {
    document.body.classList.add(currentPage);
    home();
  } else if (currentPage === 'how-to') {
    document.body.classList.add(currentPage);
    howTo();
  } else if (currentPage === 'category') {
    document.body.classList.add(currentPage);
    category();
  } else if (currentPage === 'hangman') {
    document.body.classList.add(currentPage);
    hangman(cat);
  }
}

setPage(page, currentCategory);
window.addEventListener("storage", () => {
  page = localStorage.getItem('page');
  currentCategory = localStorage.getItem('category');
  setPage(page, currentCategory);
})





