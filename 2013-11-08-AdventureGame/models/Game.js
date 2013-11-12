var mongoose = require('mongoose');

var Game = mongoose.Schema({
  player: String,
  boardSize: Number,
  createdAt: {type: Date, default: Date.now}
});

mongoose.model('Game', Game);