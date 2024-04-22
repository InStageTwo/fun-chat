import ElementCreator from "../utils/elementCreator";

export default abstract class View{
    elementCreator: ElementCreator;

    constructor(params = { tag: 'section', classNames: [] as string[] }){
        this.elementCreator = this.createView(params);
    }

    getHtmlElement(): HTMLElement{
        return this.elementCreator.getElement();
    }

    createView(params: { tag: string, classNames: string[], textContent?: string, callback?: (event: Event) => void }){
        const elemParams = {
            tag: params.tag,
            classNames: params.classNames,
            textContent: '',
            callback: null 
        }
        const elementCreator = new ElementCreator(params);
        return elementCreator;
    }
}