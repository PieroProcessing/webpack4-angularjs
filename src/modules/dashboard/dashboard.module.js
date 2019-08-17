const dependencies = [];
var angular = require('angular');

var userDashboard = require('./user-dashboard/dashboard.component');
var topBar = require('./top-bar/top-bar.component');

const DASH_MODULE = angular.module('Dashboard', dependencies)
    .component(userDashboard)
    .component(topBar)
    
export {DASH_MODULE}