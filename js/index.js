import { scrollToTop } from './scroll.js';
import { handleScroll } from './scroll.js';

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

scrollToTopBtn.style.display = 'none';
scrollToTopBtn.addEventListener('click', scrollToTop);
window.addEventListener('scroll', handleScroll);