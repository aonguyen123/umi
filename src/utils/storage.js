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
function setAuthority(auth) {
    if (auth) {
        window.localStorage.setItem('AUTH', auth);
    } else {
        window.localStorage.removeItem('AUTH');
    }
}
function setUserCurrent(user) {
    if (user) {
        window.localStorage.setItem('USER_CURRENT', JSON.stringify(user));
    } else {
        window.localStorage.removeItem('USER_CURRENT');
    }
}
function getUserCurrent() {
    const userCurrent = window.localStorage.getItem('USER_CURRENT');
    return JSON.parse(userCurrent);
}
function getAuthority() {
    const auth = window.localStorage.getItem('AUTH');
    return auth;
}

const storage = {
    getTokenJWT,
    setTokenJWT,
    setAuthority,
    getAuthority,
    setUserCurrent,
    getUserCurrent,
};

export default storage;
