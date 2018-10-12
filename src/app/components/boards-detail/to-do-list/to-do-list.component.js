import template from './to-do-list.template.html';
import './to-do-list.scss';

class toDoListController {
    constructor(updateNoteService, NoteToDoService, $scope, $q) {
        this.title = "";
        this.scope = $scope;
        this.noteToDoService = NoteToDoService;
        this.updateNoteService = updateNoteService;
        this.q = $q;

        console.log(this, 'toDoListController');
    }
    dropped(data) {
        data.from.splice(data.from.indexOf(data.item), 1);
        data.item.listId = this.column.id;
        this.list = this.list || [];
        this.list.push(data.item);
        //data.to.todo.push(data.item);

        
        //SCOPE?????
        //this.scope.$apply();
        //CALLBACK TO COLUMNS
        this.sendToColumns({
            data: data
        });
        //service
        this.updateNoteService.updateNote(data.item);
    }
    addToDo(todo) {
        let newNote = {};
        if (todo) {
            newNote = todo;
        } else {
            newNote = {
                id: 0,
                title: this.title,
                listId: this.id,
                done: true
            };
        }
        this.list = this.list || [];
        this.list.push(newNote);
        this.title = "";
        this.noteToDoService.addNote(this.id, newNote).then((data) => {
            newNote.id = data;
        });

    }
    getToDo(todo) {
        this.needToDo = todo;
    }
    deleteToDo(todo) {
        this.list = this.list.filter((item) => {
            return todo !== item;
        });
        this.noteToDoService.deleteNote(todo.id);
        
    }
}

export default {
    template: template,
    controller: toDoListController,
    bindings: {
        list: "<",
        id: "<",
        column: "<",
        sendToColumns: "&"
    },
    transclude: true
};