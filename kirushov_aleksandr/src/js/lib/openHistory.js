import search from './search';

function openHistory(e) {

    if (e.target.nodeName.toLowerCase() === 'button' || e.target.nodeName.toLowerCase() === 'span') {
        const openGif = document.getElementById('content__openGif');
        openGif.innerHTML = '';
        openGif.classList.remove('container');
        search(e.target.innerText);
    }
}

export default openHistory;
