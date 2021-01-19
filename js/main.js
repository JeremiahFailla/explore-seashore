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

const init = () => {
  console.log(window)
  console.log('loaded')
  landingHoverHandler();
  clickHandler();
  submitHandler();
}

init();