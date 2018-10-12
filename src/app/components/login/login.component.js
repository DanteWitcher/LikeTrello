import template from './login.template.html';

import './login.scss';

class LoginController {
    constructor(AuthService, BoardService) {
        this.error = "";
        this.goodResponse = '';
        this.data = {};
        this.board = BoardService;
        this.auth = AuthService;
        this.url = "https://cloudcalltodo.azurewebsites.net/api/users/login?email=sasha%40gmail.com&password=Sasha!123";
    }
    login() { 
        this.clean();
        if(this.email && this.password) {
            let data = {
                email: this.email,
                password: this.password
            };
            this.auth.authorization(data).then((data) => {
                if(!data.succeeded) {
                    this.error = "This email doesn't exist"; 
                    this.email = "";
                    this.password = "";
                }
                this.data = data;
            });
        }  
        else { 
            this.error = "Use correct data";  
        }
    }    
    logout() {
        this.clean();
        this.auth.logout().then(response => {
            if(response.status == 200) {
                this.goodResponse = "you're log out";
            }  
        });
    }
    clean() {
        this.error = "";
        this.goodResponse = '';
    }
}

export default {
    template: template,
    controller: LoginController,
    bingdings: {
        send: "<"
    }
};