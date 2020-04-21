class Auth {
    constructor(tokenKey = 'authToken') {
        this.tokenKey = tokenKey;
    }

    authenticateUser(token) {
        localStorage.setItem(this.tokenKey, token);
    }

    isUserAuthenticated() {
        return localStorage.getItem(this.tokenKey) !== null;
    }

    deauthenticateUser() {
        localStorage.removeItem(this.tokenKey);
    }

    getToken() {
        return localStorage.getItem(this.tokenKey);
    }
}

export default new Auth('authToken');
