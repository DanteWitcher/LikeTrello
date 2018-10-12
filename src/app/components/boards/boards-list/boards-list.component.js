import template from './boards-list.template.html';
//style
import './boards-list.scss';

class BoardListController {
    constructor(BoardService) {

        this.boardService = BoardService;
        this.title = "";
        
    }

    addBoard() {
        this.boards = this.boards || [];
        let newBoard = {
            id: 0,
            title: this.title
        };
        this.boards.push(newBoard);
        this.title = "";
        this.boardService.sendBoards(newBoard).then((data) => {
            newBoard.id = data;
        });
    }

    deleteBoard(board) {
        this.boards = this.boards.filter((item) => {
            return board !== item;
        });
    }
}

export default {
    template: template,
    controller: BoardListController,
    bindings: {
        boards: '<'
    },
    transclude: true
};