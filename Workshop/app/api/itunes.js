export const fetchItunes = term => {
    return fetch(`https://itunes.apple.com/search?term=${term}`)
                .then(response => response.json())
}

