const mongoose = require('mongoose');
const util = require('util');
const config = require('./config/config');
const app = require('./config/express');
const debug = require('debug')('express-mongoose-es6-rest-api:index');

// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign

// plugin bluebird promise in mongoose
mongoose.Promise = Promise;

// connect to mongo db
const mongoUri = config.mongo.host;
mongoose.connect(mongoUri, { useNewUrlParser: true });
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});

// print mongoose logs in dev env
if (config.mongooseDebug) {
  mongoose.set('debug', (collectionName, method, query, doc) => {
    debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
  });
}

// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
if (!module.parent) {
  var server = app.listen(config.port, () => {
    console.info(`Server started on port ${config.port} (${config.env})`); // eslint-disable-line no-console
  });
}

const io = require('socket.io')(server);

io.on('connection', (socket) => {
  var room = ""

  // let adminInform = {
  //   from: 'Admin',
  //   text: 'Welcome to Westailor!',
  //   createAt: new Date().getTime()
  // };

  // socket.broadcast.emit('newMessage', generateMessage(adminInform));

  socket.on('joinRoom', (roomInfo) => {
    room = roomInfo;
    socket.join(roomInfo);
  })

  socket.on('receiveMessage', (msg) => {
    if (Object.keys(socket.rooms).length == 1) {
      socket.to(socket.rooms[socket.id]).emit('sendMessage', generateMessage(msg));
    }
    else {
      socket.to(msg.room).emit('sendMessage', generateMessage(msg));
    }
  });

  socket.on('disconnect', () => {
    // socket.to(room).emit('sendMessage', generateMessage("Admin", "User " + socket.id + " leave the room"));
  });
});

module.exports = app;