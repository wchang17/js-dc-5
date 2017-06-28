# Class 14: APIs
Often when building an app, the data we want to use exists elsewhere and
we need a way to use it in our app - we can do this through APIs! This
class will cover working with external data sources through AJAX and
building APIs with Express.

## Learning Objectives
- Describe what an API is and how to use it
- Understand how to work with an API
- Build an API using `Express`

## Key Takeaways
<details>
  <summary>What is AJAX? What does AJAX stand for? Why do we
  use it?</summary>

  AJAX stands for Asynchronous JavaScript and XML.

  We use AJAX to make requests to a server without making a page refresh, so it's a way for us to communicate with another server( to get data).
</details>

<details>
  <summary>What is `XMLHttpRequest()` and how do we use it?</summary>

  `XMLHttpRequest()` is one client side implementation of AJAX.

  There are 4 steps to making a request with `XMLHttpRequest()`:

  1. Create an instance of the `XMLHttpRequest()` class:
  ```
    let request = new XMLHttpRequest()
  ```

  2. Add an event listener to our request:
  ```
    request.onreadystatechange = () => {
      if ( request.readyState === 4 ) {
        let response = JSON.parse( request.response )
        console.log( response )
      }
    }
  ```

  or

  ```
    request.addEventListener('load', () => {
      let response = JSON.parse( request.response )
      console.log( response )
    })
  ```

  3. Open our request:
  ```
    request.open('GET', 'http://pokeapi.com/')
  ```

  4. Send our request:
  ```
    request.send()
  ```

</details>

<details>
  <summary>What is `fetch()` and how do we use it?</summary>

  `fetch()` is a second client-side implementation of AJAX. It is newer and not as widely supported (i.e. no IE).

  To make a request using `fetch()`, you just do the following:
  ```
    fetch('http://pokeapi.com/')
      .then( response => {
        return response.json()
      })
      .then( json => {
        console.log( json )
      })
  ```
</details>

<details>
  <summary>What is the `request` module and how do we use it?</summary>

  `request` is a module on NPM that makes it easier to make AJAX requests from the server.

  Once we've installed it with NPM, we can use it like so:
  ```
    const request = require('request')

    request.get('http://pokedexapi.com', ( err, response, body ) {
      let data = JSON.parse( body )
      console.log( data )
    })
  ```
</details>

## Materials
- [Slides](https://ga-students.github.io/JS-DC/14-apis)
- [Lesson Notes](14-apis/lesson_plan.md)


