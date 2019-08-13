function contentRoute($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('dashboard.content', {
            url: 'content/',
            component: 'contentComponent',
            lazyLoad: ($transition$) => {
                const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");

                return import(/* webpackChunkName: "content-module" */ "./content.module")
                    .then(mod => {$ocLazyLoad.load(mod.CONTENT_MODULE)})
                    .catch(err => {
                        throw new Error("Ooops, something went wrong, " + err);
                    });
            }
        })
    $urlRouterProvider.otherwise("/login");
}

contentRoute.$inject = ['$stateProvider', '$urlRouterProvider'];

module.exports = function (ngModule) {
    ngModule.config(contentRoute);
}