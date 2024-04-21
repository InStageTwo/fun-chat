import './styles/style';
import LoginView from "./views/loginView";
import FooterView from "./views/footerView";
import Router from "./router/router";
import { Pages } from "./router/pages";
import HeaderView from "./views/headerView";
import ChatView from "./views/chatView";

export default class App {
    router: Router;

    constructor() {
        this.header = null;
        this.chat = null;
        this.router = new Router(this.createRoutes());
        this.createView();
    }

    createView(){
        this.header = new HeaderView(this.router);
        this.chat = new ChatView();
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