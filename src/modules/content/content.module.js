const dependencies = [];
var angular = require('angular');

var contentComponent = require('./view/content.component');
var card = require('../../components/card/card.component');
var sideView = require('../../components/side-view/side-view.component');

var contentService = require('./content.service');

const CONTENT_MODULE = angular.module('content', dependencies)
    .component(contentComponent)
    .component(card)
    .component(sideView)
    .service(contentService)
    
export {CONTENT_MODULE}