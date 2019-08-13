const dependencies = [];
var angular = require('angular');

var login = require('./login/login.component');
 
const AUTH_MODULE = angular.module('Auth', dependencies)
    .component(login)
 

export {AUTH_MODULE}