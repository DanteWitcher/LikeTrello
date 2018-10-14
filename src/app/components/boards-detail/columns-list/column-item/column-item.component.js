import template from './column-item.template.html';
import './column-item.scss';

class ColumnItemController {
    constructor(ColumnService) {
        this.columnService = ColumnService;
        //console.log(this, 'ColumnItemController');
    }
    delete() {
        this.onDelete(this.column);
        this.columnService.deleteColumns(this.column.id).catch((err) => console.log(err));
    }
}
export default {
    template: template,
    controller: ColumnItemController,
    bindings: {
        column: "<",
        onDelete: '&'
    }
};