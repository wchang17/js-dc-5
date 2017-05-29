/**
 * Distance Formula
 *
 * The purpose of this assignment is to build a program that will calculate the
 * distance between two points, given two sets of x and y coordinates.
 *
 * As a refresher (since it's probably been a while since you've done any
 * geometry!), the distance formula works like this: given a point x1, y1 and
 * another point x2, y2 on a graph, we can calculate the distance between these
 * two points by following these steps:
 *
 * 1. subtract x2 from x1 to get deltaX
 * 2. subtract y2 from y1 to get deltaY
 * 3. square both deltaX and deltaY
 * 4. add the square of deltaX to the square of deltaY
 * 5. take the square root of the sum of step 4
 *
 */

// let x1, x2, y1, y2
// x1 = 1
// y1 = 3
//
// x2 = 10
// y2 = 15
//
// let deltaX = x2 - x1
// let deltaY = y2 - y1
//
// let squareX = Math.pow(deltaX, 2) // deltaX * deltaX
// let squareY = Math.pow(deltaY, 2)
//
// let sum = squareX + squareY
//
// let total = Math.sqrt( sum )
//
// console.log( total )

console.log( 'process.arg', process.argv );

let coord1 = process.argv[2].split(',')
let coord2 = process.argv[3].split(',')

console.log( 'coords', coord1, coord2)

let x1 = parseInt( coord1[0] )
let y1 = parseInt( coord1[1] )

let x2 = parseInt( coord2[0] )
let y2 = parseInt( coord2[1] )

console.log('coord 1', x1, y1)
console.log('coord 2', x2, y2)
