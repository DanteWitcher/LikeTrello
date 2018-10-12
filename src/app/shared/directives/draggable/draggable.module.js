import drag from './drag.directive';
import drop from './drop.directive';
import draggableService from './draggable.service';

export default angular
    .module('draggable', [])
    .directive('myDrag', drag)
    .directive('myDrop', drop)
    .factory('draggableService', draggableService)
    .name;