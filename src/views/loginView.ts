import  '../styles/loginView.css';
import ElementCreator from '../utils/elementCreator';
import View from './view';
import Authenticator from '../controllers/loginController';
import Router from '../router/router';

const cssClasses ={
    login: 'login',
}

export default class LoginView extends View{
    element!: HTMLElement;
    
    constructor() {
        const params = {
            tag: 'form',
            classNames: [cssClasses.login],
            textContent: 'login'
        }
        super(params);
        this.setupLoginForm();
    }

    setupLoginForm() {
        const loginForm = new ElementCreator({
            tag: 'form',
            classNames: ['login-form'],
            callback: this.onSubmit.bind(this)
        });

        const usernameLabel = new ElementCreator({
            tag: 'label',
            classNames: ['form-label'],
            textContent: 'Username:'
        });

        const usernameInput = new ElementCreator({
            tag: 'input',
            classNames: ['form-input'],
        });

        const passwordLabel = new ElementCreator({
            tag: 'label',
            classNames: ['form-label'],
            textContent: 'Password:'
        });

        const passwordInput = new ElementCreator({
            tag: 'input',
            classNames: ['form-input'],
        });

        const submitButton = new ElementCreator({
            tag: 'button',
            classNames: ['submit-button'],
            textContent: 'Login'
        });

        loginForm.addInnerElement(usernameLabel);
        loginForm.addInnerElement(usernameInput);
        loginForm.addInnerElement(passwordLabel);
        loginForm.addInnerElement(passwordInput);
        loginForm.addInnerElement(submitButton);

        document.body.appendChild(loginForm.getElement());
    }
    getElement(): HTMLElement {
        return this.element;
    }

    onSubmit(event: Event) {
        event.preventDefault();

        
        const usernameInput = document.querySelector('.form-input:nth-child(2)') as HTMLInputElement;
        const passwordInput = document.querySelector('.form-input:nth-child(4)') as HTMLInputElement;

        const username = usernameInput.value;
        const password = passwordInput.value;
        
        const authenticator = new Authenticator('ws://localhost:4000');
        
        authenticator.verifyCredentials(username, password)
        .then((response) => {
            if (response.success) {
                // Переключение на страницу с HeaderView
                const router = new Router(/* ваш массив маршрутов */);
                router.navigate('/header');
            } else {
                // Обработка неверных учетных данных
                console.log('Неверный логин или пароль');
            }
        })
        .catch((error) => {
            console.error('Ошибка верификации:', error);
        });
    }
}
