const db = require("./config/keys").mongoURI;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const squads = require("./routes/api/squads");
const cors = require("cors");
const games = require("./routes/api/games");
const stats = require("./routes/api/stats");
// define our app using express
const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server, {
  cors: {
    origin: "http://findyoursquad.herokuapp.com/#/",
    methods: "*",
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

//heroku path
const path = require('path');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}


// socket.io connection
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

// allow-cors
app.use(cors());

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

// app.get("/", (req, res) => res.send("Hello World"));

app.get('/', function(req, res) {
  res.sendFile(__dirname, '/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  }
})

app.use(passport.initialize());
require("./config/passport")(passport);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use( '/api/profile', profile );
app.use("/api/users", users);
app.use("/api/squads", squads);
app.use("/api/games", games);
app.use("/api/stats", stats);

// Start the server at the specified PORT
const port = process.env.PORT || 5100;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



