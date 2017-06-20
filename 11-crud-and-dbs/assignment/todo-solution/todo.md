# To Do
Your assignment is to create a to do list application that uses Express to build a server and Mongoose to store individual to dos

This assignment is divided in to two levels with a bonus afterwards. __Level 1__ is similar to the to do applications we've built previously, but requires an integration with Express and Mongoose. __Level 2__ requires you to break out the application a little more and use a little more of what Express and Mongoose have to offer.

You are only required to finish __Level 1__ as homework and submit it before the start of next class.

## Level 1
The criteria for __Level 1__ are as follows:
  - build a basic Express server that runs on localhost:3000
  - adapt your server so that it can render views built with handlebars
  - adapt your server further to connect to a MongoDB database using mongoose and define a model for a To Do
  - your todo list application should have an index (`/`) route that lists all todos stored in your database
  - somewhere on every page, you should have a link to add a new to do that renders a view with a form to create a new to do.
    - this form should submit a `post` request to a route where it will be saved to the database, then redirect back to your index route.
  - at this point, I should be successfully add to dos to your application

## Level 2
The criteria for __Level 2__ are as follows:
  - make a few structural changes to your codebase:
    - create a `todo` directory in your `views` directory for all the views for your to dos
  - create a page to show the details of one particular todo. You'll need to
    (1) create a `views/todo/todo.handlebars` template
    (2) create a route that takes a single to do's id as a parameter, then
    (3) modify your to do list so that each to do item has a link to that specific to do using its id (i.e. `todos/1`).
    (4) in your route handler, you'll need to use `findOne()` to get a todo from your database by it's id then render your `todo.handlebars` template with your one to do.

## Level 3
The criteria for __Level 2__ are as follows:
  - make it so that I can edit a to do.
    - the single to do template (`todo.handlebars`) should have a link to edit a to do on it somewhere.
    - the edit link should take me to a page with a form where I can edit my to do
    - the form should send a `post` request to my server, get the to do I want to update by it's ID, update the properties, save the to do, then redirect me to the single view for that to do so that I can see the updates
  - make it so that I can delete a to do
    - add a link to delete a to do somewhere on the single to do template
    - when a user clicks this link, on your server find the to do they want to delete, call the `.remove()` method and then redirect them back to the homepage

# Bonus:
Read up on using [static files](http://expressjs.com/en/starter/static-files.html) in express and try to add a css file and some images to style your to do application.
