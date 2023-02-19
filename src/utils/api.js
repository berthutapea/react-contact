const BASE_URL = 'https://contact-api.dicoding.dev/v1';

function getAccesToken() {
    return localStorage.getItem('accessToken')
}

function putAccessToken(accessToken) {
    return localStorage.setItem('accessToken', accessToken);
}

async function fetchWithToken(url, options = {}) {
    return fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${getAccesToken()}`
        }
    });
}