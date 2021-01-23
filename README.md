<h1 align="center">FindYourSquad</h1>
<p align="center"><img ="center" src="frontend/public/favicon.ico"  width="200" height="200" /></p>


<a href="https://findyoursquad.herokuapp.com/#/">FindYourSquad</a> is a social platform for gamers that matches teammates based on play style and skill. Through these connections, gamers can communiate with one another, arrange schedules, view each other's gaming profile, and deploy into their favorite games together.
<br></br>
## Brief Overview
FindYouSquad's matching algorithm takes your personal specifications and finds the perfect teammates for a variety of games, including Apex Legends and Call of duty. After putting in your search criteria, a user is presented with a list of squads. They can view the stats of players currently in the squad and decide if they are a good fit. The user requests to join the squad, is approved by the squad leader, and is let in. Once accepted into a squad, players can communicate through chat to exchange gamertags and discuss strategy. When everyone is ready to play,  log on and hop into battle.
<br></br>
## Features

* **Search Feature** - Users are able to specify game, squad size, and ability level in the search bar. The squad forum with refresh and the player can browse squads specific to their search and request to join.
<img src="frontend/src/assets/images/squad-search.gif?raw=true" width="1000">

* **Invite Request** - Any user of our platform can request to join any squad as long as the squad is not filled.
<img src="frontend/src/assets/images/invite-request.gif?raw=true" width="1000">

* **Accepting Members** - The squad leader can click on pending requests to view the user's gaming profile. If they think the player is a good fit, they can accept that player.
<img src="frontend/src/assets/images/accepting-members.gif?raw=true" width="1000">

* **Squad Chat** - Squadmates can chat w/ each other through our chat system to discuss game plans, strategy, or anything else.
<img src="frontend/src/assets/images/team-chat.gif?raw=true" width="1000">

* **Create Squad** - Players can create a squad with a custom game type, squad size, and difficulty level. The squad creator is automatically set as the squad's leader.
<img src="frontend/src/assets/images/create-squad.png?raw=true" width="1000">

* **Gaming Profile** - Players can upload snapshots from their best games which are stored with aws and displayed on their page.
<img src="frontend/src/assets/images/profile-page.gif?raw=true" width="1000">
<br></br>
## Technologies

* MongoDB
    * MongoDB is a document-based NoSQL database that is highly flexible and scalable. The project will be primarily using MongoDB for our backend and will benefit from utilizing document data structures since we will be able to utilize different datatypes
* Mongoose
    * Mongoose is an ODM library for MongoDB and Node.js that provides an API to model the data in our database. We use Mongoose because it allows us to define a schema to work with as well as give us methods to help define validations
* Express
    * Express is a web application framework for Node that allows us to write handles to respond to different HTTP verb requests at different URL paths, combine with view rendering engines to generate responses, set common web application settings, and allow for the use of middleware during any part of the request handling pipeline
* React Redux
    * We will be using React Redux to render out our frontend as well as use Axios to help connect our frontend React Redux to our backend MongoDB
* Node.js
    * Node.js is a JavaScript runtime environment that allows us to utilize JavaScript's asynchronicity characteristic to let us process multiple requests at the same time
* AWS S3
    * AWS S3 is essential to providing our player base with a social platform experience, where users can upload and view images, as well as highlight videos, of their gameplay. To implement AWS S3 in our MERN stack, multer and aws-sdk technologies were used. Multer, a middleware for Express and Node.js, offers ease in handling multipart/form-data, a datatype that videos and images are encoded in when uploaded to our server by users. Amazon’s aws-sdk  package is an essential library to get our user’s files displayed on our website.
* Socket.io 
    * Several features in our app employ the use of Socket.io, which enables real-time, bidirectional and event-based communication. For instance, once a player enters a message into his squad channel, an event will be emitted that the backend server and all subscribers will listen for, enacting a callback function to perform an action on the backend or render the new message on each client’s frontend instantaneously.
<br></br>
## Socket Setup [MERN]

* To initialize sockets on the server or back-end, the boilerplate setup code was used below on app.js, the entry file that Node.js uses to compile all the packages in the back-end.

```js
const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server, {
  cors: {
    origin: "https://findyoursquad.herokuapp.com/#/",
    methods: "*",
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});
```

* On the same page, we set up the connections on the server / back-end side. Once connected, the server will listen for events (i.e. "connection", "new-message", "new-message-received", and "disconnect") and perform specific callback functions that accompany each event. Think of these events as keywords that all clients and servers connected to the socket will listen in for.

```js
io.on("connection", (socket) => {
  console.log("Connected to Socket " + socket.id);

  // Receiving new-message from client
  socket.on("new-message", (squad) => {
    console.log(
      "message '" +
        squad.data.messages[squad.data.messages.length - 1].content +
        "' sent"
    );
    
    io.sockets.emit("new-message-received", squad.data.messages[squad.data.messages.length - 1]);
  });

  socket.on("disconnect", () => {
    console.log("A user has disconnected.");
  });
});
```

* Below, we use a module on "/frontend/socket.js" to establish the socket on the frontend or client side. Each time that this module is called, it will open a connection if none exists (the first if statement), connect back to the socket if a connection has already been established (the second if statement).

```js
import io from "socket.io-client";

export default class MySocket {
    socket;
    static getSocket = () => {

        if (MySocket.socket === undefined) {
            MySocket.socket = io({
                withCredentials: true,
                extraHeaders: {
                    "my-custom-header": "abcd"
                }
            });
        }

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
```

* For our project, whenever a user posts a message to their squad, the correspong action (postMessage) will initiate a signal to the backend socket. `MySocket.getSocket().emit('new-message', squad);` will emit the keyword that was previusly discussed to the backend, which will be listening for this event, since the backend was already connected to the socket. With this event that is emitted from the frontend, `squad` data is also sent to the backend, which will use that data to perform the corresponding callback function on the backend or server that is currently listening to the socket.

```js
export const postMessage = (data) => dispatch => {
    return (
        APISquad.postMessage(data)
            .then((squad) => {
                MySocket.getSocket().emit('new-message', squad);
            })
            .catch(err => console.log(err))
    )
};
```

* Once the backend receives the event keyword, "new-message", it will log "message content received" to the console to let the sender know that the message was sent. On "new-message", the server will also emit a new event back to the frontend to let the user's client or react rerender the page to show the message that was broadcasted.

```js
io.on("connection", (socket) => {
  console.log("Connected to Socket " + socket.id);

  // Receiving new-message from client
  socket.on("new-message", (squad) => {
    console.log(
      "message '" +
        squad.data.messages[squad.data.messages.length - 1].content +
        "' sent"
    );
    
    io.sockets.emit("new-message-received", squad.data.messages[squad.data.messages.length - 1]);
  });

  socket.on("disconnect", () => {
    console.log("A user has disconnected.");
  });
});
```

* Lastly, once the client receives the event keyword, "new-message-received", from the backend, it will call a specific action (fetchSquadMessage), which will rerender the React component, allowing the user to view new messages that have been sent within a squad.

```js
class SquadShow extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            messages: this.props.currentSquad.messages,
            socket: MySocket.getSocket()
        };

        this.state.socket.on("new-message-received", (message) => {
            this.props.fetchSquadMessages(this.props.match.params.squadId);
        });

        this.renderChat = this.renderChat.bind(this)
    }

    ...
```