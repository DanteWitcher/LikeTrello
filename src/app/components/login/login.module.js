import angular from 'angular';
import loginComponent from './login.component';
import serviceModule from '../../shared/services/service.module';
import validatePassword from '../../shared/directives/validatePassword.directive';
import validateEmail from '../../shared/directives/validateEmail.directive';

export default angular
    .module('login', [serviceModule])
    .component('login', loginComponent)
    .directive('validatePassword', validatePassword)
    .directive('validateEmail', validateEmail)
    .name;