var a = 0;
var b = 0;
var a_sqrd = 0;
var b_sqrd = 0;
var c = 0;


var point1 = {};
point1.x = parseInt(prompt('X'));
point1.y = parseInt(prompt('y'));

var point2 = {};
point2.x = parseInt(prompt('X'));
point2.y = parseInt(prompt('y'));

a = point1.y - point2.y;
b = point1.x - point2.x;

a_sqrd = Math.pow(a, 2);
b_sqrd = Math.pow(b, 2);

c = Math.sqrt(a_sqrd + b_sqrd);


