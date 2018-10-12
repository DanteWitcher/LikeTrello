import angular from 'angular';
import ngRouter from 'angular-route';
import boards from './components/boards/boards.module';
import boardsDetail from './components/boards-detail/boards-detail.module';
import header from './shared/components/header/header.module';
import login from './components/login/login.module';
import register from './components/register/register.module';
import config from './app.config';
import serviceModule from './shared/services/service.module';
//style
import './style.scss';

//test
// import ts from './testFiles/test';
// import './testFiles/test.scss';
// import './testFiles/test1';
// import './testFiles/file.JPG';
// import './testFiles/text.ttf';
// console.log(ts);

angular
  .module('myApp', [ngRouter, serviceModule, boards, boardsDetail, header, login, register])
  .config(config);
  