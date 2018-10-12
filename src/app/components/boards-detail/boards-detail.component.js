import template from './boards-detail.template.html';
//style
import './boards-detail.scss';

class boardsDetailController {
    constructor($routeParams, ColumnService) {
       
        ColumnService.getColumns($routeParams.boardId).then((data) => {
            this.columns = data;
        });
        //console.log(this, "detailComp");
    }
}
export default {
    template: template,
    controller: boardsDetailController,
    bindings: {
        columns: '<'
    }
};