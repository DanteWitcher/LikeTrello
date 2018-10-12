import template from './register.template.html';
import './register.scss';
class RegisterController {
    constructor(registerService) {
        this.auth = registerService;
        this.data = {};
        this.error = '';
    }
    send() {
        if(this.email && this.password) {
            let data = {
                email: this.email,
                password: this.password
            };
        this.auth.register(data).then((data) => {
            this.data = data;
            if(data.errors) {
                data.errors.forEach(element => {
                    this.error += element.code + ' ';
                });
            }
        });
        }
    }    
}

export default {
    template: template,
    controller: RegisterController,
    bingdings: {
        send: "<"
    }
};