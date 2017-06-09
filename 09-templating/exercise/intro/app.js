/*
 *
 * Templating Review
 *
 * We've seen how to work with templates in tryhandlebarsjs.com, now
 * we're going to look at how to use them inside a project!
 *
 */

console.log(Handlebars)

const data = {
  person: {
    profPic: "http://0.gravatar.com/avatar/f190542c0ce80b9bc399f5039f6a8b86",
    name: {
      first: "Zakk",
      last: "Fleischmann"
    }
  }
}


/*
 * I've already included the script to include Handlebars in index.html.
 * Now, we need to build out a handlebars template.
 */



/*
 * Once we have the handlebars template defined, we need to get it using
 * javascript.
 */


/*
 * Now that we have our template's source, we need to compile it using
 * Handlebars. This is going to create a function that we can call and
 * pass data that will return the markup for our compiled template.
 */




// 1. Ge the template source from the DOM

let source = document.querySelector('#profile')
console.log(source)


// 2. Compile the template source into a template function because the function needs a string (innerHTML)

let profileTemplate = Handlebars.compile( source.innerHTML )

//This is what template is doing behind the scenes using regex
// function compile(someString) {
// 	let template = <h1>...</h1>
// }

// 3. Call our template function passing in data to render the template with and compile

let renderedTemplate = profileTemplate( data )

// 4. Add our rendered HTML to the page. Returns a string of our compiled HTML

document.querySelector('.content').innerHTML = renderedTemplate

