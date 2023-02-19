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

async function login({ email, password}) {
    const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        alert(responseJson.message);
        return { error: true, data : null };
    }

    return { error: false, data: responseJson.data };
}

async function register({ name, email, password }) {
    const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        alert(responseJson.message);
        return { error: true };
    }

    return { error: false };
}