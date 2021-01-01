const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require("./routes/api/users");
const squads = require("./routes/api/squads");
const cors = require('cors');

// define our app using express
const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socket = require('socket.io');
const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: '*',
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

// const path = require('path');

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('frontend/build'));
//   app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
//   })
// }
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('frontend/build'));
//   app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
//   })
// }


// const server = http.Server(app);
// const io = socket(server);
// app.set('socketio', io);

// socket.io connection
io.on('connection', (socket) => {
    console.log("Connected to Socket "+ socket.id);

    // Receiving new-message from client
    socket.on('new-message', (squad) => {
        console.log(
            "message \'" +
            squad.data.messages[squad.data.messages.length - 1].content +
            "\' sent" 
        );
        io.sockets.emit('messages', (squad.data.messages));
    });

    socket.on('disconnect', () => {
        console.log('A user has disconnected.')
    })
});


// allow-cors
// app.use(function(req ,res, next){
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
app.use(cors());

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));


// app.get("/", (req, res) => res.send("Hello World"));
app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/squads", squads);

// Start the server at the specified PORT
const port = process.env.PORT || 5100;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
