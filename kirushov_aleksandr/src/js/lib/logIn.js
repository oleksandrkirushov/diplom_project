import search from './search';

function logIn(e) {
    e.preventDefault();
    const userName = this[0].value;
    const password = this[1].value;
    const loginLink = document.getElementById('header__login-link');
    const invalid = document.getElementsByClassName('invalid')[0];
    invalid.innerHTML = '';
    let count = 0;
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);

        if (key === userName) {
            count = count + 1;
            this[0].style.borderColor = "transparent";
            if (value === password) {
                const popUp = document.getElementsByClassName('popUp')[0];
                const body = document.body;
                const exit = document.getElementsByClassName('header__login-exit-link')[0];
                const hiddenArr = [...document.querySelectorAll('.visible')];
                popUp.classList.add('popUp__hidden');
                body.classList.remove('page__overflow-hidden');
                exit.classList.remove('hidden');
                hiddenArr.forEach(function (item, index) {
                    hiddenArr[index].classList.remove('hidden__none');
                })
                loginLink.innerHTML = userName;
                this.reset();
                this[0].style.borderColor = "transparent";
                this[1].style.borderColor = "transparent";
                invalid.innerHTML = '';
                search('trending');
                document.cookie = `user=${userName}; max-age=86400`;
                const arrowLogin = document.querySelector(".header__login-arrow");
                arrowLogin.classList.add('hidden');
            } else if (value !== password) {
                this[1].style.borderColor = "red";
                this[0].style.borderColor = "transparent";
                invalid.innerHTML = 'Invalid password';
            }
        }
    }

    if (count === 0) {
        this[0].style.borderColor = "red";
        this[1].style.borderColor = "transparent";
        invalid.innerHTML = 'Invalid username';
    }
}

export default logIn;
