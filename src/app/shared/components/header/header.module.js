import angular from 'angular';
import headerComponent from './header.component.js';


export default angular
    .module('header', [])
    .component('header', headerComponent)
    .name;