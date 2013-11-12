var moment = require('moment');
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
/*
 * GET /posts /
 */
exports.index = function(req, res){
  res.render('posts/index', {title: 'Express'});
};
/*
 * GET /posts/new
 */
exports.new = function(req, res){
var date = moment().format("MMM Do YY, h:mm a");
  res.render('posts/new', {title: 'Express', date: date});
};

/*
 * POST /posts/create
 */
exports.create = function(req, res){
  console.log('before save');
  console.log(req.body);
  new Post (req.body).save(function(err, post, count){
    console.log('after save');
    console.log('post');
    res.redirect('/posts');
});

/*
 * POST /posts/edit
 */
exports.edit = function(req, res){
  res.render('posts/edit', {title: 'Express'});
};

/*
 * POST /posts/:id
 */
exports.update = function(req, res){
  res.redirect('posts/' + req.params.id)
};

/*
 * GET /posts/:id
 */
exports.show = function(req, res){
  res.render('posts/show', {title: 'Express'});
};
/*
 * DELETE /posts/:id
 */
exports.delete = function(req, res){
  res.redirect('/posts');
};


