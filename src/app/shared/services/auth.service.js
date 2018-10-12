export default class {
    constructor($http) {
        this.$http = $http;
    }
    authorization(data) {

        // 1
        return this.$http({
            method: 'POST',
            headers: {
                "todo-task-header": "me"
            },
            url: "https://cloudcalltodo.azurewebsites.net/api/users/login",
            data: data,
            withCredentials: true

        }).then((response) => {
            console.log(response, 'good');
            return response.data;
        }).catch((error) => {
            console.log(error);
        });
    }
    logout() {
        return this.$http({
            method: 'POST',
            headers: {
                "todo-task-header": "me"
            },
            url: "https://cloudcalltodo.azurewebsites.net/api/users/logout",
            withCredentials: true

        }).then((response) => {
            return response;
        }).catch((error) => {
            console.log(error);
        });
    }
}