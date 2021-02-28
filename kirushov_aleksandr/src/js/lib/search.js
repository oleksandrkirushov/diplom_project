import getAjax from './getAjax';
import renderHtml from './renderHtml';


function search(searchValue, tumbler, offset, className, href, limit) {
    const spiner = document.getElementsByClassName('spiner__list')[0];
    spiner.classList.remove('spiner__hidden');
    offset = (offset !== undefined) ? offset : 0;
    limit = (limit !== undefined) ? limit : 12;
    let url = '';

    if (searchValue === 'trending') {
        url = `https://api.giphy.com/v1/gifs/${searchValue}?api_key=jRfm1eOkIA2CdOd25ahwGR0IepZtvTmx&limit=${limit}&offset=${offset}&rating=g`;
    } else {
        url = `https://api.giphy.com/v1/gifs/search?api_key=jRfm1eOkIA2CdOd25ahwGR0IepZtvTmx&q=${searchValue}&limit=${limit}&offset=${offset}&rating=g&lang=en`;
    }
    sessionStorage.setItem('searchValue', searchValue);
    getAjax(url).then(data => {
        spiner.classList.add('spiner__hidden');
        renderHtml(data, tumbler, className, href);
    }).catch(error => {
        console.log(error);
    });
}

export default search;
