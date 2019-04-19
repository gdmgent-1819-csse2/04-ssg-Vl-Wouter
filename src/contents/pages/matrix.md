---
path: /docs/classes/matrix-classes
date: 2019-04-14
title: Matrix Classes
chapter: 1.2
chapter_title: Classes
chapter_path: docs/classes
---

The matrix class is a second important class for this example. Especially the classes rotation function, which we will take a look at later in this document. We have to start at the beginning first.

## The two-dimensional Matrix

Unlike in the movies, this matrix is actually real. We will use it to perform some mathematical functions with either vectors or just numbers. The two-dimensional matrix is also known as a 2x2 matrix.  
Just like the vector, this class needs a constructor:

```js
export default class Matrix2 {
	constructor(elements) {
		this.elements = elements || [0, 0, 0, 0]
	}
}
```

You can see we added a default value for the elements in case none are passed to the function. This is to prevent any errors if you forget to give it any values.

**Notice:** You can now go back to your Vector2 class, and import the Matrix2 class:

Vector2.js

```js
import Matrix2 from 'path/to/Matrix2.js'
```

Just like the vector class, the matrix needs functions to work:

## Matrix operations

### Basic operations

The Matrix2 class has some basic operations to do simple mathematical operations. These are [add()](#add-function) and [sub()](#sub-function).

#### <a name="add-function"></a> add()

The add operation in a matrix is similar to the one in the vector. You take one value and add another value to it, repeat for all values.

```js
export default class Matrix2 {
	constructor(elements) {...}

	add(secondMatrix) {
		const firstMatrix = this.elements
		this.elements = [
				firstMatrix[0] + secondMatrix[0], firstMatrix[1] + secondMatrix[1],
				firstMatrix[2] + secondMatrix[2], firstMatrix[3] + secondMatrix[3],
		]
	}
}
```

#### <a name="sub-function"></a> sub()

Just like the add operation, sub() does the same thing. But instead of adding values, your subtracting them. Sounds easy enough.

```js
export default class Matrix2 {
	constructor(elements) {...}

	...

	sub(secondMatrix) {
		const firstMatrix = this.elements
		this.elements = [
				firstMatrix[0] - secondMatrix[0], firstMatrix[1] - secondMatrix[1],
				firstMatrix[2] - secondMatrix[2], firstMatrix[3] - secondMatrix[3],
		]
	}
}
```

### Advanced operations

There are also some more complex operations this matrix can do. These are [mul()](#mul-function) and [rot()](#rot-function). The last one is the one we'll need in our vector class.

#### <a name="mul-function"></a> mul()

Multiplying one matrix with another is a bit complex if you have never done it before. Essentially what you do is for every value, you multiply the row it is in by its column in the second matrix. If you're still confused, it might be best to read up on it: [Matrix Multiplication](https://www.mathsisfun.com/algebra/matrix-multiplying.html)

```js
export default class Matrix2 {
	constructor(elements) {...}

	...

	mul(secondMatrix) {
		const firstMatrix = this.elements
		const c = []
		c[0] = firstMatrix[0] * secondMatrix[0] + firstMatrix[1] * secondMatrix[2]
		c[1] = firstMatrix[0] * secondMatrix[1] + firstMatrix[1] * secondMatrix[3]
		c[2] = firstMatrix[2] * secondMatrix[0] + firstMatrix[3] * secondMatrix[2]
		c[3] = firstMatrix[2] * secondMatrix[1] + firstMatrix[3] * secondMatrix[3]

		this.elements = c
	}
}
```

#### <a name="rot-function"></a> rot()

This is the one we need the most for our example. The rotation allows us to rotate anything in our two-dimensional space. In terms of code, it is actually an extension of the mutliplication.

```js
export default class Matrix2 {
	constructor(elements) {...}

	...

	rot(α) {
		α *= Math.PI / 180
		const cos = Math.cos(α)
		const sin = Math.sin(α)
		const firstMatrix = this.elements
		const r = [
				cos, -sin,
				sin, cos,
		]
		this.elements = r
		this.mul(firstMatrix);
	}
}
```

## A quick overview

```js
    
/** Class representing a 2×2 matrix. */
export default class Matrix2 {
    /**
     * Create a 2×2 matrix.
     * @param {Array} elements - The matrix elements.
     */
    constructor(elements) {
        this.elements = elements || [
            0, 0,
            0, 0,
        ]
    }

    /**
     * Addition of a matrix to the current matrix.
     * @param {Array} secondMatrix - The second matrix.
     */
    add(secondMatrix) {
        const firstMatrix = this.elements
        this.elements = [
            firstMatrix[0] + secondMatrix[0], firstMatrix[1] + secondMatrix[1],
            firstMatrix[2] + secondMatrix[2], firstMatrix[3] + secondMatrix[3],
        ]
    }

    /**
     * Subtraction of a matrix from the current matrix.
     * @param {Array} secondMatrix - The second matrix.
     */
    sub(secondMatrix) {
        const firstMatrix = this.elements
        this.elements = [
            firstMatrix[0] - secondMatrix[0], firstMatrix[1] - secondMatrix[1],
            firstMatrix[2] - secondMatrix[2], firstMatrix[3] - secondMatrix[3],
        ]
    }

    /**
     * Multiplication of the current matrix by another matrix.
     * @param {Array} secondMatrix - The second matrix.
     */
    mul(secondMatrix) {
        const firstMatrix = this.elements
        const c = []
        c[0] = firstMatrix[0] * secondMatrix[0] + firstMatrix[1] * secondMatrix[2]
        c[1] = firstMatrix[0] * secondMatrix[1] + firstMatrix[1] * secondMatrix[3]
        c[2] = firstMatrix[2] * secondMatrix[0] + firstMatrix[3] * secondMatrix[2]
        c[3] = firstMatrix[2] * secondMatrix[1] + firstMatrix[3] * secondMatrix[3]

        this.elements = c
    }

    /**
     * Rotate the matrix around the origin.
     * @param {Number} α - The anticlockwise angle in degrees.
     */
    rot(α) {
        α *= Math.PI / 180
        const cos = Math.cos(α)
        const sin = Math.sin(α)
        const firstMatrix = this.elements
        const r = [
            cos, -sin,
            sin, cos,
        ]
        this.elements = r
        this.mul(firstMatrix);
    }
}
```