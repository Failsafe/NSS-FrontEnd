'use strict';

var photos = [];
var currentIndex = 0;
var timer = 0;
var page = 1;

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  $('#search').click(searchFlickr);
}



function searchFlickr(){
  var API_KEY = '5619c4672973494012081503ece78c30';
  var PER_PAGE = 3;

  var query = $('#query').val();
  var url = 'http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + API_KEY + '&text=' + query + '&per_page=' + PER_PAGE + '&page=' + page + '&format=json&jsoncallback=?';
  $.getJSON(url, results);

  console.log(url);
}

function results(data){
  photos = data.photos.photo;
  timer = setInterval(createImage, 1000);


}

function createImage(){
  var photo = photos[currentIndex];
  currentIndex++;
  var url = 'url(http://farm'+ photo.farm +'.static.flickr.com/'+ photo.server +'/'+ photo.id +'_'+ photo.secret +'_m.jpg)';
  var $div = $('<div>');
  $div.addClass('photo');
  $div.css('background-image', url);
  $('#photos').prepend($div);

}
