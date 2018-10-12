import angular from 'angular';
import columnsListComponent from './columns-list.component';
import columnItemComponent from './column-item/column-item.component';
import toDoList from '../to-do-list/to-do-list.module';

export default angular
    .module('columnsList', [toDoList])
    .component('columnsList', columnsListComponent)
    .component('columnItem', columnItemComponent)
    .name;

