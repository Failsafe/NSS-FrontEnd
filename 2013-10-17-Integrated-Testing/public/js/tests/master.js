'use strict';

module('Integration Testing', {setup: setupTest, teardown: teardownTest});

function setupTest(){
}

function teardownTest(){
}

asyncTest('Paper Trail', function(){
  expect(1);

  $('#op1').val('3');
  $('#op2').val('2');
  $('#operator').val('+');
  $('#calculate').trigger('click');

  $('#op1').val('7');
  $('#op2').val('8');
  $('#operator').val('*');


  $('#history').on('DOMChanged', function (){
    deepEqual($('#history> li').length, 2, 'should be 2 LIs');
    start();
  });

});
