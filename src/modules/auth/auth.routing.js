function loginRoute($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('login', {
            url: "/login",
            template: require('./login/login.view.html'),
            lazyLoad: ($transition$) => {
                const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");

                return import(/* webpackChunkName: "auth-module" */ "./authentication.module")
                    .then(mod => $ocLazyLoad.load(mod.AUTH_MODULE))
                    .catch(err => {
                        throw new Error("Ooops, something went wrong, " + err);
                    });
            }
        })
}

loginRoute.$inject = ['$stateProvider', '$urlRouterProvider'];

module.exports = function (ngModule) {
    ngModule.config(loginRoute);
}