import $ from 'jquery';
import 'popper.js';
import search from './lib/search';
import openGif from './lib/openGif';
import logIn from './lib/logIn';
import register from './lib/register';
import logOut from './lib/logOut';
import animateScroll from './lib/animateScroll';
import checkingCookies from './lib/checkingCookies';
import magnifierGif from './lib/magnifierGif';
import slickHome from './lib/slider';


checkingCookies();

slickHome();
// search('super gifs', 1, 0, 'home__gifs', 0, 4);
// отправка формы логин
const formLogIn = document.getElementsByClassName('form__logIn')[0];
formLogIn.addEventListener('submit', logIn);

search('trending');

let offset = 0;

const searchForm = document.getElementById('search__form');
// поиск
searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const searchValue = this[0].value;
    if (searchValue === '') return;
    const openGif = document.getElementById('content__openGif');
    openGif.innerHTML = '';
    openGif.classList.remove('container');
    const searchTo = document.querySelector('a[href="#search"]');
    animateScroll(searchTo);
    search(searchValue);
    offset = 0;
});

const contentWrapp = document.getElementsByClassName('content__wrapp');

// открытие гифки
contentWrapp[0].addEventListener('click', function (e) {
    e.preventDefault();
    let element = e.target;
    if (e.target.nodeName.toLowerCase() === 'img') {
        animateScroll(element.parentNode);
        openGif(element.src, element.alt);
        setTimeout(search(element.alt), 5000);
        sessionStorage.setItem('searchValue', element.alt);
        offset = 0;
    }
})

// строка поиска фиксед + автодобавление гифок + появление стрелки наверх
setInterval(window.addEventListener('scroll', function () {
    const searchFixed = document.getElementsByClassName('search__container-wrapp')[0];
    const searchSection = document.getElementById('search');
    const searFixedTop = searchSection.getBoundingClientRect().top;

    if (searFixedTop < 0 && searchFixed.classList.contains('search__noFixed')) {
        searchFixed.classList.remove('search__noFixed');
        searchFixed.classList.add('search__fixed');
    } else if (searFixedTop >= 0 && searchFixed.classList.contains('search__fixed')) {
        searchFixed.classList.remove('search__fixed');
        searchFixed.classList.add('search__noFixed');
    }

    const arrowBack = document.querySelector('.arrow__back');

    if (searFixedTop < -700) {
        arrowBack.classList.remove('hidden__none');
    } else if (searFixedTop >= -700) {
        arrowBack.classList.add('hidden__none');
    }

    const windowHeight = document.documentElement.clientHeight;
    const wrappBottom = contentWrapp[0].getBoundingClientRect().bottom;
    const searchValue = sessionStorage.getItem('searchValue');
    if (offset === 36) return;
    if (windowHeight > wrappBottom) {
        offset = offset + 12;
        search(searchValue, 1, offset);
    };
}), 0);

// клик на логин-> открыть popUp
const loginLink = document.getElementById('header__login-link');

loginLink.addEventListener('click', function (e) {
    e.preventDefault();
    const popUp = document.getElementsByClassName('popUp')[0];
    const body = document.body;
    popUp.classList.remove('popUp__hidden');
    const popUpforms = [...document.getElementsByClassName('popUp__form')];
    popUpforms.forEach(function (item, index) {
        popUpforms[index].reset();
        popUpforms[index].forEach(function (i, j) {
            popUpforms[index][j].style.borderColor = "transparent";
        });
    })
    const invalid = document.getElementsByClassName('invalid')[0];
    invalid.innerHTML = '';
    const invalidReg = document.getElementsByClassName('invalidReg')[0];
    invalidReg.innerHTML = '';
});


// закрыть popUp 
const popUpCloseBtn = [...document.getElementsByClassName('popUp__close')];
popUpCloseBtn.forEach(function (item, index) {
    popUpCloseBtn[index].addEventListener('click', function (e) {
        const popUp = document.getElementsByClassName('popUp')[0];
        popUp.classList.add('popUp__hidden');
        const logIn = document.getElementsByClassName('logIn')[0];
        const register = document.getElementsByClassName('register')[0];
        logIn.classList.remove('popUp__hidden');
        register.classList.add('popUp__hidden');
    })
})

// переход на форму регистрации
const createAcc = document.getElementsByClassName('popUp__link')[0];
createAcc.addEventListener('click', function (e) {
    e.preventDefault();
    const logIn = document.getElementsByClassName('logIn')[0];
    const register = document.getElementsByClassName('register')[0];
    logIn.classList.add('popUp__hidden');
    register.classList.remove('popUp__hidden');
})

// регистрация нового пользователя
const formRegister = document.getElementsByClassName('form__register')[0];
formRegister.addEventListener('submit', register);

// вылогон
const exit = document.getElementsByClassName('header__login-exit-link')[0];
exit.addEventListener('click', logOut);

// анимированый скролл 
const menuList = document.querySelector('.menu__list');

menuList.addEventListener('click', function (e) {
    e.preventDefault();
    let element = e.target;
    if (e.target.nodeName.toLowerCase() === 'span') {
        animateScroll(element.parentNode);
    } else if (e.target.nodeName.toLowerCase() === 'a') {
        animateScroll(element);
    }
})

const arrowBackLink = document.querySelector('.arrow__back-link');
arrowBackLink.addEventListener('click', function (e) {
    e.preventDefault();
    animateScroll(this);
})

// увеличение гифки
const contentOpenGif = document.querySelector('.content__openGif');
contentOpenGif.addEventListener('click', magnifierGif);

// закрытие gifPop
const gifPop = document.querySelector('.content__gifPop');
gifPop.addEventListener('click', function (e) {
    this.classList.add('hidden__none');
})
