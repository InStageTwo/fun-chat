import Authenticator from "./loginController";


export default class Controller {
    authenticator: Authenticator;

    constructor(webSocketUrl: string) {
        this.authenticator = new Authenticator(webSocketUrl);
    }

    authenticate(username: string, password: string): void {
        
        if (username === 'user' && password === 'password') {
           
            console.log('Successful');
        } else {
            
            console.log('Authentication failed');
        }
    }
}