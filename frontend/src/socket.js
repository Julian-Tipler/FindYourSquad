import io from "socket.io-client";

export default class MySocket {
    socket;
    static getSocket = () => {
        if (MySocket.socket === undefined) {
            MySocket.socket = io("http://localhost:5100" ,{
                withCredentials: true,
                extraHeaders: {
                    "my-custom-header": "abcd"
                }
            });
        }
        if (!MySocket.socket.connected) {
            MySocket.socket.connect("http://localhost:5100", {
                withCredentials: true,
                extraHeaders: {
                    "my-custom-header": "abcd"
                }
            });
        }
        // if (userId) {
        //     MySocket.socket.emit("login", { userId: userId });
        // }
        return MySocket.socket;
    };
}
