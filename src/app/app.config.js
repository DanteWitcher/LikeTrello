export default class Config {
    constructor($locationProvider, $routeProvider) {
        // $locationProvider.hashPrefix('!');
        $routeProvider.
        when('/api/todo/boards/', {
            template: '<boards></boards>'
        }).
        when('/api/todo/list/:boardId/', {
            template: '<boards-detail></board-detail>',
        }).
        when('/api/users/login/', {
            template: '<login></login>'
        }).
        when('/api/users/register/', {
            template: '<register></register>'
        }).
        otherwise('/api/todo/boards/');
    }
}