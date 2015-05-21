var Rectangle = require("../src/rectangle");

var rectangle;

describe("Rectangle", function() {
  beforeEach(function() {
    rectangle = new Rectangle(4, 6, "pink");  
  });

  describe("Area", function() {
    it("should be 24 for a rectangle with sides of 4 and 6", function() {
      expect(rectangle.area()).toEqual(24);
    });
  });

  describe("Perimeter", function() {
    it("should be 20 for a square with sides of 4 and 6", function() {
      expect(rectangle.perimeter()).toEqual(20);
    });
  });

  // describe("Draw", function() {
  //   it("should return an assci version of the shape", function() {
  //     expect(rectangle.draw()).toEqual("A shape with " + this.sides + " sides");
  //   });
  // });

  describe("To string", function() {
    it("should return a string of the shape", function() {
      expect(rectangle.toString()).toEqual("[Shape sides:4, color:pink ]");
    });
  });

    describe("RGB", function() {
    it("should return the rgb value (as a string) for the color", function() {
      expect(rectangle.getRGB()).toEqual("rgb(255,0,255)");
    });
  });

});
