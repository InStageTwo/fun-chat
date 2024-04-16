export default class Authenticator {
   socket: WebSocket;
   serverUrl: string;
   
   constructor(serverUrl: string) {
    this.serverUrl = serverUrl;
    this.socket = new WebSocket(this.serverUrl);
    
    this.socket.onmessage = this.handleMessage.bind(this);
    this.socket.onopen = (_event: Event) => {
        
        const login = '';
        const password = '';
        this.sendAuthRequest(login, password);
    };
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
                switchToMainView();
            } else {
                console.log("Authentication failed.");
            }
        } else if (response.type === "ERROR") {
            console.log("Error: " + response.payload.error);
        }

        this.socket.close();
    }

    handleError(event: Event) {
        const error = (event as ErrorEvent).message;
        console.log("Error: " + error);
    }
}

// Logic not finished
function switchToMainView() {
    throw new Error("Function not implemented.");
}

