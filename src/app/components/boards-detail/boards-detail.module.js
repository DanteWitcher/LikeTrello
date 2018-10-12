import angular from 'angular';
import boardsDetail from './boards-detail.component';
import columnsList from './columns-list/columns-list.module';


export default angular
    .module('boardsDetail', [columnsList])
    .component('boardsDetail', boardsDetail)
    .name;

   