<h1 align="center">FindYourSquad</h1>
<p align="center"><img ="center" src="frontend/public/favicon.ico"  width="200" height="200" /></p>

# FindYourSquad

FindYourSquad is a gaming matchmaker that finds teammates based on ability level and play-style.

FindYouSquad's matching algorithm takes your personal specifications and finds the perfect teammates for a variety of games, including Apex Legends and Call of duty. After putting in your search criteria, a user is presented with a list of squads. They can view the stats of players currently in the squad and decide if they are a good fit. The user requests to join the squad, is approved by the squad leader, and is let in. Once accepted into a squad, players can communicate through chat to trade gamertags and discuss strategy. When everyone is ready,they log on and play.

https://findyoursquad.herokuapp.com/

## Technologies

* aws - AWS S3 is essential to providing our player base with a social platform experience, where users can upload and view images, as well as highlight videos, of their gameplay. To implement AWS S3 in our MERN stack, multer and aws-sdk technologies were used. Multer, a middleware for Express and Node.js, offers ease in handling multipart/form-data, a datatype that videos and images are encoded in when uploaded to our server by users. Amazon’s aws-sdk  package is an essential library to get our user’s files displayed on our website.
* socket.io - Several features in our app employs the use of Socket.io, which enables real-time, bidirectional and event-based communication. For instance, once a player enters a message into his squad channel, an event will be emitted that the backend server and all subscribers will listen for, enacting a callback function to perform an action on the backend or render the new message on each client’s frontend instantaneously.

## Features


* Search Feature - Users are able to specify game, squad size, and ability level in the search bar. The squad forum with refresh and the player can browse squads specific to their search and request to join.
* Accepting Members - The squad leader can click on pending requests to view the user's gaming profile. If they think the player is a good fit, they can accept that player.
* Create Squad - Players can create a squad with a custom game type, squad size, and difficulty level. The squad creator is automatically set as the squad's leader.
* Gaming Profile - Players can upload snapshots from their best games which are stored with aws and displayed on their page.
