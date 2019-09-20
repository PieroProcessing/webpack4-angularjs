const dependencies = [];
var angular = require('angular');

var userDashboard = require('./user-dashboard/dashboard.component');
var topBar = require('./top-bar/top-bar.component');
var langSwitch = require('../../components/lang-switch/lang-switch.component');
var authService = require('../auth/auth.service');

const DASH_MODULE = angular.module('Dashboard', dependencies)
    .component(userDashboard)
    .component(topBar)
    .component(langSwitch)
    .service(authService)
        
export {DASH_MODULE}