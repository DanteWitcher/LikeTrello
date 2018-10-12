export default class {
    constructor($http) {
        this.http = $http;
    }
    addNote(listId, notes) {
        return this.http({
            method: "POST",
            url: 'https://cloudcalltodo.azurewebsites.net/api/todo/event/' + listId,
            headers: {
                "todo-task-header": 'me'
            },
            withCredentials: true,
            data: notes
        }).then((response) => {
            console.log(response);
            return response.data;
        }).catch((error) => {
            console.log(error);
        });
    }
    deleteNote(noteId) {
        return this.http({
            method: "DELETE",
            url: 'https://cloudcalltodo.azurewebsites.net/api/todo/event/' + noteId,
            headers: {
                "todo-task-header": 'me'
            },
            withCredentials: true
        }).then((response) => {
            console.log(response);
            return response.data;
        }).catch((error) => {
            console.log(error);
        });
    }
}