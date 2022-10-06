#!/usr/bin/node
const Square = require('./5-square');

const s1 = new Square(4);
s1.print();
quare.js' */
	const Rectangle = require('./5-square');

class Square extends Rectangle {
	  constructor (size) {
		      super(size, size);
		    }

	  charPrint (c) {
		      if (c === undefined) {
			            c = 'X';
			          }
		      for (let i = 0; i < this.width; i++) {
			            console.log(c.repeat(this.width));
			          }
		    }
}

module.exports = Square;1.double();
s1.print();
