const dependencies = [];
var angular = require('angular');

var contentComponent = require('./content.component');
  
const CONTENT_MODULE = angular.module('content', dependencies)
    .component(contentComponent)

export {CONTENT_MODULE}