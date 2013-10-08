'use strict';

$(document).ready(initialize);

function initialize(){
  $('#add_color').click(addColor);
  //$('.box').click(boxClicked);
  //$('parent_selector').on('name of event', 'child selector', name_of_function)
  $('#colors').on('click', '.box', colorClicked);
  $('#add_box').click(addBoxes);
  $('#boxes').on('mouseover', '.boxes', canvasHover);
}
function canvasHover()
  {
    var $div = $(this);
    var brushColor = $('#brush').css('background-color');
    $div.css('background-color', brushColor);
  }

function addBoxes()
{
  var amountOfBoxes = $('#amount').val();
  amountOfBoxes = parseInt(amountOfBoxes, 10);
  for( var i = 0; i < amountOfBoxes; i++){
    var $div = $('<div>');
    $div.addClass('boxes');
    $('#boxes').prepend($div);
  }

}
function colorClicked()
{
  var $box = $(this);
  var color = $box.css('background-color');
  $('#brush').css('background-color', color);
}

function addColor(){
  var color = $('#color').val();
  var $div = $('<div>');
  $div.addClass('box');
  $div.css('background-color', color);

  $('#colors').prepend($div);
  clearInputAndFocus();
}

function clearInputAndFocus(){
  $('#color').val('');
  $('#color').focus();
}
