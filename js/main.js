import './../css/main.scss';
import './../node_modules/@fortawesome/fontawesome-free/css/all.css'

const landingLinkHandler = () => {
  const header = document.querySelector('.heading');
  header.addEventListener('mouseenter', (e) => {
    document.querySelector('.blurE').classList.add('blur'); 
    document.querySelector('.heading').classList.add('not-blur'); 
  })
  
  header.addEventListener('mouseleave', () => {
    document.querySelector('.blurE').classList.remove('blur');
    document.querySelector('.heading').classList.remove('not-blur'); 
  })
}

const init = () => {
  landingLinkHandler();
}

init();