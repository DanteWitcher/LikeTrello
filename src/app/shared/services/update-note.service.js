export default class {
    constructor($http) {
        this.http = $http;
    }
    updateNote(note) {
        return this.http({
            method: "PUT",
            url: "https://cloudcalltodo.azurewebsites.net/api/todo/event",
            headers: {
                "todo-task-header": 'mew'
            },
            data: note,
            withCredentials: true
        }).then((response) => {
            //console.log(response);
            return response;
        }).catch((error) => {
            console.log(error);
        });
    }
}