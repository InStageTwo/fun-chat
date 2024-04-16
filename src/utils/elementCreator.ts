export default class ElementCreator {
    element: HTMLElement;

    constructor(params: { tag: string, classNames: string[], textContent?: string, callback?: (event: Event) => void, href?:string }) {
        this.element = document.createElement(params.tag);
        this.createElement(params);
    }

    createElement(params: {tag: string, classNames: string[], textContent?: string, callback?: (event: Event) => void }) {
        this.setCssClasses(params.classNames);
        if (params.textContent) {
            this.setTextContent(params.textContent);
        }
        
        if (params.callback) {
            this.setCallback(params.callback);
        }
    }

    getElement(): HTMLElement {
        return this.element;
    }

    addInnerElement(element: HTMLElement | ElementCreator) {
        if (element instanceof ElementCreator) {
            this.element.append(element.getElement());
        } else {
            this.element.append(element);
        }
    }
    
    setCssClasses(cssClasses: string[]) {
        cssClasses.forEach((className) => {
            this.element.classList.add(className);
        });
    }

    setTextContent(text: string) {
        this.element.textContent = text;
    }

    setCallback(callback: (event: Event) => void) {
        this.element.addEventListener('click', (event) => callback(event));
    }
}