import template from "./columns-list.template.html";

import './columns-list.scss';

class ColumnsListController {
    constructor(updateNoteService, ColumnService, $routeParams) {
        this.columnService = ColumnService;
        this.updateNoteService = updateNoteService;
        this.boardId = $routeParams.boardId;
        this.title = "";
    //  console.log(this, 'ColumnsListController');
    }
    
    addColumn() {
        
        this.columns = this.columns || [];
        
        let newColumn = {
            id: 0,
            title: this.title
        };
        this.columns.push(newColumn);
        this.title = "";
        this.columnService.sendColumns(this.boardId, newColumn).then((data) => {
            newColumn.id = data;
        });

    }
    deleteColumn(column) {
        this.columns = this.columns.filter((item) => {
            return column !== item;
        });
    }
}
export default {
    template: template,
    controller: ColumnsListController,
    bindings: {
        columns: "<"
    }
};