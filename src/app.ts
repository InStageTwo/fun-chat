import './styles/style';
import LoginView from "./views/loginView";
import FooterView from "./views/footerView";
import Router from "./router/router";
import { Pages } from "./router/pages";
import HeaderView from "./views/headerView";
import ChatView from "./views/chatView";
import View from './views/view';
import NotFoundView from './notFoundView';

interface Route {
    path: string;
    callback: (resource: string) => void;
}

export default class App {
    router: Router;
    header: HeaderView | null;
    chat: ChatView | null;

    constructor() {
        this.header = null;
        this.chat = null;
        const routes = this.createRoutes();
        this.router = new Router(routes);
        this.createView();
    }

    createView(){
        this.header = new HeaderView(this.router);
        this.chat = new ChatView();
        const login = new LoginView();
        const footer = new FooterView();
        document.body.append(login.getElement(), this.header.getHtmlElement(),this.chat.getHtmlElement(), footer.getHtmlElement());
        
    }

    createRoutes(){
        return [
            {
                path: ``,
                callback:() => {
                    this.header!.setSelectedItem(Pages.CHAT);
                    this.chat!.setContent(new ChatView());
                },    
            },
            {
                path: `${Pages.CHAT}`,
                callback:() => {
                    this.setContent(Pages.CHAT, new ChatView())
                },        
            },
            {
                path: `${Pages.LOGIN}`,
                callback:() => {
                    this.setContent(Pages.LOGIN, new LoginView());
                },    
            },
            //Not implemented yet
            // {
            //     path: `${Pages.ABOUT}`,
            //     callback:() => {
            //         this.setContent(Pages.ABOUT, new AboutView());
            //     },     
            // },
            {
                callback:() => {
                    this.setContent(Pages.NOT_FOUND, new NotFoundView());
                },   
            },
        ] as Route[]
    }

    setContent(page:string, view : View) {
        this.header?.setSelectedItem(page);
        this.chat?.setContent(view);
    }
}