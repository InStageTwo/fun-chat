export default class Authenticator {
    private socket: WebSocket;
    private serverUrl: string;

    constructor(serverUrl: string, validUsername: string, validPassword: string) {
        this.serverUrl = serverUrl;
        this.socket = new WebSocket(this.serverUrl);
        this.socket.onmessage = this.handleMessage.bind(this);
        this.socket.onerror = this.handleError.bind(this);
    }

    sendAuthRequest(login: string, password: string) {
        const authRequest = {
            id: "request_id",
            type: "USER_LOGIN",
            payload: {
                user: {
                    login: login,
                    password: password
                }
            }
        };
        this.socket.send(JSON.stringify(authRequest));
    }

    handleMessage(event: MessageEvent) {
        const response = JSON.parse(event.data);

        if (response.type === "USER_LOGIN") {
            if (response.payload.user.isLogined) {
                // switchToMainView(); // Необходимо реализовать функцию switchToMainView или удалить этот вызов
            } else {
                console.log("Authentication failed.");
            }
        } else if (response.type === "ERROR") {
            console.log("Error: " + response.payload.error);
        }

        this.socket.close();
    }

    handleError(event: ErrorEvent) {
        const error = event.message;
        console.log("Error: " + error);
    }

    verifyCredentials(username: string, password: string): Promise<{ success: boolean }> {
        return new Promise((resolve, reject) => {
            // Отправляем запрос аутентификации с переданными username и password
            const authRequest = {
                id: "request_id",
                type: "USER_LOGIN",
                payload: {
                    user: {
                        login: username,
                        password: password
                    }
                }
            };
            this.socket.send(JSON.stringify(authRequest));

            this.socket.onmessage = (event) => {
                const response = JSON.parse(event.data);
                if (response.success) {
                    resolve({ success: true });
                } else {
                    resolve({ success: false });
                }
            };

            this.socket.onerror = (error) => {
                reject(error);
            };
        });
    }
}

function switchToMainView() {
    // Реализуйте логику для переключения на главное представление
    console.log('Switching to main view');
}