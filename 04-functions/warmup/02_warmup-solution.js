/*
Warm up

2,520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*/

let done = false // this will be the condition for our while loop
let threshold = 10 // we want to check every number less than this number
let magicNumber = threshold + 1 // this will be our starting number

// handy letiable naming
while ( !done ) {
  // create a helper variable
  let isMagicNumber = true

  // loop from 1 to our threshold (10 or 20)
  for (let i = 1; i <= threshold; i++) {

    if ( magicNumber % i !== 0 ) {
      // if we get some number other than 0,
      // we'll set isMagicNumber to false
      // and then break from our loop
      isMagicNumber = false
      break
    }

  }

  // if after all that, isMagicNumber is still true
  // then we must have our winner!
  if ( isMagicNumber ) {
    // set done to true to stop our loop and log our number
    done = true
    console.log( magicNumber )
  }

  // if isMagicNumber is false, then it's not our magic number
  // and we have to keep going - increment magic number to
  // try the next one
  magicNumber++

}
