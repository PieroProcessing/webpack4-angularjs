const dependencies = [];
var angular = require('angular');

var contentComponent = require('./view/content.component');
var card = require('../../components/card/card.component');

const CONTENT_MODULE = angular.module('content', dependencies)
    .component(contentComponent)
    .component(card)

export {CONTENT_MODULE}