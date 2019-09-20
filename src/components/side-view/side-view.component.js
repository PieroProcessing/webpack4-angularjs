import {sideviewController} from './side-view.controller';

const sideView = {
    name: 'sideView',
    template: require('./side-view.view.html'),
    controller: sideviewController,
    controllerAs: 'svCtrl',
    bindings:{
        selected: '<',
        isSelected: '<'
    }
}

export {sideView}