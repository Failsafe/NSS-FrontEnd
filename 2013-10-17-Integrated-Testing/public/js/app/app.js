'use strict';

// Firebase Schema


// Local Schema (defined in keys.js)

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  $('#calculate').click(calculate);
}

function calculate()
{
  var op1 = getValue('#op1');
  var op2 = getValue('#op2');
  var operator = getValue('#operator');
  var computation = op1 + operator + op2;
  var result = eval(computation);
  htmlUpdateResult(result);
}

function htmlUpdateResult(result){
  $('#result').text(result);
}

function getValue(selector, fn){
  var value = $(selector).val();
  value = value.trim();
  $(selector).val('');

  if(fn){
    value = fn(value);
  }

  return value;
}