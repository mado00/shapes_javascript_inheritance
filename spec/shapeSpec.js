var Shape = require("../src/shape");
console.log(Shape);

var shape;
shape = new Shape(1,"red");
console.log(shape.color);

describe("Shape", function() {
  beforeEach(function() {
    shape = new Shape(1, "red");
  });

  describe("Area", function() {
    it("should should be 0 for this abstract shape", function() {
      expect(shape.area()).toEqual(0);
    });
  });
  // Write more specs!!
  describe("Perimeter", function() {
    it("should should be 0 for this abstract shape", function() {
      expect(shape.perimeter()).toEqual(0);
    });
  });

  // describe("Draw", function() {
  //   it("should return an assci version of the shape", function() {
  //     expect(shape.draw()).toEqual("A shape with " + this.sides + " sides");
  //   });
  // });

  describe("To string", function() {
    it("should return a string of the shape", function() {
      expect(shape.toString()).toEqual("[Shape sides:1, color:red ]");
    });
  });
  
  describe("RGB", function() {
	it("should return the rgb value (as a string) for the color", function() {
	  expect(shape.getRGB()).toEqual("rgb(255,0,0)");
	});
  });

});
