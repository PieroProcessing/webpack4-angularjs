(window.webpackJsonp=window.webpackJsonp||[]).push([[8],[,,,,,,,,,function(n,t,o){"use strict";o.r(t);o(10);var e=o(8),r=o(7),c=o.n(r),i=(o(15),o(4)),u=o(12),a=(o(16),[e.a,c.a,u,"gettext"]),s=i.module("webpack4.angularjs",a);o(18)(s),o(20)(s),o(21)(s),o(22)(s),o(23)(s)},function(n,t,o){},,,,,,,,function(n,t,o){n.exports=function(n){o(19)(n)}},function(n,t){function o(o){return{goTo:function(n,t){o.go(n,t)},getState:function(){return o.current.name}}}o.$inject=["$state"],n.exports=function(n){n.factory("stateFactory",o)}},function(n,t){function o(n,t){n.config({debug:!0,events:!0}),t.otherwise("/login")}function e(n,t,o){o.debug=!0}o.$inject=["$ocLazyLoadProvider","$urlRouterProvider"],e.$inject=["$rootScope","$state","gettextCatalog"],n.exports=function(n){n.config(o).constant("API_ROOT","").value("TITLE_APP","Webpack 4 - Angularjs").run(e)}},function(n,t,o){function e(n,t){n.state("login",{url:"/login",component:"login",lazyLoad:function(n){var t=n.injector().get("$ocLazyLoad");return o.e(3).then(o.bind(null,24)).then(function(n){return t.load(n.AUTH_MODULE)}).catch(function(n){throw new Error("Ooops, something went wrong, "+n)})}})}e.$inject=["$stateProvider","$urlRouterProvider"],n.exports=function(n){n.config(e)}},function(n,t,o){function e(n,t){n.state("dashboard",{abstract:!0,url:"/",component:"userDashboard",lazyLoad:function(n){var t=n.injector().get("$ocLazyLoad");return o.e(5).then(o.bind(null,25)).then(function(n){t.load(n.DASH_MODULE)}).catch(function(n){throw new Error("Ooops, something went wrong, "+n)})}}),t.otherwise("/login")}e.$inject=["$stateProvider","$urlRouterProvider"],n.exports=function(n){n.config(e)}},function(n,t,o){function e(n,t){n.state("dashboard.content",{url:"content/",component:"contentComponent",lazyLoad:function(n){var t=n.injector().get("$ocLazyLoad");return o.e(4).then(o.bind(null,26)).then(function(n){t.load(n.CONTENT_MODULE)}).catch(function(n){throw new Error("Ooops, something went wrong, "+n)})}}),t.otherwise("/login")}e.$inject=["$stateProvider","$urlRouterProvider"],n.exports=function(n){n.config(e)}}],[[9,10,11,1,0,12,2,6,7,9]]]);