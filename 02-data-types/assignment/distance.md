# Distance Formula

The purpose of this assignment is to build a program that will calculate the distance between two points, given two sets of x and y coordinates.

As a refresher (since it's probably been a while since you've done any geometry!), the distance formula works like this: given a point x1, y1 and another point x2, y2 on a graph, we can calculate the distance between these two points by following these steps:

1. subtract x2 from x1 to get deltaX
2. subtract y2 from y1 to get deltaY
3. square both deltaX and deltaY
4. add the square of deltaX to the square of deltaY
5. get the square root of the sum from step 4

If you're a visual person, it looks like this:

![image](http://www.purplemath.com/modules/xyplane/dist07b.gif)

## Exercise:
Create a `distance.js` file, so that when run with `node distance.js` it will return the distance between point 1 at [1, 3] and point 2 at [10, 15].

## Bonus:
To take user input in a command line program like `distance.js`, we use node's `process.argv`, which is an array of arguments passed into the program from teh command line. Modify your `distance.js` so that it can take two points from the command line and return the distance between them.

Test it with `node distance.js 1,3 10,15`

*hint: maybe check the type of the arguments when they're in the `process.argv` array . . . *

*hint 2: I wonder what happens when we try to get the index of a string, like we get the index of an array . . . *
