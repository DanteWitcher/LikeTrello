import angular from 'angular';
import registerComponent from './register.component';
import serviceModule from '../../shared/services/service.module';
import validatePassword from '../../shared/directives/validatePassword.directive';
import validateEmail from '../../shared/directives/validateEmail.directive';

export default angular
    .module('register', [serviceModule])
    .component('register', registerComponent)
    .directive('validatePassword', validatePassword)
    .directive('validateEmail', validateEmail)
    .name;