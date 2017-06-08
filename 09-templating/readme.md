# Templating

## Learning Objectives
- Use Handlebars templates to turn JS into HTML
- build a simple dynamic application using Handlebars and JS

## Materials
- [Slides](https://ga-students.github.io/JS-DC/09-templating/#/)
- [Lesson Notes](https://github.com/ga-students/JS-DC/tree/master/09-templating)
- [Lesson](https://www.youtube.com/watch?v=SScBAes8kss)

## Key Takeaways
<details>
<summary>Describe the basic syntax of Handlebars</summary>

Handlebars users curly braces to interpolate values into templates. That means
that, given the following data:

```
{
  person: {
    profPic: "http://0.gravatar.com/avatar/f190542c0ce80b9bc399f5039f6a8b86",
    name: {
      first: "Zakk",
      last: "Fleischmann"
    }
  }
}
```

We could have a template that looked something like this:

```
<div class="profile">
  <img src="{{ person.profPic }}">
  <h1>{{ person.name.first }} {{ person.name.last }}</h1>
</div>
```

The resulting HTML would then look like this:

```
<div class="profile">
  <img src="http://0.gravatar.com/avatar/f190542c0ce80b9bc399f5039f6a8b86">
  <h1>Zakk Fleischmann</h1>
</div>
```
</details>

<details>
<summary>How do I implement a loop or a conditional in Handlebars?</summary>

Handlebars gives us the ability to use some logic in our html templates,
including looping and conditionals!

A conditional looks like this:

```
{{#if person.name}}
  <h1>{{ person.name }}</h1>
{{/if}}
```

A loop looks like this:

```
<ul>
  {{#each person.todos }}
    <li>{{this}}</li>
  {{/each}}
</ul>
```

</details>

<details>
<summary>How do I use Handlebars in a small JS application?</summary>

### Step 1: Include handlebars through the CDN
Copy this link into the bottom of your html file but before the javascript
file where you're doing your work:

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.min.js"></script>
```

### Step 2: Define a handlebars template
You define a handlebars template by using the `<script>` element, giving it a 
unique ID and a `type="text/x-handlebars-template"`. Inside this `<script>` element
is where you'll define your template's markup.

```
<script id="to-do-template" type="text/x-handlebars-template">
  {{#if person.todos}}
    
    <ul>
      {{#each person.todos}}
        <li>{{ this }}</li>
      {{/each}}
    </ul>

  {{/if}}
</script>
```

### Step 3: In your JS, get the source for your template

```
let source = document.querySelector('#to-do-template')
```

### Step 4: Compile your template using Handlebars

```
let toDoTemplate = Handlebars.compile( source.innerHTML )
```

### Step 5: Render your template by passing it data!

```
let data = {
  person: {
    todos: ['learn handlebars', 'build a cool app', 'profit $$$']
  }
}

let renderedTemplate = toDoTemplate( data )
document.querySelector('#app').innerHTML = renderedTemplate
```



</details>

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
