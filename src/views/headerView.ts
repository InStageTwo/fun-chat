import "../styles/HeaderView";
import ElementCreator from "../utils/elementCreator";
import View from "./view";
import Router from "../router/router";
import { Pages } from "../router/pages";
import LinkView from "./link/linkView";

const CssClasses = {
    HEADER: 'header',
    ABOUT: 'about',
};

const NamePages: {
    [key: string]: string;
} = {
    CHAT: 'Chat',
    ABOUT: 'About',
};

export default class HeaderView extends View {
    headerLinkElements: Map<string, LinkView>;;
    constructor(router: Router){
        const params = {
            tag: 'header',
            classNames: [CssClasses.HEADER]
        }
        
        super(params);
        this.configureView(router);
        this.headerLinkElements = new Map();
    }

    configureView(router: Router){
        
        const aboutParams ={
            tag: 'button',
            classNames:[CssClasses.ABOUT],
            textContent: 'Info',
            callback:  undefined
        }

        const creatorAbout = new ElementCreator(aboutParams);
        this.elementCreator.addInnerElement(creatorAbout);
        
    
        
        
        Object.keys(NamePages).forEach((key) => {
            const pageParam = {
                name: NamePages[key],
                callback: () => router.navigate(Pages[key]),
            };
            const linkElement = new LinkView(pageParam, this.headerLinkElements);

            creatorAbout.addInnerElement(linkElement.getHtmlElement());

            this.headerLinkElements.set(Pages[key].toUpperCase(), linkElement);
        });

        this.elementCreator.addInnerElement(creatorAbout);
    
    }

    setSelectedItem(namePage: string) {
        const linkItem = this.headerLinkElements.get(namePage.toUpperCase());
        if (linkItem instanceof LinkView) {
            linkItem.setSelectedStatus();
        }
    }
}

