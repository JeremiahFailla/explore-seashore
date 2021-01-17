// import './../css/main.scss';
import 'animate.css'
import './../node_modules/@fortawesome/fontawesome-free/css/all.css'

const landingHoverHandler = () => {
  const heading = document.querySelector('.heading');
  heading.addEventListener('mouseenter', (e) => {
    document.querySelector('.blurE').style.background = 'rgba(0, 0, 0, 0.8)';
    document.querySelector('.blurE').classList.add("z");
  })
  
  heading.addEventListener('mouseleave', () => {
    document.querySelector('.blurE').style.background = 'transparent';
    document.querySelector('.blurE').classList.remove("z");
  })

  // const title = document.querySelector('.title');
  // title.addEventListener('mouseenter', () => {
  //   document.querySelector('.description').classList.remove('hide-text', 'animate__fadeOutRightBig');
  //   document.querySelector('.description').classList.add('animate__animated', 'animate__fadeInLeftBig');
  // })

  // document.querySelector('showcase').addEventListener('mouseleave', () => {
  //   document.querySelector('.description').classList
  //     .remove('animate__fadeInLeftBig');
  //   document.querySelector('.description').classList
  //     .add('animate__fadeOutRightBig')
  // })
}

const init = () => {
  // window.onload = function () {
  //   setTimeout(() => {
  //     document.querySelector('.loading').style.display = 'none';
  //   }, 1000)
  // }

  console.log(window)
  console.log('loaded')
  landingHoverHandler();
}

init();