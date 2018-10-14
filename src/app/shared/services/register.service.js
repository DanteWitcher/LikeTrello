export default class {
    constructor($http) {
        this.$http = $http;
    }
    register(data) {
        // email = 'sasha@gmail.com';
        // password = 'Sasha!123';
        //console.log(email, password);

        // 1
        return this.$http({
            method: 'POST',
            headers: {
                "todo-task-header": "me"
            },
            url: "https://cloudcalltodo.azurewebsites.net/api/users/register",
            data: data,
            withCredentials: true

        }).then((response) => {
            //console.log(response, 'good');
            return response.data;
        }).catch((error) => {
            console.log(error);
        });
    }
}