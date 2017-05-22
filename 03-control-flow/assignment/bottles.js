
for(let i =10; i >= 0; i--) {
		if ( i === 0 ){
			console.log( "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall." )
		} else if ( i === 1 ) {
			console.log(i + " bottle of beer on the wall," + i + " bottle of beer")
			console.log("Take one down, pass it around. No more bottles of beer on the wall")
		}
		else{
		console.log(i + " bottles of beer on the wall," + i + " bottles of beer")
		console.log("Take one down, pass it around. " + (i-1) + " bottles of beer on the wall.")
	}
}
