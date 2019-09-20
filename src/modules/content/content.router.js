import {ContentController} from './view/content.controller';

function contentRoute($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('dashboard.content', {
            url: 'content/',
            template: '<content-component template="colors"></content-component>',

            lazyLoad: ($transition$) => {
                const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");

                return import(/* webpackChunkName: "content-module" */ "./content.module")
                    .then(mod => {$ocLazyLoad.load(mod.CONTENT_MODULE)})
                    .catch(err => {
                        throw new Error("Ooops, something went wrong, " + err);
                    });
            }
        })
        .state('dashboard.users', {
            url: 'users/',
            template: '<content-component template="users"></content-component>',
            lazyLoad: ($transition$) => {
                const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");

                return import(/* webpackChunkName: "content-module" */ "./content.module")
                    .then(mod => {$ocLazyLoad.load(mod.CONTENT_MODULE)})
                    .catch(err => {
                        throw new Error("Ooops, something went wrong, " + err);
                    });
            }
        })    
        // example how to use resolve
        // .state('dashboard.users', {
        //     url: 'users/',
        //     template: require('./view/content-users.view.html'),
        //     controller: ContentController,
        //     controllerAs: 'contentCtrl',
        //     resolve: ContentController.resolve,
        //     lazyLoad: ($transition$) => {
        //         const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");

        //         return import(/* webpackChunkName: "content-module" */ "./content.module")
        //             .then(mod => {$ocLazyLoad.load(mod.CONTENT_MODULE)})
        //             .catch(err => {
        //                 throw new Error("Ooops, something went wrong, " + err);
        //             });
        //     }
        // })
    $urlRouterProvider.otherwise("/login");
}

contentRoute.$inject = ['$stateProvider', '$urlRouterProvider'];

// module.exports = function (ngModule) {
//     ngModule.config(contentRoute);
// }
export {contentRoute}