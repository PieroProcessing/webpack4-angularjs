import { UserDashboardController } from './dashboard.controller';

const userDashboard = {
    name: 'userDashboard',
    template: require('./dashboard.view.html'),
    controller: UserDashboardController,
    controllerAs: 'uiCtrl',
}
export {userDashboard}