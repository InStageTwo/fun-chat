import '../styles/chatView.css'
import Controller from "../controllers/controller";
import ElementCreator from "../utils/elementCreator";
import View from "./view";

const CssClasses = {
    CHAT: 'chat',
  };
  
export default class ChatView extends View {
    constructor() {
      const params = {
        tag: 'div',
        classNames: [CssClasses.CHAT],
      };
      super(params);
    }
  
    setContent(content: View) {
      const htmlElement = this.elementCreator.getElement();
      while (htmlElement.firstElementChild) {
        htmlElement.firstElementChild?.remove();
      }
      this.elementCreator.addInnerElement(content.getHtmlElement());
    }
  }