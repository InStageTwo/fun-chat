import LoginView from "./views/loginView";
import './styles/style';
import FooterView from "./views/footerView";

export default class App {
    constructor() {
        this.createView();
    }

    createView(){
        const login = new LoginView;
        // const footer = new FooterView();
        document.body.append(login.getElement() /*, footer.getHtmlElement()*/);
        
    }
}