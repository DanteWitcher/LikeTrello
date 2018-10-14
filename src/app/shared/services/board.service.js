export default class {
    constructor($http, $window) {
        this.http = $http;
        this.window = $window;
        this.data = {};
        //for interceptor
        //this.isData = false;
    }
    getBoards() {
            return this.http({
                method: 'GET',
                url: 'https://cloudcalltodo.azurewebsites.net/api/users/boards/',
                headers: {
                    "todo-task-header": 'me'
                },
                withCredentials: true
            }).then((response) => {
                //console.log(response);
                return response.data;
            }).catch((error) => {
                console.log(error);
                //this.window.alert('data hasn\'t fetch, you\'re need to login or to sign in');
            });
            
    }
    sendBoards(boards) {
        return this.http({
            method: "POST",
            url: 'https://cloudcalltodo.azurewebsites.net/api/todo/board',
            headers: {
                "todo-task-header": 'me',
                "Access-Control-Allow-Origin": "http://localhost:9080"
            },
            data: boards,
            withCredentials: true
        }).then((response) => {
            //console.log(response);
            return response.data;
        }).catch((error) => {
            console.log(error);
        });
    }
    deleteBoard(boardId) {
        this.http({
            method: "DELETE",
            url: 'https://cloudcalltodo.azurewebsites.net/api/todo/board/' + boardId,
            headers: {
                "todo-task-header": "mew"
            },
            withCredentials: true
        }).then((response) => {
            //console.log(response);
            return response.data;
        }).catch((error) => {
            console.log(error);
        });
    }
}