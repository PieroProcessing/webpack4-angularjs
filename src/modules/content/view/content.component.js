import { ContentController } from './content.controller';

const contentComponent = {
    name: 'contentComponent',
    template: ['$attrs', ($attrs) => {
        if (!$attrs.template) $attrs.template = 'fallback';
        return require('./content-' + $attrs.template + '.view.html');
    }],
    controller: ContentController,
    controllerAs: 'contentCtrl',
    bindings: {
        template: '@',
    }
}
export { contentComponent }