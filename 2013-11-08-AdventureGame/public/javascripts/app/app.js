$(document).ready(initialize);

function initialize(){
  $(document).foundation();

  $('form#gameForm').on('submit', startGame);
}

function startGame(e) {
  var url = $(this).attr('action') + '?player=' + $('input[name="player"]').val() + '&boardSize=' + $('input[name="boardSize"]').val();
  sendGenericAjaxRequest(url, {}, 'post', null, e, function(data, status, jqXHR){
    console.log(data);
    buildGameBoard(data);
  });
}

function buildGameBoard(game){
  var gameSquares = game.boardSize * game.boardSize;
  $('#board').attr('data-game', game._id);
  for (var i=0; i<gameSquares;i++){
    $square = $('<div>');
    $square.addClass('square');
    $square.attr('data-position', i);
    $square.css('width', 100 / game.boardSize + '%');
    $square.css('height', 100 / game.boardSize + '%');

    $('#board').append($square);
  }
}

// ----------------------------------------------------------------------------------//

function sendGenericAjaxRequest(url, data, verb, altVerb, event, successFn){
  var options = {};
  options.url = url;
  options.type = verb;
  options.data = data;
  options.success = successFn;
  options.error = function(jqXHR, status, error){console.log(error);};

  if(altVerb) options.data._method = altVerb;
  $.ajax(options);
  if(event) event.preventDefault();
}