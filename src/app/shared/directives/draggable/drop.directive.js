class DropController {
    constructor() {
        //console.log(this, 'Drop Directive');
    }
    onDrop(from, to, item) {
        //console.log('on Drop');
        let data = {
            from: from,
            to: to,
            item: item
        };
        
        this.onDropped({data: data});
    }
}

export default function ($document, draggableService) {
    return {
        controller: DropController,
        bindToController: true,
        scope: {
            onDropped: '&',
            list: '='
        },
        link: function (scope, elem, attr, ctrl) {
            elem.on("dragstart", function (e) {
                draggableService.from = ctrl.list;
                return true;
            });

            elem.on('dragenter', function (e) {
                e.preventDefault();
                return true;
            });

            elem.on("dragover", function (e) {
                if (e.preventDefault) {
                    e.preventDefault();
                }
                return true;
            });
            elem.on('drop', function (e) {
                let carryElemement = $document[0].querySelector('.draggable'),
                    parent = e.target.closest('.list__block');

                if (parent.contains(carryElemement)) {
                    carryElemement.classList.remove('draggable');
                    return false;
                }
                
                let from = draggableService.from,
                    to = draggableService.to = ctrl.list,
                    item = draggableService.item;
               
                ctrl.onDrop(from, to, item);

                draggableService.clear();
                e.stopPropagation();
                return true;
            });
        }
    };
}