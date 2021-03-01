function magnifierGif(e) {
    e.preventDefault();
    if (e.target.classList.contains('content__openGif-stiker') || e.target.classList.contains('content__openGif-stiker-downLeft') || e.target.classList.contains('content__openGif-stiker-downRigt')) {
        const windowWidth = document.documentElement.clientWidth;
        const windowHeight = document.documentElement.clientHeight;
        const gifPop = document.querySelector('.content__gifPop');
        const firstImg = document.querySelector('.content__openGif-img');
        const secondImg = document.querySelector('.content__gifPop-img');
        const url = firstImg.src;

        if (windowWidth > windowHeight) {
            secondImg.style.height = '100vh';
        } else {
            secondImg.style.width = '100%';
        }

        secondImg.setAttribute('src', url);
        gifPop.classList.remove('hidden__none');
    }
}

export default magnifierGif;
