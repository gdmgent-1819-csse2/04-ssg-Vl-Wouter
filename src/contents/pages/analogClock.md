---
path: /docs/examples/analog-clock
date: 2019-04-14
title: Analog Clock
chapter: 2.1
chapter_title: Examples
chapter_path: /docs/examples
---

This example is a very simple analog clock. It consists of pixels that turn around a central point. To make this example work, we will focus on the function that creates our clock every time the canvas updates:

```js
updateCanvasHandler(event) {
	this.clearData()

	// White point in the middle
	this.data.positions.push(0, 0)
	this.data.colors.push(...this.colors.white)

	const vector = new Vector2(.5, 0)
	this.data.positions.push(vector.x, vector.y)
	this.data.colors.push(...this.colors.red)

	const slots = 12;
	const now = new Date()

	for(let i = 0; i < slots; i++) {
		vector.rot(30)
		this.data.positions.push(vector.x,vector.y)
		this.data.colors.push(...this.colors['blue'])
	}

	const seconds = new Vector2(0, .4)
	seconds.rot(-6 * now.getSeconds())
	this.data.positions.push(seconds.x, seconds.y)
	this.data.colors.push(...this.colors['yellow'])

	const minutes = new Vector2(0, .5)
	minutes.rot(now.getMinutes() * -6)
	this.data.positions.push(minutes.x, minutes.y)
	this.data.colors.push(...this.colors['white'])

	const hours = new Vector2(0, .35)
	hours.rot(now.getHours() * -6)
	this.data.positions.push(hours.x, hours.y)
	this.data.colors.push(...this.colors['magenta'])

	this.drawScene()
}
```

It may look a bit big and confusing now, but lets take it step by step:

## The outline

First, we have to create an outline of our clock. The outline, in this case, consists of a white dot in the center of our two-dimensional space, and 12 dots marking the hours.

First we have to clear our data by calling a simple function:

```js
this.clearData()
```

Then, we will create our white dot in the middle by pushing a position and color to the application data:

```js
this.data.positions.push(0, 0)
this.data.colors.push(...this.colors.white)
```

When that is done, we will make a new vector and use it to create our 12 surrounding dots:

```js
const vector = new Vector2(.5, 0)
this.data.positions.push(vector.x, vector.y)
this.data.colors.push(...this.colors.red)
```

Now that our first dot is set, we will recycle this vector. We will create a loop that rotates the vector by 30 degrees every time and pushes that data to the application

```js
const slots = 12;
const now = new Date()

for(let i = 0; i < slots; i++) {
	vector.rot(30)
	this.data.positions.push(vector.x,vector.y)
	this.data.colors.push(...this.colors['blue'])
}
```

Now the outline of our clock is set, lets take a look at the time.

## The time

To display the time we first need a new vector. We will make this one a little bit shorter than our outline to make sure we know which one is which. Then we need to rotate that vector to display the current time. To do that we will rotate it by a multiplication of our current seconds and -6. This is to make sure it displays correctly.

We will then push the data to our application, and repeat the process for our minutes and hours.

```js
	const seconds = new Vector2(0, .4)
	seconds.rot(-6 * now.getSeconds())
	this.data.positions.push(seconds.x, seconds.y)
	this.data.colors.push(...this.colors['yellow'])

	const minutes = new Vector2(0, .5)
	minutes.rot(now.getMinutes() * -6)
	this.data.positions.push(minutes.x, minutes.y)
	this.data.colors.push(...this.colors['white'])

	const hours = new Vector2(0, .35)
	hours.rot(now.getHours() * -6)
	this.data.positions.push(hours.x, hours.y)
	this.data.colors.push(...this.colors['magenta'])
```

## Scene, Camera, Action

Well, not really, but all that is left to do now is to draw our scene. To keep this example simple, all you need to do is call 1 function:

```js
this.drawScene()
```

*et voila,* you now have a very simple analog clock, built in WebGL2!