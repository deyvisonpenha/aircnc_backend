const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const socketio = require('socket.io');
const http = require('http');

require('dotenv').config();
const cloudinaryConfig = require('./config/Storage');

const app = express();
const server = http.Server(app);
const io = socketio(server);

mongoose.connect(process.env.REACT_APP_MongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const connetedUSers = {}; //precisa ser alterado para redis

io.on('connection', socket => {
  const { user_id } = socket.handshake.query;

  connetedUSers[user_id] = socket.id;
});

app.use((req, res, next) => {
  req.io = io;
  req.connetedUSers = connetedUSers;

  return next();
})


app.use(cors());

app.use(express.json());
app.use(cloudinaryConfig);
app.use(routes);

server.listen(process.env.PORT || 3333);