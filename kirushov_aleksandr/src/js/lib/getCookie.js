function getCookie(name) {
    const cookies = decodeURIComponent(document.cookie);

    const cookieList = Object.fromEntries(cookies.split(';').map(cookieItem => {
        return cookieItem.trim().split('=');
    }));

    return cookieList[name];
}

export default getCookie;
