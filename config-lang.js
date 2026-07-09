var lang = (function () {
    var match = window.location.search.match(/[?&]lang=(en|vi|de)/);
    if (match) {
        return match[1];
    }
    return "en";
})();
