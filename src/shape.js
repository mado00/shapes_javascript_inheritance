function Shape(sides, color) {
  this.sides = sides;
  this.color = color;
  //console.log(this.color, this.sides, sides, color);

}

Shape.prototype.area = function() {
  return 0;
};

Shape.prototype.perimeter = function() {
  return 0;
};

// Should return an assci version of the shape.  Since the shape
// doesn't make sense here, we return a string.
Shape.prototype.draw = function() {
   return "A shape with " + this.sides + " sides";
};

Shape.prototype.toString = function() {
  return "[Shape sides:" + this.sides + ", color:" + this.color +" ]"
};

Shape.prototype.getRGB = function() {
	//console.log(this.color)
	var result = "";
	if (this.color === "red") {
		result = "rgb(255,0,0)";
	} else if (this.color === "blue") {
		result = "rgb(0,0,255)";
	} else if (this.color === "pink") {
		result = "rgb(255,0,255)";
	} else {
		result = "rgb(0,0,0)";
	}
	return result;

  // Return the rgb value (as a string) for the color you've selected.
  // You can have a preset list of colors that you switch on.
  // return "rgb(0,0,0)";
}

module.exports = Shape;
