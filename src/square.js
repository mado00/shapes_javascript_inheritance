var Shape = require("./shape");
// child class of shape, square
function Square(sideLength, color) {
  Shape.call(this, 4, color);
  this.sideLength = sideLength;
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

Square.prototype.area = function() {
	return this.sideLength * 2;
}

Square.prototype.perimeter = function() {
	return this.sideLength * 4;
}

Square.prototype.draw = function() {
	return "A shape with " + this.sides + " sides";
}

Square.prototype.toString = function() {
  return "[Square sides:" + this.sides + ", color:" + this.color + "]";
  		 //" sideLength: " + this.sideLength + 
};
// TODO: Implement area, perimeter, draw and toString for Square.
// DO NOT reimplement getRGB.  That should only have to be done once.

module.exports = Square;
