const dependencies = [];
var angular = require('angular');

var userDashboard = require('./user-dashboard/dashboard.component');
  
const DASH_MODULE = angular.module('Dashboard', dependencies)
    .component(userDashboard)

export {DASH_MODULE}