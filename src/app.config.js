function config( $ocLazyLoadProvider, $urlRouterProvider) {

 
 

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: true,
        events: true,
    });

    //states of app
    $urlRouterProvider.otherwise("/login");

    // uncomment when in production
    // $compileProvider.debugInfoEnabled(false);
    // $compileProvider.commentDirectivesEnabled(false);
    // $compileProvider.cssClassDirectivesEnabled(false);

}

config.$inject = [ '$ocLazyLoadProvider', '$urlRouterProvider'  ];

function states($rootScope, $state, gettextCatalog) {

    gettextCatalog.debug = true;

}

states.$inject = ['$rootScope', '$state', 'gettextCatalog', ];

module.exports = function (ngModule) {
    ngModule
        .config(config)
        .constant('API_ROOT', '')
        .value('TITLE_APP', 'Webpack 4 - Angularjs')
        .run(states)
};