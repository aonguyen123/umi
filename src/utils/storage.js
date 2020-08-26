function parseJWT(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(decodeURIComponent(escape(window.atob(base64))));
}

function getTokenJWT() {
    const token = localStorage.getItem('token_JWT');
    if (!token) return null;
    if (parseJWT(token).exp < Date.now() / 1000) {
        setTokenJWT(null);
        return null;
    }
    return token;
}
function setTokenJWT(tokenJWT) {
    return localStorage.setItem('token_JWT', tokenJWT);
}
function removeTokenJWT() {
    return localStorage.removeItem('token_JWT');
}
function setAuthority(auth) {
    if (auth) {
        window.localStorage.setItem('AUTH', auth);
    } else {
        window.localStorage.removeItem('AUTH');
    }
}
function getAuthority() {
    const auth = window.localStorage.getItem('AUTH');
    return auth;
}

const storage = {
    getTokenJWT,
    setTokenJWT,
    removeTokenJWT,
    setAuthority,
    getAuthority,
};

export default storage;
