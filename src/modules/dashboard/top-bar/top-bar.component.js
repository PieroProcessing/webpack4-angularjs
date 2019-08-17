import { topbarController } from './top-bar.controller';

const topBar = {
    name: 'topBar',
    template: require('./top-bar.view.html'),
    controller: topbarController,
    controllerAs: 'topbarCtrl',
}
export {topBar}