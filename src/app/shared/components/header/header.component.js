import template from './header.template.html';

import './header.scss';

class headerController {
    constructor() {
    }
}
export default {
    template: template,
    transclude: true,
    controller: headerController
};