$(document).ready(initialize);

function initialize()
{
  $('#convert').click(conversion);
}

function convert_to_pig_latin(string)
{
  return string.slice(1) + string[0] + 'a';
}

function conversion()
{
  var original = $('#original').val();
  var converted = convert_to_pig_latin(original);
  $('#converted').val(converted);
}

function pig_reverse(string)
{
  var orig_words = string.split(", ").reverse();
  for (var i =0; i < orig_words.length; i++) {
   0; orig_words < [i]
  };


}