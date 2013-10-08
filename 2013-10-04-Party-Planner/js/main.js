'use strict';

$('document').ready(initialize);

function initialize(){
  $('#add').click(addRow);
  $('table').on('click', '.rsvp', rsvp);
  $('table').on('click', '.nuke', nuke);
}

function nuke(){
  var $button = $(this);
  $button.parent().parent().remove();
}

function rsvp(){
  var $button = $(this);
  var $textbox = $button.prev();
  var text = $textbox.val();
  var items = text.split(', ');
  var name = items[0];
  var food = items[1];

  $button.parent().prev().prev().text(name);
  $button.parent().prev().text(food);

}

function addRow(){
  var $tr = $('<tr>');
  var $name = $('<td>');
  $name.addClass('name');
  var $food = $('<td>');
  $food.addClass('food');
  var $ctrl = $('<td>');
  $ctrl.addClass('ctrl');
  var $nuke = $('<td>');

  var $input = $('<input>');
  $input.attr('type', 'text');


  var $button = $('<input>');
  $button.attr('type', 'button');
  $button.val('RSVP!');
  $button.addClass('rsvp');

  var $button2 = $('<input>');
  $button2.attr('type', 'button');
  $button2.val(' NUKE!');
  $button2.addClass('nuke');


  $ctrl.append($input, $button, $button2);
  $tr.append($name, $food, $ctrl);
  $('table').append($tr);

  $input.focus();
}