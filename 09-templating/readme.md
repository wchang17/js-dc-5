# Templating

## Learning Objectives
- Use Handlebars templates to turn JS into HTML
- build a simple dynamic application using Handlebars and JS

## Assignment
We built out a simple to do list application in class that uses Handlebars and
JavaScript! Your homework is to choose one of the two following additional features
and implement it in to your to do application.

1. Add options for each to do like 'Complete' and 'Delete'.

You'll need to refactor your template to include links to mark each to do as complete 
or delete it. Then in your data object, you'll have to modify your to dos to be objects 
(instead of strings in an array) with an isComplete property that is either true or 
false. Finally, you'll need to create methods that will handle that functionality for 
when users mark a to do as complete or delete it.


2. Add a Current To do template

You'll need to create a new template for a Current To do and give each to do a way to 
make it the current to do item (maybe a link). While we're at it, lets change our data 
object so that each to do is an object with a 'description' property that we can show 
when a to do item is marked as featured. You'll need to write functions to handle 
making a to do the Current To Do and reorganize your data so one to do is featured at a time.

If you can think of other features to add, go for it!

## Extra Reading
For your skimming (or skipping) pleasure:
- [You Might Not Need jQuery](http://youmightnotneedjquery.com/)
