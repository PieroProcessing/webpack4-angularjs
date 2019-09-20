import { ContentController } from './content.controller';

const contentComponent = {
    name: 'contentComponent',
    template:  require('./content.view.html'),
    controller: ContentController,
    controllerAs: 'contentCtrl',
    bindings: {
        template: '@',
    }
}
export { contentComponent }