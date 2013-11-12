var mongoose = require('mongoose');
var Game = mongoose.model('Game');

var colors = require('colors');
// Colors
// bold, italic, underline, inverse, yellow, cyan,
// white, magenta, green, red, grey, blue, rainbow,
// zebra, random

/*
 * GET /
 */

exports.start = function(req, res){
  console.log(req.query);
  new Game(req.query).save(function(err, game){
    res.send(game);
  });
}