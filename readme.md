# Canvas Crawler

Let's learn a bit about HTML5's canvas by making a super basic dungeon crawler!

There's a bit of starter code, so you can jump right into it.

## Getting Started

The provided template contains all the files, images, and text content needed to create the page.

***IF YOU HAVE NODE INSTALLED ALREADY and would like to use browsersync***

* Run `npm install` to install dependencies
* Run `npm start` to start the BrowserSync server

***OTHERWISE***

Ignore that mumbo jumbo and just dive in! The only files you'll need to worry about are: `index.html`, `img` folder, `css` folder.

## Goals

* Use HTML5 Canvas to make an "ogre" (this can just be a box) and a "hero" (this can also just be a box)
* Be able to move the Hero using key bindings (either WASD or the arrow keys)
* Detect a collision between the hero and the ogre
* Use a single external CSS stylesheet to style your game in the browser

## Instructions

### Look at what you have

Take a look at the code that exists in this repository. What is the css doing? How is it doing it? How would you change the coloring?
Look at the images in the `/img` folder. How could you use those to spruce up your game?
Check that everything is linked up in the `index.html`. Is there anything else in there that is non-standard?

### Get Started

Look at the `index.html` again. What elements will we need to access?
> HINT: Why do we use `id` in HTML over `class`?

In your `js/main.js` put a `console.log` and run your index.html in your browser to check that everything is linked up correctly. Once you've tested that, make a reference to a couple of things in the HTML that we'll need to access consistently.
* `<h2 id="movement">`: This will display the x and y coordinates of our hero so we can see what's going on.
```javascript
let movementDisplay = document.getElementById('movement')
```
* `<canvas id="game">`: This is the main piece of our game; it's where we will be rendering our game an what we will be updating.
```javascript
let game = document.getElementById('game')
```

### To give you some context...

In order to make the canvas do things, you have to give **context**. We do this by assigning getting the context from the canvas element and assigning it to a variable. The syntax is `canvasElement.getContext('2d')`. There is no 3d context yet, but what the 2d context does is return a bunch of neat functionality that we can do to our canvas.
> "`getContext('2d') returns an object that provides methods and properties for drawing and manipulating images and graphics on a canvas element in a document. A context object includes information about colors, line widths, fonts, and other graphic parameters that can be drawn on a canvas."

### Let's start drawing!

In order to test if our canvas is working, let's draw a rectangle. 
```javascript
// Fill Color
ctx.fillStyle = 'white';
// Line Color
ctx.strokeStyle = 'red';
// Line width
ctx.lineWidth = 5;


ctx.fillRect(10, 10, 100, 100);
ctx.strokeRect(10, 10, 100, 100);
```
When you refresh your page you should see a rectangle. 
But WOAH! Why is the rectangle so big?! That's not 100px big! Canvas auto sets its dimensions to 180px by 300px unless otherwise specified. If the container that it is in is larger than that, it'll stretch like a small image forced into a larger space. So how do we fix this? We can either hard-code the width and height into the HTML or we can do it programatically. Either way, we want it reflected in the HTML, so **we can't just assign those variables in css and have it work the way we want**.

You'll notice the CSS dimensions for the game container are not in `px`, but our canvas is going to want to be. We can get around this discrepency by using `getComputedStyle(element)` which returns an object of all the potential styles and attributes of a specific element. We want to also use `element.setAttribute([attribute: string], [value: string])` to set the `height` and `width` attributes to the return value of `getComputedStyle`.

<details><summary>Stuck?</summary>
<p>

```javascript
game.setAttribute("height", getComputedStyle(game)["height"])
game.setAttribute("width", getComputedStyle(game)["width"])
```

</p>
</details>

## Additional Resources

* [Free Sprite images (Remember to credit your sources!)](https://opengameart.org/)

---

## Licensing
1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.