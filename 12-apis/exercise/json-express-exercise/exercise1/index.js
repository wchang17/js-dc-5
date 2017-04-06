var express = require('express')
var app = express()

var quotes =
[{ author : 'Audrey Hepburn',
    text : "Nothing is impossible, the word itself says 'I'm possible'!"
  },
  { author : 'Walt Disney',
    text : "You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you"
  },
  { author : 'Unknown',
  text : "Even the greatest was once a beginner. Don't be afraid to take that first step."
  },
  { author : 'Neale Donald Walsch',
  text : "You are afraid to die, and you're afraid to live. What a way to exist."
  }]


app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// 1. Create a route to return all of the quotes in our array



// 2. Retrive a random quote by adding a new route '/quote/random' then calculate a random index, grab the quote and return it

// 3: Add the ability to grab a single quote. The way you do this is by adding a ":param" to the route, so the route will look like "/quote/:id" and the id will be available using req.params.


BONUS:
// 4: Add a POST method to add your own quote - We will need to create a special view and submit method in order to create this request

// 5: Add the ability to DELETE a post - We will need to create a special view and submit method in order to create this request


app.listen(process.env.PORT || 3000);
