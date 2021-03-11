import getCookie from './getCookie';

function checkingCookies() {
    const cookieValue = getCookie('user');
    const loginLink = document.getElementById('header__login-link');
    if (cookieValue !== undefined) {
        const exit = document.getElementsByClassName('header__login-exit-link')[0];
        const searchWrapp = document.querySelector('.search__container-wrapp');
        exit.classList.remove('hidden');
        loginLink.innerHTML = cookieValue;
        loginLink.classList.remove('login__psevdo');
        searchWrapp.classList.remove('hidden__none');
    } else if (cookieValue === undefined) {
        loginLink.classList.add('login__psevdo');
    }
}

export default checkingCookies;
