# Data Types
Data types are the most atomic unit of any program. Javascript has many basic data types, which we cover in this lesson, and a couple of complex data types. We'll be introduced to Arrays at the end of the class as our first complex data type.

## Learning Objectives
- Describe the concept of a "data type" and how it relates to variables.
- Declare, assign to, and manipulate data stored in a variable.
- Create arrays and access values in them.
-
## Materials
- [Slides](https://ga-students.github.io/js-dc-5/02-data-types)
- [Lesson Notes](02-data-types/lesson_plan.md)
- [Lesson](https://www.youtube.com/watch?v=_cZPOUf5Ddg)

## Assignment
There are two short activities due for next class:
1. the activity in `decoder.js`
2. the activity described below

### Distance Formula

The purpose of this assignment is to build a program that will calculate the distance between two points, given two sets of x and y coordinates.

As a refresher (since it's probably been a while since you've done any geometry!), the distance formula works like this: given a point x1, y1 and another point x2, y2 on a graph, we can calculate the distance between these two points by following these steps:

1. subtract x2 from x1 to get deltaX
2. subtract y2 from y1 to get deltaY
3. square both deltaX and deltaY
4. add the square of deltaX to the square of deltaY
5. take the square root of the sum of step 4

If you're a visual person, it looks like [this](http://www.purplemath.com/modules/distform.htm).

### Exercise:
Create a `distance.js` file, so that when run with `node distance.js` it will return the distance between point 1 at [1, 3] and point 2 at [10, 15].

### Bonus:
To take user input in a command line program like `distance.js`, we use node's `process.argv`, which is an array of arguments passed into the program from the command line. Modify your `distance.js` so that it can take two points from the command line and return the distance between them.

Test it with `node distance.js 1,3 10,15`

*hint: maybe check the `typeof` for arguments when they're in the `process.argv` array . . .*

*hint 2: I wonder if there's a way to split a string into multiple parts . . .*

### Extra
1. Read more about truthy and falsey in JS [here](https://dorey.github.io/JavaScript-Equality-Table/)
2. [Variables](https://www.sitepoint.com/preparing-ecmascript-6-let-const/)
3. [String Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
4. [Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
5. [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
6. [Template Strings](https://developers.google.com/web/updates/2015/01/ES6-Template-Strings)
7. [String Methods](https://www.sitepoint.com/preparing-ecmascript-6-new-string-methods/) (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
8. [Number Methods](https://www.sitepoint.com/preparing-ecmascript-6-new-number-methods/)
