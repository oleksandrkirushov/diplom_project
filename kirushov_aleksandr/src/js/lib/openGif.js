function openGif(url, title) {
    const openGif = document.getElementById('content__openGif');
    openGif.innerHTML = '';

    const img = document.createElement('img');
    img.classList.add('content__openGif-img');
    img.setAttribute('src', url);

    const h2 = document.createElement('h2');
    h2.classList.add('content__openGif-title');
    h2.innerHTML = title;

    const stikerWrapp = document.createElement('div');
    stikerWrapp.classList.add('content__openGif-stikerWrapp');
    const stiker = document.createElement('div');
    stiker.classList.add('content__openGif-stiker');
    const downLeft = document.createElement('div');
    downLeft.classList.add('content__openGif-stiker-downLeft');
    const downRigt = document.createElement('div');
    downRigt.classList.add('content__openGif-stiker-downRigt');
    stiker.appendChild(downLeft);
    stiker.appendChild(downRigt);
    stikerWrapp.appendChild(stiker);


    const div = document.createElement('div');
    div.classList.add('content__openGif-wrapp');
    div.appendChild(h2);
    div.appendChild(img);
    div.appendChild(stikerWrapp);

    openGif.classList.add('container');
    openGif.appendChild(div);
};

export default openGif;
