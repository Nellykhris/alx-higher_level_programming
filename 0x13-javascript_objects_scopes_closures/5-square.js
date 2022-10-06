#!/usr/bin/node
/* Write a class Rectangle that defines a square and inherist from Rectangle of
 * 5-square.js */
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

module.exports = Square;
module.exports = Square;
