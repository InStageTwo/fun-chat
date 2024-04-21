import LoginView from "./views/loginView";
import './styles/style';
import FooterView from "./views/footerView";
import Router from "./router/router";
import { Pages } from "./router/pages";

export default class App {
    router: Router;
    
    constructor() {
        this.router = new Router(this.createRoutes());
        this.createView();
    }

    createView(){
        const login = new LoginView;
        // const footer = new FooterView();
        document.body.append(login.getElement() /*, footer.getHtmlElement()*/);
        
    }

    createRoutes(){
        return [
            {
                path: ``,
                callback:() => [],    
            },
            {
                path: `${Pages.CHAT}`,
                callback:() => [],    
            },
            {
                path: `${Pages.LOGIN}`,
                callback:() => [],    
            },
            {
                path: `${Pages.ABOUT}`,
                callback:() => [],    
            },
            {
                path: `${Pages.NOT_FOUND}`,
                callback:() => [],    
            },
        ]
    }
}