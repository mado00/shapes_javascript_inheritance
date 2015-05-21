var Shape = require("./shape");

// Add the constructor for rectangle and the methods that
// need to be overwritten.  Keep in mind that a rectangle
// has more than just 1 side length.
function Rectangle(length, width, color) {
 // TODO: THIS IS JUST A PLACE HOLDER, PLEASE CHANGE.
  Shape.call(this, 4, color);
  this.length = length;
  this.width = width;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
	return this.length * this.width;
}

Rectangle.prototype.perimeter = function() {
	return ((this.length + this.width) * 2);
}

Rectangle.prototype.draw = function() {
	return "A shape with " + this.sides + " sides";
}

Rectangle.prototype.toString = function() {
  return "[Shape sides:" + this.sides + ", color:" + this.color +" ]"
};

module.exports = Rectangle;
