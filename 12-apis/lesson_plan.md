# APIs

## Class Structure
- Welcome to Class
- Go over Learning Objectives
- Deliver Lesson
  - Introduce concept
  - Give exercise
  - Repeat
- Go over Learning Objectives
- Closing Questions / Tying up loose ends
- Exit Tickets


## Warm up
Quote Book exercise

## Introduce AJAX - history (20 min)
  Goals:
    -Understand what AJAX is
    -Understand when, where and why AJAX is used
    -Understand how AJAX is relevant when working with APIs

The History of Ajax:
-Ajax is open source and thus accessible
-The term AJAX was not used until 2005, but development had been underway for several years
-It can’t be credited to just one organization or individual. Development of asynchronous technologies began around 1996.
-In the late 90’s, Microsoft used a forerunner to AJAX.
-Google, meanwhile, used asynchronous technologies heavily in applications like Google Maps in the first decade of the 21st century.  
-In 2005, developer Jesse James Garrett wrote a paper “Ajax: A New Approach to Web Applications” describing this group of new technologies.
-He felt that the conglomerate needed a short name that summed it up. “Asynchronous JavaScript+CSS+DOM+XMLHttpRequest “ he noted with a touch of humor, was difficult to discuss with clients.
-In 2006, the Open Ajax Alliance was formed with companies like Google, Red Hat, and IBM on board. The mission was – and is – to provide users with interoperable Ajax solutions. It

-Ajax is not a programming language or a tool, but a concept. Ajax is a client-side script that communicates to and from a server/database without the need for a postback or a complete page refresh
-Ajax is the method of exchanging data with a server, and updating parts of a web page – without reloading the entire page.
-Ajax itself is mostly a generic term for various JavaScript techniques used to connect to a web server dynamically without necessarily loading multiple pages.
-In a more narrowly-defined sense, it refers to the use of XmlHttpRequest objects to interact with a web server dynamically via JavaScript.

There are 4 main benefits of using AJAX:
  1. Callbacks:
    -Ajax is used to perform a callback, making a quick round trip to and from the server to retrieve and/or save data without posing the entire page back to the server
    -By not performing a full postback and sending all form data to the server,
    network utilization is minimized and quicker operations occur
    -This can greatly improve network performance, by using callbacks the server is to required to process all form elements
    -By sending only the necessary data, there is limited processing on the server
    -There is no need to process al form elements, send images back to the client, or send a full page back to the client
  2. Making Asynchronous Calls
    -Ajax allows you to make Asynchronous calls to a web server
    -This allows the client browser to avoid waiting for all data to arrive before allowing the user to act once more
  3. User-Friendly
    - Because a page postback is being eliminated, Ajax enabled applications will always be more responsive, faster and more User-Friendly
  4. Increase Speed
    -We've already touched on this a little, but the main purpose of Ajax is to improve the speed, performance and usability of a web application.
        Example: A great example of Ajax is the movie rating feature on Netflix:
          -The user rates a movie and their personal rating for that movie will be saved to their database without waiting for the page to refresh or reload
          -These movie ratings are being saved to their db, without posting the entire page back to the server


Ajax and how it relates to XML and JSON:
  -JavaScript is the client-side programming language and XML is a markup language to define data.
  -JSON is another markup language to define data.
  -JSON (JavaScript Object Notation) is much easier to use with JavaScript than XML. When it comes to Ajax and JavaScript, JSON Web Services are replacing XML Web Services

Where should Ajax be used?
  -Ajax should be used anywhere in a web application where small amounts of information could be saved or retrieved from the server without posting back the entire pages
    ex: data validation on save actions
    ex: to change the values in a drop down list-box based on other inputs,
      such as state and college list boxes
        -When the user selects the state- the college list will repopulate with only that states colleges and universites
        -Other features include text hints and autocomplete text boxes.
        -The client types in a couple of letters and a list of all values that start with those letters appear below.
        -A callback is made to a web service that will retrieve all values that begin with these characters.

    Technical aspects of Ajax
      -Ajax callbacks can be done by instantiating an XmlHttpRequest object in the client-side JavaScript
      -The XmlHttpRequest object can be used to directly call server-side objects like pages and web services
      -These pages will either save and/or return data
      -Ajax was originally an acronym for Asynchronous JavaScript and XML. Asynchronous meaning that multiple events are happening independently of one another
      -Once a client initializes an Ajax callback to the server, the client will not need
      to wait for a response and can continue to use the web application while the request is begin processed
      -Once done, the server will send a reply back to the client and the client will process it as necessary

