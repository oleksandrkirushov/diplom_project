function openGif(url) {
    const openGif = document.getElementById('content__openGif');
    openGif.innerHTML = '';

    const img = document.createElement('img');
    img.classList.add('content__openGif-img');
    img.setAttribute('src', url);

    const div = document.createElement('div');
    div.classList.add('content__openGif-wrapp');
    div.appendChild(img);

    openGif.classList.add('container');
    openGif.appendChild(div);
};

export default openGif;
