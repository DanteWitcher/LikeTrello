import angular from 'angular';

class dragController {
    constructor() {
        //console.log(this, 'dragController');
    }
}

export default function ($document, draggableService) {
    return {
        controller: dragController,
        bindToController: true,
        scope: {
            dragItem: '='
        },
        restrict: "A",
        link: function (scope, elem, attr, ctrl) {
            angular.element(elem).attr("draggable", "true");

            elem.on("dragstart", function (e) {
               
                //console.log(draggableService);  
                elem.addClass('draggable');

                draggableService.item = ctrl.dragItem;
                return true;
            });
        }
    };
}
