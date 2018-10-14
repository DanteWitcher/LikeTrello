import template from './to-do-item.template.html';
import './to-do-item.scss';

class ToDoItemController {
    constructor(updateNoteService) {
        this.update = updateNoteService;
        //console.log(this, 'ToDoItemController');
    }
    change() {
        this.todo.done = !this.todo.done;
        this.update.updateNote(this.todo);
    }
    delete() {
        this.onDelete(this.todo);
    }
}
export default {
    template: template,
    controller: ToDoItemController,
    bindings: {
        todo: "<",
        onDelete: "&"
    }
};