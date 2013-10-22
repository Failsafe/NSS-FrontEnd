'use strict';

module('Filter Testing', { setup: setupTest });

function setupTest(){
  initialize(null, true);
}

test('Filter Negative Rows', function(){
  expect(2);

  $('#op1').val('3');
  $('#op2').val('2');
  $('#operator').val('+');
  $('#calculate').trigger('click');

  $('#op1').val('7');
  $('#op2').val('8');
  $('#operator').val('*');
  $('#calculate').trigger('click');

  $('#op1').val('3');
  $('#op2').val('30');
  $('#operator').val('-');
  $('#calculate').trigger('click');

  $('#filter-negative').trigger('click');

  deepEqual($('#history > li').length, 2, 'should be 2 rows left');
  $('#sum').trigger('click');
  deepEqual($('input#result').val(), '61', 'sum of 2 remaining rows should be 61');
});

test('Filter Positive Rows', function(){
  expect(2);

  $('#op1').val('3');
  $('#op2').val('2');
  $('#operator').val('+');
  $('#calculate').trigger('click');

  $('#op1').val('7');
  $('#op2').val('8');
  $('#operator').val('*');
  $('#calculate').trigger('click');

  $('#op1').val('3');
  $('#op2').val('30');
  $('#operator').val('-');
  $('#calculate').trigger('click');

  $('#filter-positive').trigger('click');

  deepEqual($('#history > li').length, 1, 'should be 1 row left');
  $('#sum').trigger('click');
  deepEqual($('input#result').val(), '-27', 'sum of 1 remaining row should be -27');
});