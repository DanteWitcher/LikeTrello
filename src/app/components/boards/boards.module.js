import angular from 'angular';
import boardComponent from "./boards.component";
import boardsListComponent from "./boards-list/boards-list.component";
import boardsItemComponent from "./boards-list/boards-item/boards-item.component";


 

export default angular
    .module('boards', [])
    .component('boards', boardComponent)
    .component('boardsList', boardsListComponent)
    .component('boardsItem', boardsItemComponent)
    .name;