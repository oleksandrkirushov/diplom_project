function logOut(e) {
    e.preventDefault();
    let userName = document.getElementById('header__login-link');
    document.cookie = `user=${userName.innerHTML}; max-age=-1`;
    userName.innerHTML = 'LOGIN';
    this.classList.add('hidden');
    const searchWrapp = document.querySelector('.search__container-wrapp');
    searchWrapp.classList.add('hidden__none');
    const forms = document.getElementsByTagName('form');
    forms.forEach(function (item, index) {
        forms[index].reset();
    })
    const openGif = document.getElementById('content__openGif');
    openGif.innerHTML = '';
    // const list = document.getElementsByClassName('content__list');
    // list[0].innerHTML = '';
    userName.classList.add('login__psevdo');
}

export default logOut;
