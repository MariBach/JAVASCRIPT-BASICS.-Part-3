/* Write a JavaScript program to calculate the area and perimeter of a rectangle. 
Rectangle should be an object with
properties width and height and methods getArea() and getPerimeter(); */

let rectangle = {
    width: 20,
    height: 15,
    getArea: function () { return this.width * this.height; },
    getPerimeter: function () { return this.width * 2 + this.height * 2; }
};
console.log(`Rectangle Area is equel to ${rectangle.getArea()}`);
console.log(`Rectangle Perimeter is equel to ${rectangle.getPerimeter()}`);