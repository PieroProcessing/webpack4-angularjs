const dependencies = [];
var angular = require('angular');

var login = require('./login/login.component');
var authService = require('./auth.service');

const AUTH_MODULE = angular.module('Auth', dependencies)
    .component(login)
    .service(authService)

export {AUTH_MODULE}