import template from './column-item.template.html';
import './column-item.scss';

class ColumnItemController {
    constructor(ColumnService) {
        this.columnService = ColumnService;
        console.log(this, 'ColumnItemController');
    }
    send(data) {
        console.log('get Data', data);
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