 /*
  * First Promise
  *
  * We're going to create a `wait` function that will take a time in miliseconds
  * and return a promise. We can then pass a `resolve` function to our promise.
  * 
  */

const wait = function(time) {
	return new Promise(function(resolve, reject) {
		return setTimeout( resolve, time )
	})
}

wait(3000)
	.then(() =>{console.log('hello world') })