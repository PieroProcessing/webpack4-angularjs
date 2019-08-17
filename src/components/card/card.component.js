import {cardController} from './card.controller';

const card = {
    name: 'card',
    template: ['$attrs', ($attrs) => {
        if (!$attrs.template) $attrs.template = 'fallback';
        return require('./card-' + $attrs.template + '.view.html');
    }],
    controller: cardController,
    controllerAs: 'cardCtrl',
    bindings:{
        isSelected: '&',
        itemList: '<'
    }
}

export {card}