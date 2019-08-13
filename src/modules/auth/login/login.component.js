import { LoginController } from './login.controller';

const login = {
    name: 'login',
    template: require('./login.view.html'),
    controller: LoginController,
    controllerAs: 'loginCtrl',
}

export {login}