import '../styles/footerView';
import ElementCreator from '../utils/elementCreator';
import View from './view';

const CssClasses = {
    footer: 'footer',
};



export default class FooterView extends View {
    constructor() {
        const params = {
            tag: 'section',
            classNames: [CssClasses.footer],
        };
        super(params);
        this.configureView();
    }

    configureView() {
        this.elementCreator.addInnerElement(new ElementCreator({
        tag: 'a',
        classNames: ['footer'],
        textContent: 'RS School',
        href: 'https://rs.school/', 
        callback: (event) => {
            event.preventDefault(); 
            window.open('https://rs.school/', '_blank'); 
      },
    
       }));
        
        this.elementCreator.addInnerElement(new ElementCreator({
        tag: 'span',
        classNames: ['footer'],
        textContent: 'dashaborzova',
        }));

        this.elementCreator.addInnerElement(new ElementCreator({
            tag: 'span',
            classNames: ['footer'],
            textContent: '2023',
           }));
        }
}