// Read and set environment variables
require("dotenv").config();

var axios = require("axios");
// // Import the Twitter NPM package.
// var Twitter = require("twitter");

// Import the node-spotify-api NPM package.
var Spotify = require("node-spotify-api");

// Import the API keys
var keys = require("./keys");

// Import the request npm package.
var request = require("request");

// Import the moment npm package.
var moment = require("moment");

// Import the FS package for read/write.
var fs = require("fs");

// Initialize the spotify API client using our client id and secret
var spotify = new Spotify({
  id: "404dc512f9cd45d99fba00219b780c28",
  secret: "f8dc87ac3b464424b2a2b30cb68eed58"
});
 
var command = process.argv[2];
var name = process.argv.slice(3).join(" ");

function userCommand(command, name) {
  switch (command) {
    case "concert-this":
      concert();
      break;
    
    case "spotify-this-song":
      spot();
      break;
    
    case "movie-this":
      movie();
      break;
    
    case "do-what-it-says":
      randomAction();
      break;
    }

}

userCommand(command, name)


function concert() {
  var url = "https://rest.bandsintown.com/artists/" + name + "/events?app_id=codingbootcamp";
  axios.get(url)
  .then(function (response) {
    // handle success
    console.log(response.data[0].venue.name);
    console.log(response.data[0].venue.city + ", " + response.data[0].venue.country);
    console.log(response.data[0].datetime);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}

function spot() {
  spotify.search({ type: 'track', query: name, limit: 1 }, function (error, data) {
    if (error) {
        return console.log("Error Occurred: " + error);
    }
});
}

function movie() {
  var url = "http://www.omdbapi.com/?apikey=trilogy&t=" + name;
  axios.get(url)
  .then(function (response) {
    // handle success
    var movieInfo = response.data;
    console.log("Movie Name: " + movieInfo.Title);
    console.log("Movie Year: " + movieInfo.Year);
    console.log("IMDB Rating: " + movieInfo.Ratings[0].Value);
    console.log("Rotten Tomatoes Rating: " + movieInfo.Ratings[1].Value);
    console.log("Country: " + movieInfo.Country);
    console.log("Language: " + movieInfo.Language);
    console.log("Plot: " + movieInfo.Plot);
    console.log("Actors: " + movieInfo.Actors)
    // console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}

function randomAction() {
  
}