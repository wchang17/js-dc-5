### Class 15: Authentication
This lesson covers authentication - the process of verifying user
identities. As part of our discussion on authentication, we'll also
learn about middleware.

#### Learning Objectives
- Describe the basics of authentication
- Use Passport to authenticate users
- Understand middleware in an express application
- Describe the basics of authentication
- Use Passport to authenticate users

#### Materials
- [Slides](https://ga-students.github.io/JS-DC/15-authentication)
- [Lesson Notes](15-authentication/lesson_plan.md)
- [Lesson](https://www.youtube.com/watch?v=FeEt9JgAtEo)

## Key Takeaways
<details>
  <summary>What is Middleware? What are some use cases for Middleware?</summary>

  Middleware is/are functions that have access to the request and response objects, and the next middleware function. A sample middleware looks like this:

  ```
  app.get('/', function (req, res next ) {
    // do some stuff to req and res

    next()
  })
  ```

  Middleware can be used to supplement the business logic of an application. Examples include measuring performance, logging errors, and authentication.

</details>

## Assignment
Enjoy the long weekend! There is no class on Tuesday, we will resume again on Thursday.

For your homework between now and next Thursday, implement at least one of the following additional features in your lab. If you would like, you can use the solution provided (which is currently in the assignment folder). You are also free to use your own, just make sure to delete the current assignment folder and replace it with your lab work.

### Prompt #1
Rather than having users add artists on their own, use the Spotify API to add artists. To do this, you will need to:
- add a javascript file to your `public/` directory (next to your css file) and reference it in your default handlebars layout (this is the difference between front end javascript and back end javascript). Maybe `console.log()` a string to make sure it's working. Where should you see that string?
- modify your new artist template to include a form that your users can use to search for an artist
- when a user submits your search form, make an AJAX request to the Spotify API (you'll probably want the search endpoint) to retrieve all the artists that match your user's search
- display the artists to the user with a button that they can click to add the artist to your database.

Bonus:
- when a user clicks to add an artist to your database, you can make this a form OR (as a bonus) you can use AJAX.
- add an event listener for when a user clicks to add an artist. When they do, get the data for the artist they want to add and use AJAX to send a POST request to a route in your server.
- inside your route, add the new artist to your database and send back a message to let your front end javascript know this operation was successful
- in your request handler, if the operation is successful let the user know by navigating them to the new show page for that user

### Prompt #2
We don't want to let anyone add artists to our application!
- use passport to add authentication to Tunr
- ensure that a user is logged in before allowing them to navigate to any of your Artists routes
- follow the instructions from class on implementing Passport

### Additional Resources:
- Read the Express docs page on using Middleware: [here](http://expressjs.com/en/guide/using-middleware.html)
- Read the `Overview` and `Authentication` sections of the [passport documentation](http://passportjs.org/docs)
- Still all like _wtf is auth_ or _auth - can't even_? I hear you. Check [this
out](http://mherman.org/blog/2015/01/31/local-authentication-with-passport-and-express-4) or
[this](https://code.tutsplus.com/tutorials/authenticating-nodejs-applications-with-passport--cms-21619) it may help with how to even auth.

