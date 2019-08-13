// css resources
 import './assets/style/common.scss';


// angularjs
var angular = require('angular');
var ngAnimate = require('angular-animate'); 
  
// states
import uiroute from '@uirouter/angularjs';
import lazyLoad from 'oclazyload';

// translation extract and compile
import '../node_modules/angular-gettext/dist/angular-gettext.min';

// external library resources angular compatible
var _ = require('lodash');

// external library non-Angularjs
 
// modules injection
// import './modules/auth/auth.module';
// import './modules/dashboard/dashboard.module';

// dependencies
const dependencies = [
    
    // libraries
    uiroute,
    lazyLoad,
    ngAnimate,
    'gettext',
    
    // app structure
    // 'Auth',
    // 'Dashboard'
];


var ngModule = angular.module('webpack4.angularjs', dependencies);

// app structure
// require('./directives')(ngModule);
// require('./services')(ngModule);
require('./factories')(ngModule);
// require('./controllers')(ngModule);
// require('./filters')(ngModule);


// config
require('./app.config')(ngModule);
// translations
// require(/* webpackChunkName: "translations" */'./assets/l10n/translations');
// routing
require('./modules/auth/auth.routing')(ngModule);
require('./modules/dashboard/dashboard.routing')(ngModule);
require('./modules/content/content.router')(ngModule);