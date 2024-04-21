import "../styles/HeaderView";
import ElementCreator from "../utils/elementCreator";
import View from "./view";
import Router from "../router/router";

const CssClasses = {
    HEADER: 'header',
    ABOUT: 'about',
};

export default class HeaderView extends View {
    constructor(router){
        const params = {
            tag: 'header',
            classNames: [CssClasses.HEADER]
        }
        
        super(params);
        this.configureView(router);
    }

    configureView(router){

    }
}

