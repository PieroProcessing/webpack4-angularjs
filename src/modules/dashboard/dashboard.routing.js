function dashboardRoute($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('dashboard', {
            abstract: true,
            url: '/',
            component: 'userDashboard',
            lazyLoad: ($transition$) => {
                const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");

                return import(/* webpackChunkName: "dashboard-module" */ "./dashboard.module")
                    .then(mod => {$ocLazyLoad.load(mod.DASH_MODULE)})
                    .catch(err => {
                        throw new Error("Ooops, something went wrong, " + err);
                    });
            }
        })
    $urlRouterProvider.otherwise("/login");
}

dashboardRoute.$inject = ['$stateProvider', '$urlRouterProvider'];

module.exports = function (ngModule) {
    ngModule.config(dashboardRoute);
}
