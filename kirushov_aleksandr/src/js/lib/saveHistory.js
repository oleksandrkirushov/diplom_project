function saveHistory(searchValue) {
    if (searchValue === '') return;
    sessionStorage.setItem('searchValue', searchValue);
    const searchHistory = document.getElementsByClassName('search__history')[0];
    const btn = document.createElement('button');
    const span = document.createElement('span');
    span.innerHTML = searchValue;
    btn.appendChild(span);
    searchHistory.classList.add('container');
    searchHistory.appendChild(btn);
}

export default saveHistory;
