function getAjax(url, options) {
    if (!options) {
        return fetch(url).then(response => {
            if (response.ok) {
                return response.json();
            }
        });
    } else {
        return fetch(url, options).then(response => {
            if (response.ok) {
                return response.json();
            }
        });
    }
}

export default getAjax;
