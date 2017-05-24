/*

Write a function called average that calculates and returns the
average of two numbers passed in as parameters. Save your return value
to a variable and `console.log` it!

*/

// function average(num1, num2) {
// 	return (num1+num2)/2

// }

// let myNum = average(9, 21)

// console.log(myNum)


/*

Write a function that calculates and returns the distance between two
points. Your function should take two arrays as paramaters and return
the distance between the two points. Save your return value to a
variable and `console.log` it!

*/

function distance( ...nums) {
let x = nums[2] - nums[0]
let y = nums[3] - nums[1]
return Math.sqrt( Math.pow(x, 2) + Math.pow(y, 2) )
}

let myDistance = distance(1,3,10,15)
console.log(myDistance)