---
path: /docs/classes/vector-classes
date: 2019-04-14
title: Vector Classes
chapter: 1.1
chapter_title: Classes
chapter_path: docs/classes
---

The first class we will build is the vector class. A vector can be described as a point in space, depending on dimensions.  
These vectors are the basis of our example, but they will also need the help of the [Matrix](/docs/classes/matrix-classes) to function properly.

## The two-dimensional vector

This is the most basic vector. It is a vector put in a two-dimensional space. The vector only has two coordinates: x and y. These have to be filled in in order to make this work.  
Let's start by creating the class and a constructor:

```js
export default class Vector2 {
	constructor(xpos, ypos) {
		this.x = xpos
		this.y = ypos
	}

	...
}
```

The vector class also requires functions to make it do what we want it to do.

## Functions

### Basic vector operations

The vector has a few basic operations like [add()](#add-function), [sub()](#sub-function) and [scalar()](#scalar-function)

#### <a name="add-function"></a> add()

The add function allows us to add the coordinates of 2 vectors. Exactly like the name of the function says

```js
export default class Vector2 {
	constructor(xpos, ypos) {...}

	add(secondVector) {
		this.x += secondVector.x
		this.y += secondVector.y
	}
}
```

What happens in this function is the following. We'll call this function with a second vector. The function will then add the coordinates of the second vector to the first vector, to move that first vector to a different place in our two-dimensional space.

#### <a name="sub-function"></a> sub()

The sub() function is built similarily to the add() function, but it's function is the exact opposite. Instead of adding a second vector to it to move the original vector, it will subtract the second vector from the original one.

```js
export default class Vector2 {
	constructor(xpos, ypos) {...}

	...

	sub(secondVector) {
		this.x -= secondVector.x
		this.y -= secondVector.y
	}

}
```

#### <a name="scalar-function"></a> scalar()

Scalar also is a basic function for our vector class. It allows us to multiply the coordinates of the vector by any given amount.  
The construction of this function is similar to the two mentioned above, but instead of a second vector, we will pass an integer value to this.

```js
export default class Vector2 {
	constructor(xpos, ypos) {...}

	...

	scalar(scale) {
		this.x *= scale
		this.y *= scale
	}
}
```

### Advanced vector operations

These are the more complex operations within the vector. These operations are [norm()](#norm-function), [dot()](#dot-function) and [rot()](#rot-function).

#### <a name="norm-function"></a> norm()

The norm function calculates and returns the length of a vector using both the x and y position of said vector.

```js
export default class Vector2 {
	constructor(xpos, ypos) {...}

	...

	norm() {
		return Math.sqrt(this.x ** 2 + this.y ** 2)
	}
}
```

It looks a bit more complicated than it actually is. What the function does is take the square number of both the x and y coordinate, add these together and take the square root of that number. The result is the length of the vector.

#### <a name="dot-function"></a> dot()

This function will calculate the dot product of 2 vectors. It multiplies the x coordinate of the first vector with the x coordinate of the second vector, and does the same for the y coordinate. It then returns the sum of the multiplied coordinates as a result.

```js
export default class Vector2 {
	constructor(xpos, ypos) {...}

	...

	dot(secondVector) {
		return this.x * secondVector.x + this.y * secondVector.y
	}
}
```

#### <a name="rot-function"></a> rot()

**Warning:** This function makes use of the Matrix2 class, which hasn't been made yet. No worries, if you keep following these docs, everything will work fine.

The rot function will, as the name suggests, rotate a vector around the center of the defined space. the degrees you pass onto it will be the amount of **anticlockwise** rotation given to the vector.

```js
export default class Vector2 {
	constructor(xpos, ypos) {...}

	...

	rot(α) {
		const matrix = new Matrix2([this.x, 0, this.y, 0])
		matrix.rot(α)
		this.x = matrix.elements[0]
		this.y = matrix.elements[2]
	}
}
```

### A quick overview

Here's a last look at the vector class:

```js
/** Class representing a two-dimensional vector. */
export default class Vector2 {
    /**
     * Create a vector.
     * @param {Number} x - The horizontal vector component.
     * @param {Number} y - The vertical vector component.
     */
    constructor(x, y) {
        this.x = Number(x) || 0
        this.y = Number(y) || 0
    }

    /**
     * Calculate the length of the vector.
     * @return {Number} The length of the vector
     */
    norm() {
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    }

    /**
     * Addition of a vector to the current vector.
     * @param {Vector2} secondVector - The second vector.
     */
    add(secondVector) {
        this.x += secondVector.x
        this.y += secondVector.y
    }

    /**
     * Subtraction of a vector from the current vector.
     * @param {Vector2} secondVector - The second vector.
     */
    sub(secondVector) {
        this.x -= secondVector.x
        this.y -= secondVector.y
    }

    /**
     * Scalar multiplication. Multiplies a vector by a scalar.
     * @param {Number} scale - The scalar value.
     */
    scalar(scale) {
        this.x *= scale
        this.y *= scale
    }

    /**
     * Calculate the dot product of the current vector and another vector.
     * @param {Vector2} secondVector - The second vector.
     * @return {Number} the dot product of the wzo
     */
    dot(secondVector) {
        return this.x * secondVector.x + this.y * secondVector.y
    }

    /**
     * Rotate the vector around the origin.
     * @param {Number} α - The anticlockwise angle in degrees.
     */
    rot(α) {
        const matrix = new Matrix2([this.x, 0, this.y, 0])
        matrix.rot(α)
        this.x = matrix.elements[0]
        this.y = matrix.elements[2]
    }
}
```