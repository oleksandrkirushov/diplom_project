function renderHtml(data, tumbler, className, href) {
    className = (className !== undefined) ? className : 'content__list';
    tumbler = (tumbler !== undefined && tumbler === 1) ? tumbler : 0;
    href = (href === undefined) ? '#search' : '';

    const list = document.getElementsByClassName(className);

    if (tumbler === 0) list[0].innerHTML = '';

    for (let i = 0; i < data.data.length; i++) {
        const gif = document.createElement('img');
        gif.classList.add('content__img');
        gif.setAttribute('src', data.data[i].images.downsized.url);
        gif.setAttribute('alt', data.data[i].title);

        const a = document.createElement('a');
        a.classList.add('content__link');
        a.setAttribute('href', href);
        a.appendChild(gif);

        const item = document.createElement('div');
        item.classList.add('content__item');
        item.appendChild(a);

        list[0].appendChild(item);
    }
}

export default renderHtml;
