export default function () {
    const EMAIL_REGEXP = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/i;

    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, elem, attr, ctrl) {
            ctrl.$validators.email = function (modelValue, viewValue) {
                if (ctrl.$isEmpty(modelValue)) {
                    return true;
                }
                if (EMAIL_REGEXP.test(viewValue)) {
                    return true;
                }
            };
        }
    };
}