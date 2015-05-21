var Square = require("../src/square");

var square;

describe("Square", function() {
  beforeEach(function() {
    square = new Square(2, "red");
  });

  describe("Area", function() {
    it("should be 4 for a square with side length 2", function() {
      expect(square.area()).toEqual(4);
    });
  });

  describe("Perimeter", function() {
    it("should be 8 for a square with side length 2", function() {
      expect(square.perimeter()).toEqual(8);
    });
  });

  // Write more specs!!

  // describe("Draw", function() {
  //   it("should return an assci version of the shape", function() {
  //     expect(square.draw()).toEqual("A shape with " + this.sides + " sides");
  //   });
  // });

  describe("To string", function() {
    it("should return a string of the shape", function() {
      expect(square.toString()).toEqual("[Square sides:4, color:red]");  //, sidelength: 4
    });
  });
  
  describe("RGB", function() {
    it("should return the rgb value (as a string) for the color", function() {
      expect(square.getRGB()).toEqual("rgb(255,0,0)");
    });
  });


});
