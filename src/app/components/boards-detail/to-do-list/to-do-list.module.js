import angular from 'angular';
import toDoListComponent from './to-do-list.component';
import toDoListItemComponent from './to-do-item/to-do-item.component';
import draggableModule from '../../../shared/directives/draggable/draggable.module';


export default angular
    .module('toDoList', [draggableModule])
    .component('toDoList', toDoListComponent)
    .component('toDoItem', toDoListItemComponent)
    .name;