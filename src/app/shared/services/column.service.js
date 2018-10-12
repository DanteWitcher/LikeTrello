export default class {
    constructor($http) {
        this.http = $http;
    }
    getColumns(boardId) {
        return this.http({
            method: "GET",
            url: 'https://cloudcalltodo.azurewebsites.net/api/todo/list/' + boardId,
            headers: {
                "todo-task-header": 'mew'
            },
            withCredentials: true
        }).then((response) => {
            console.log(response, 'getColumns');
            return response.data;
        }).catch((error) => {
            console.log(error);
        });
    }
    sendColumns(boardId, lists) {
        return this.http({
            method: "POST",
            url: 'https://cloudcalltodo.azurewebsites.net/api/todo/list/' + boardId,
            headers: {
                "todo-task-header": 'mew'
            },
            withCredentials: true,
            data: lists
        }).then((response) => {
            console.log(response);
            return response.data;
        }).catch((error) => {
            console.log(error);
        });
    }
    deleteColumns(columnId) {
        return this.http({
            method: "DELETE",
            url: 'https://cloudcalltodo.azurewebsites.net/api/todo/list/' + columnId,
            headers: {
                "todo-task-header": 'mew'
            },
            withCredentials: true
        }).then((response) => {
            //console.log(response);
            return response;
        }).catch((error) => {
            console.log(error);
        });
    }
}
