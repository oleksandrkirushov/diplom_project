function register(e) {
    e.preventDefault();
    const userName = this[0].value;
    const password = this[1].value;
    const invalidReg = document.getElementsByClassName('invalidReg')[0];
    let count = 0;

    if (userName === '' && password === '') {
        this[0].style.borderColor = "red";
        this[1].style.borderColor = "red";
        invalidReg.innerHTML = 'Please, enter username and password';
    } else if (userName === '') {
        this[0].style.borderColor = "red";
        this[1].style.borderColor = "transparent";
        invalidReg.innerHTML = 'Please, enter username';
    } else if (password === '') {
        this[1].style.borderColor = "red";
        this[0].style.borderColor = "transparent";
        invalidReg.innerHTML = 'Please, enter password';
    } else if ((userName !== '' && password === '') || (userName !== '' && password !== '')) {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (userName === key) {
                count = count + 1;
                this[0].style.borderColor = "red";
                this[1].style.borderColor = "transparent";
                invalidReg.innerHTML = 'Username already exists';
                break;
            }
        }

        if (count === 0) {
            localStorage.setItem(userName, password);
            this.reset();
            const logIn = document.getElementsByClassName('logIn')[0];
            const register = document.getElementsByClassName('register')[0];
            logIn.classList.remove('popUp__hidden');
            register.classList.add('popUp__hidden');
        }
    }
}
export default register;
