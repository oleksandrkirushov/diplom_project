import getCookie from './getCookie';

function checkingCookies() {
    const cookieValue = getCookie('user');
    if (cookieValue !== undefined) {
        const body = document.body;
        const exit = document.getElementsByClassName('header__login-exit-link')[0];
        const loginLink = document.getElementById('header__login-link');
        const hiddenArr = [...document.querySelectorAll('.visible')];
        exit.classList.remove('hidden');
        body.classList.remove('page__overflow-hidden');
        loginLink.innerHTML = cookieValue;
        hiddenArr.forEach(function (item, index) {
            hiddenArr[index].classList.remove('hidden__none');
        })
    } else if (cookieValue === undefined) {
        const arrowLogin = document.querySelector(".header__login-arrow");
        arrowLogin.classList.remove('hidden');
    }
}

export default checkingCookies;
