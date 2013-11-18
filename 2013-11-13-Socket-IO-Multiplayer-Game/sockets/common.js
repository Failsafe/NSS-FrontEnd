var mongoose = require('mongoose');
var Game = mongoose.model('Game');
var Player = mongoose.model('Player');

exports.connection = function(socket){
  socket.emit('connected', {status: 'connected'});
  socket.on('disconnect', socketDisconnect);
  socket.on('startgame', socketStartGame);
};

function socketDisconnect(){
}

function socketStartGame(data){
  console.log('Received a start game message from a browser');
  console.log(data);

  game.findOne({name: data.name}, function(err, game){
  });
}