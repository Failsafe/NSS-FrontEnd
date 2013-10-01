$(document).ready(initialize);

function initialize(){
  $('#add').click(conversion);

}

function original(string)
{
   return string.slice(1) + string[0] + 'a';

}

function conversion() {
  var string = $('#original').val();
  var new_string = original(string);
  $('#pig_latin').text(new_string);
}