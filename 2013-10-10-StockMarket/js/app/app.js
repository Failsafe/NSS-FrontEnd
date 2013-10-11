'use strict';

//Firebase Schema
var Δdb;
var Δbalance;
var Δstocks;

//Local Schema
var db = {};
db.balance = 0;
db.stocks = 0;

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  Δdb = new Firebase('https://stock-market-ae.firebaseio.com/');
  Δbalance = Δdb.child('cashBalance');
  Δstocks = Δdb.child('purchase');
  $('#setCash').click(setCash);
  $('#buy').click(purchase);
  Δbalance.on('value', cashBalanceChanged);
}
function requestQuote(symbol, fn){
  var data = {symbol: symbol};
  $.getJSON('http://dev.markitondemand.com/Api/Quote/jsonp?callback=?', data, fn);
}

function requestQuote(symbol, fn){
  var data = {symbol: symbol};
  $.getJSON('http://dev.markitondemand.com/Api/Quote/jsonp?callback=?', data, fn);
}

function purchase(){
  var symbol = $('#symbol').val();
  var quantity = $('#quantity').val();
  quantity = parseInt(quantity, 10);

  requestQuote(symbol, function(data, textStatus, jqXHR){
    var quote = data.Data;

    if(quote.LastPrice * quantity <= db.balance.cash){
      db.balance.cash -= quote.LastPrice * quantity;
      db.balance.stock += quote.LastPrice * quantity;
      db.balance.total = db.balance.cash + db.balance.stock;
      ΔbalanceTa.set(db.balance);

      var stock = {};
      stock.symbol = symbol;
      stock.purchasePrice = quote.LastPrice;
      stock.quantity = quantity;
      Δstocks.push(stock);
    }

    $('#symbol').val('');
    $('#quantity').val('');
  });
}

function setCash()
{
  db.balance = $('#cash').val();
  Δbalance.set(db.balance);
}

function cashBalanceChanged(snapshot)
{
  db.balance = snapshot.val();
  $('#cashBalance').text(db.balance);
}