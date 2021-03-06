module.exports = {
    get api() {
        return require('./api');
    },

    get brute() {
        return require('./brute');
    },

    get cacheControl() {
        return require('./cache-control');
    },

    get errorHandler() {
        return require('./error-handler');
    },

    get prettyUrls() {
        return require('./pretty-urls');
    },

    get urlRedirects() {
        return require('./url-redirects');
    }
};
