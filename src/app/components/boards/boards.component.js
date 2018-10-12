import template from './boards.template.html';
//style
import './boards.scss';

class BoardController {
    constructor(BoardService) {
        BoardService.getBoards().then((data) => this.data = data);  
             
    }
}
export default {
    template: template,
    controller: BoardController,
    transclude: true
};