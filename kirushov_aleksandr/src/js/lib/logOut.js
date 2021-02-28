function logOut(e) {
    e.preventDefault();
    let userName = document.getElementById('header__login-link');
    document.cookie = `user=${userName.innerHTML}; max-age=-1`;
    userName.innerHTML = 'LOGIN';
    this.classList.add('hidden');
    document.body.classList.add('page__overflow-hidden');
    const hiddenArr = [...document.querySelectorAll('.visible')];
    hiddenArr.forEach(function (item, index) {
        hiddenArr[index].classList.add('hidden__none');
    });
    const forms = document.getElementsByTagName('form');
    forms.forEach(function (item, index) {
        forms[index].reset();
    })
    const searchHistory = document.getElementsByClassName('search__history')[0];
    searchHistory.innerHTML = '';
    const openGif = document.getElementById('content__openGif');
    openGif.innerHTML = '';
    const list = document.getElementsByClassName('content__list');
    list[0].innerHTML = '';
    const arrowLogin = document.querySelector(".header__login-arrow");
    arrowLogin.classList.remove('hidden');
}

export default logOut;
