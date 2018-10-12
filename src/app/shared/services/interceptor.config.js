export default class {
    constructor($httpProvider) {
        $httpProvider.interceptors.push('interceptor');
    }
}