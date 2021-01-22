// import './../css/main.scss';
import './../node_modules/@fortawesome/fontawesome-free/css/all.css';
import AOS from './../node_modules/aos';
import './../node_modules/aos/dist/aos.css';
import jump from './../node_modules/jump.js/dist/jump.module.js';

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
}

const clickHandler = function () {
  const nav = document.querySelector('.main-nav');
  nav.addEventListener('click', (e) => {
    if (e.target.closest('.landL') === null) return;

    if (e.target.parentElement.dataset.link == "contact") {
      e.preventDefault()
      document.querySelector('.name-input').focus();
      console.log('hello')
      return;
    }

    document.querySelectorAll('.active').forEach((el) => el.classList.remove('active'))
    const link = e.target.closest('.link').dataset.link;
    document.querySelector(`.${link}`).classList.add('active');
  })
}

const submitHandler = function () {
  document.querySelector('.update-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const parent = document.querySelector('.update-form');
    let name = document.querySelector('.name-input');
    let email = document.querySelector('.email-input');
    const nameLabel = document.querySelector('.name-label');
    const emailLabel = document.querySelector('.email-label');

    if (!name.value || !email.value) {
      const html = `
        <div class="alert fail">
          <p>Please insert a name and valid email</p>
        </div>
      `;
      parent.insertAdjacentHTML('afterBegin', html);
      nameLabel.style.color = 'red'
      emailLabel.style.color = 'red'
      setTimeout(() => {
        document.querySelector('.alert').remove();
      }, 5000);
      return;
    };
    
    const html = `
        <div class="alert success">
          <p>Welcome aboard!</p>
        </div>
      `;
    parent.insertAdjacentHTML('afterBegin', html);
    // put label colors back to defauts
    nameLabel.style.color = 'rgb(8, 76, 107)'
    emailLabel.style.color = 'rgb(8, 76, 107)'
    // clear inputs
    name.value = "";
    email.value = "";
    
    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 5000);
  })
}

const success = function (position) {
  const { latitude, longitude } = position.coords;
  const url = `https://www.google.com/maps/dir/${latitude},${longitude}/Ocean+City,+Maryland/@${latitude},${longitude},11z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x89b8d671ac93de8b:0xb4bc715a3af31672!2m2!1d${longitude}!2d${latitude}!3e0'`
  document.querySelector('#direction').setAttribute("href", url);
}

const fail = function () {
  const url = 'https://www.google.com/maps/@38.0581364,-75.1604048,8.5z';
  document.querySelector('#direction').setAttribute("href", url);
}

const getPosition = function () {
  navigator.geolocation.getCurrentPosition(success, fail)
}

const smoothScroll = function () {
  const descrBtn = document.querySelector('.description');
  const goTopBtn = document.querySelector('.gotop');
  const contact = document.querySelector('.bottom');
  const nav = document.querySelector('.main-nav');

  nav.addEventListener('click', (e) => {
    const target = e.target.closest('.link');
    if (e.target.classList.contains('near')) {
      jump('.near-by')
    }
  })

  contact.addEventListener('click', () => {
    jump('#footer')
  })

  descrBtn.addEventListener('click', () => {
    jump('.near-by');
  })

  goTopBtn.addEventListener('click', () => {
    jump('#top');
  })
}

const init = () => {
  console.log('loaded')
  getPosition();
  landingHoverHandler();
  clickHandler();
  submitHandler();
  smoothScroll();

  AOS.init();
}

init();