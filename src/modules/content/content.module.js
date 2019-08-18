const dependencies = [];
var angular = require('angular');

var contentComponent = require('./view/content.component');
var card = require('../../components/card/card.component');
var contentService = require('./content.service');

const CONTENT_MODULE = angular.module('content', dependencies)
    .component(contentComponent)
    .component(card)
    .service(contentService)
    
export {CONTENT_MODULE}