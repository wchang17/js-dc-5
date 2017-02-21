# To Do
Your assignment is to create a to do list application that uses `mongoose` to store todos

This assignment is divided in to two levels with a bonus afterwards. __Level 1__ is not very different from the two applications we built last class, but requires an integration with `mongoose`. __Level 2__ requires you to break out the application a little more and use a little more of `express`, MVC and `mongoose`.

You are only required to submit __Level 1__ before next class

## Level 1
The criteria for __Level 1__ are as follows:
  - build a basic `express` implementation of a to do list.
  - the todo list should have an index (`/`) route that lists all todos stored in your `mongoose` database
  - your to do list should also have a form that submits a `/post` request to your application to create a new to do item, then redirects back to the home page to list all to dos, including the most recently created on.

## Level 2
The criteria for __Level 2__ are as follows:
  - expand upon your basic `express` application built in __Level 1__
  - rather than have both your form and your todo list in your `home` view, break out the form into a new view
  - create a `todo` directory in your `views` directory
  - create a `views/todo/new.handlebars` template for your form and create a link to it in your `home.handlebars` template. You'll also need to setup a route!
  - create a page to show the details of one particular todo. You'll need to
    (1) create a `views/todo/todo.handlebars` template
    (2) a route that takes a single to do's id as a parameter, then
    (3) modify your todo list so that each to do item has a link to that specific to do using its id (i.e. `todos/id`).
    (4) In your route handler, you'll need to use `findById` instead of `find`
    (5) You'll need to modify your `app.post('/todos')` route to both create new todos and update existing todos or create a new route at `app.post('/todos/edit')` that will take an existing to do and edit it


# Bonus:
Read up on using [static files](http://expressjs.com/en/starter/static-files.html) in express and try to add a css file to style your todo application.
