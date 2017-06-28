// Weather data
let weather = {
  city: '',
  country: '',
  temperature: '',
  description: '',
  humidity: '',
  clouds: ''
}

// Compile the template outside of the function, so that we only do it
// once, instead of on every render.
let app = document.querySelector('#weather')
let templateSource = document.querySelector('#weather-template').innerText
let template = Handlebars.compile(templateSource)

function renderWeather() {
  let weatherHtml = template(weather)
  app.innerHTML = weatherHtml
}

// First render
renderWeather()

// Setup Listeners
let searchForm = document.querySelector('#searchForm')
searchForm.addEventListener('submit', function( e ) {
  e.preventDefault()

  // Get the values entered by the user
  // (you can get an input by it's name using 'input[name="theName"]')

let city = document.querySelector('input[name="city"]').value
let country = document.querySelector('input[name="country"]').value


  // 1. Make the request to OpenWeatherMap API using XMLHttpRequest()
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=17c4b9321d054573c1c93f24f47e706a`;


  let request = new XMLHttpRequest()
  request.addEventListener('load', frunction() {
    let response = JSON.parse(request.response)
    console.log(response)

    let weather = {
      city: 'city',
      country: 'country',
      temperature: 'response.main.temp',
      description: 'response.weather.description',
      humidity: 'response.main.humidity',
      clouds: 'response.clouds.all'
    }

    renderWeather()

  })
  
  request.open('GET', url)
  request.send()

  // 2. Update weather data
  // (you can parse a string of JSON into an object with JSON.parse()


  // 3. Render template with updated weather object

  

})