## Go into classic AJAX code along (30 min)
  In order to make an HTTP request to the server using JavaScript, you need an instance
  of a class that provides this functionality.
    -This is where XMLHttpRequest comes in
    -Such a class was originally introduced in IE as an ActiveX object called XMLHTTP
  Next- you need to decide what you want to do after you receive the servers response to your request
  At this stage, you just need to tell the HTTP request object which JS function will handle porcessing the response
    -This is done by setting the onreadystatechange property of the object to the name of hte Javascript functionthat should be called when the tstate of the reuest changes

    The full list of the readyState values is documented at XMLHTTPRequest.readyState and is as follows:

    0 (uninitialized)
    1 (loading)
    2 (loaded)
    3 (interactive)
    4 (complete)

Inside event handler:
```
var request = new XMLHttpRequest()

request.onreadystatechange = function() {
  if ( request.readyState === 4 ) {
    console.log('done!')

    resultContainer.innerText = request.status
  }
}

request.open('GET', 'index.html', true)
request.send(null)
```

## AJAX exercise (20 min)
  Very rudimentary exercise getting comfortable with using Ajax

## Introduce APIs (15 min)
History of APIs - types of APIs
  -Have everyone install the JSON formatter
  JSON is very simple to use if correctly structured. One of the resources to validate JSON and check if the syntax is correct is [JSON Viewer](http://codebeautify.org/jsonviewer).

  When talking about APIs, a lot of the conversation focuses on abstract concepts. To anchor ourselves, let's start with something that is physical: the server. A server is nothing more than a big computer. It has all the same parts as the laptop or desktop you use for work, it’s just faster and more powerful. Typically, servers don't have a monitor, keyboard, or mouse, which makes them look unapproachable. The reality is that IT folks connect to them remotely — think remote desktop-style — to work on them.

  Servers are used for all sorts of things. Some store data; others send email. The kind people interact with the most are web servers. These are the servers that give you a web page when you visit a website. To better understand how that works, here's a simple analogy:

  In the same way that a program like Solitaire waits for you to click on a card to do something, a web server runs a program that waits for a person to ask it for a web page.

  There's really nothing magical or spectacular about it. A software developer writes a program, deploys it to a server, and the server runs the program continuously.  

What An API Is and Why It's Valuable

  Websites are designed to cater to people's strengths. Humans have an incredible ability to take visual information, combine it with our experiences to derive meaning, and then act on that meaning. It's why you can look at a form on a website and know that the little box with the phrase "First Name" above it means you are supposed to type in the word you use to informally identify yourself.

  Yet, what happens when you face a very time-intensive task, like copying the contact info for a thousand customers from one site to another? You would love to delegate this work to a computer so it can be done quickly and accurately. Unfortunately, the characteristics that make websites optimal for humans make them difficult for computers to use.

  Figure 1. Communicating with a server

  The solution is an API. An API is the tool that makes a website's data digestible for a computer. Through it, a computer can view and edit data, just like a person can by loading pages and submitting forms.

  API calls are really a fancy term for making _HTTP requests_ to a server and sending/receiving structured data from that endpoint. We are still communicating with URLs, however instead of receiving markup, like we do with HTML pages, we receive data, in a variety of forms -- JSON, XML, CSV, and others.

## Create 10 task exercises using the OMDB database (15 mins)
    http://www.omdbapi.com/
    -create searches using the parameters guide on the website
    -have the students try submitting a couple more queries to familiarize with the API.
    -search for their favorite movies, pull in the rotten tomatoes reviews

## API Code along exercise (20 min)
  http://openweathermap.org/api
  Weatherify - have starter code ready to pull
    -Have students walk me through the components that are already in place

```
searchForm.addEventListener('submit', function( e ) {
  e.preventDefault()

  // Get the values enetered by the user
  var city = document.querySelector('input[name="city"]').value
  var country = document.querySelector('input[name="country"]').value

  // 1. Make the request to OpenWeatherMap API
  var request = new XMLHttpRequest()
  request.onreadystatechange = handleRequest

  request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&APPID=17c4b9321d054573c1c93f24f47e706a')
  request.send(null)

  // 2. Update weather data
  function handleRequest() {
    if ( request.readyState === 4 ) {
      var response = JSON.parse( request.response )

      weather = {
        city: city,
        country: country,
        temperature: response.main.temp,
        description: response.weather[0].description,
        humidity: response.main.humidity,
        clouds: response.clouds.all
      }
    }
  }

  // 3. Render template
  renderWeather()

})
```

## Building a simple API with Express


## Wrap up and review (5 min)  
