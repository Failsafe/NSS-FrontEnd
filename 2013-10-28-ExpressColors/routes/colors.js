exports.index = function(req, res){
  var colors = ['blue', 'green', 'red'];
  res.render('colors/index', {title: 'Colors Page', colors: colors});
};

exports.new = function(req, res){
  var colors = ['blue', 'green', 'red'];
  res.render('colors/new');
};

exports.create = function(req, res){

};

