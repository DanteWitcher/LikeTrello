import template from './boards-item.template.html';
import './boards-item.scss';

class BoardItemController {
    constructor(BoardService) {
        this.boardService = BoardService;
    }
    delete() {
        this.onDelete(this.list);
        this.boardService.deleteBoard(this.list.id);
    }
}
export default {
    template: template,
    controller: BoardItemController,
    bindings: {
        list: '<',
        onDelete: '&'
    }
};