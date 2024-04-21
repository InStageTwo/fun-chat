import View from '../view';

const CssClasses = {
    ITEM: 'header-item',
};

interface LinkElementsMap {
    [key: string]: LinkView;
}

interface Page {
    name: string;
    callback: () => void;
}

export default class LinkView extends View {
    linkElements: LinkElementsMap;

    constructor(pageParam: Page, linkElements: Map<string, LinkView>) {
        
        const params = {
            tag: 'a',
            classNames: [CssClasses.ITEM],
        };
        super(params);
        const linkElementsMap: LinkElementsMap = {};
        linkElements.forEach((value, key) => {
            linkElementsMap[key] = value;
        });
        this.linkElements = linkElementsMap; 

        this.configureView(pageParam);
    }

    configureView(pageParam: Page) {
        this.elementCreator.setTextContent(pageParam.name);
        this.elementCreator.setCallback(pageParam.callback);

        const element = this.elementCreator.getElement();

    }
}