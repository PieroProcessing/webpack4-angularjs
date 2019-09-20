import {langSwitchController} from './lang-switch.controller';

const langSwitch = {
    name: 'langSwitch',
    template: require('./lang-switch.view.html'),
    controller: langSwitchController,
    controllerAs: 'lsCtrl',
}

export {langSwitch}