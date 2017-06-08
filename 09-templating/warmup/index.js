/*

Index.html contains a ul which has been formatted to be a gallery.

A gallery is a row of images that rotate, showing each one for a set period of time before showing the next image. After the last image, the gallery starts over.

Follow along, reading each set of instructions carefully to build out this gallery.

*/



/*

Step 1:
Using JavaScript, get the 'js-gallery' list and save it to a variable. Then pull an array of the 'js-gallery-item' elements from your 'js-gallery'.

Thinking back to last class, can we use one of the getElementBy or querySelector methods to get elements nested inside an element we've already retrieved from the DOM?

*/




/*

Step 2:
Get the width of a slide and save it to a variable. Create a variable called slideCount that is equal to 0.

We need the width so that we know how much to translate the gallery by and the slide count to check when we're at the beginning or end of the gallery, so we don't translate our images off the screen in a direction where there is no next slide!

*/




/*

Step 3:
Now we're going to write our transitionSlide function so that it will transition the slides in our gallery whenever someone clicks one of our buttons.

Declare a variable called currentSlide and set it equal to 1.


*/





/*

Step 4:
We're going to listen for an event and create an event handler on the .js-nav-list element.

Create a variable called sliderNav and assign it to the .js-nav-list element. Then add an event listener for a click event and pass it a reference to the function transitionSlide (which we're going to write below in step 5)

*/



/*

Step 5:
Declare a function called transitionSlide. transitionSlide takes 1 parameter, event (which is the event object).

Our transitionSlide function is going to be divided into three parts: Setup, Checks and Execution.

1. Setup:
We need to check to make sure that the event target is one of our links. If it is, then we need to get the direction from our event target and save it to a variable, called currentDirection.

hint: the direction is stored in the data-direction attribute

2. Checks:
We need to check the current slide and calculate if there is a next slide in that direction. If current slide is the first slide and the current direction is left or if the current slide is the last slide and the direction is right, we shouldn't translate our slider gallery.

Create a conditional that will handle the cases where (a) the slide direction is left and the current slide is 0 and (b) the slide direction is right and the current slide is the number of slides. Your conditional should just `return` if either of these cases is met.

3. Execution:
We can transition our slide!

If the current direction is left, decrement the currentSlide variable, otherwise increment it.

Then translate your slide, just like we did last time. Just like we did last time? hmmm ...


*/
