var mongoose = require('mongoose');

var User = mongoose.Schema({
  name      : String,
  players   : [{type: mongoose.Schema.Types.ObjectId, ref: 'Player'}],
  createdAt : {type: Date, default: Date.now}
});

mongoose.model('Game', Game);