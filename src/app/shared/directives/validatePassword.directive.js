export default function () {
    const PASSWORD_REGEXP = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;

    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, elem, attr, ctrl) {
            //console.log(scope, elem, attr, ctrl, 'validate');

            ctrl.$validators.password = function (modelValue, viewValue) {
                console.log(modelValue, viewValue, 'out');
                if (ctrl.$isEmpty(modelValue)) {
                    return true;
                }
                if (PASSWORD_REGEXP.test(viewValue)) {
                    return true;
                }
            };
        }
    };
}