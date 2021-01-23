import io from "socket.io-client";

export default class MySocket {
    socket;
    static getSocket = () => {
        // OPENS A CONNECTION
        if (MySocket.socket === undefined) {
            MySocket.socket = io({
                withCredentials: true,
                extraHeaders: {
                    "my-custom-header": "abcd"
                }
            });
        }
        // CONNECTS BACK TO SOCKET
        if (!MySocket.socket.connected) {
            MySocket.socket.connect({
                withCredentials: true,
                extraHeaders: {
                    "my-custom-header": "abcd"
                }
            });
        }
        return MySocket.socket;
    };
}
