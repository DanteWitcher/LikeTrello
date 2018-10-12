import template from './boards-item.template.html';
//style
import './boards-item.scss';

class BoardItemController {
    constructor(BoardService) {
        this.boardService = BoardService;
    }
    delete() {
        this.onDelete(this.list);
        //service 
        this.boardService.deleteBoard(this.list.id);
    }
}
export default {
    template: template,
    controller: BoardItemController,
    transclude: true,
    bindings: {
        list: '<',
        onDelete: '&',
    }
};