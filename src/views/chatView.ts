import '../styles/chatView.css'
import Controller from "../controllers/controller";
import ElementCreator from "../utils/elementCreator";
import View from "./view";


export default class ChatView extends View {
    controller: Controller;
    
    constructor(controller: Controller) {
        super({ tag: 'div', classNames: ['chat'], textContent: '' });
        this.controller = controller;
       
    }
}