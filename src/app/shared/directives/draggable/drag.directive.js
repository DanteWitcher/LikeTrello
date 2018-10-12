import angular from 'angular';

class dragController {
    constructor() {
        console.log(this, 'dragController');
    }
}

export default function ($document, draggableService) {
    return {
        controller: dragController,
        bindToController: true,
        scope: {
            dragItem: '=',
            column: '=',
            
            data: '='
        },
        restrict: "A",
        link: function (scope, elem, attr, ctrl) {
            angular.element(elem).attr("draggable", "true");

            elem.on("dragstart", function (e) {
                //Лучше перенести в контроллер??????????????
                console.log(draggableService);  
                elem.addClass('draggable');
                
               // draggableService.from = ctrl.column;
                draggableService.item = ctrl.data.item;
                return true;
            });

            elem.on("dragend", function (e) {
                try {
                    let carryElemement = $document[0].querySelector('.draggable'),
                        parent = carryElemement.closest('.list__block');
                    if (parent.contains(carryElemement)) {
                        carryElemement.classList.remove('draggable');
                        return false;
                    } else {           
                        draggableService.clear();
                    }
                } catch (error) {
                    console.log(error);
                    draggableService.clear();
                }
            });
        }
    };
}
