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

var newItem = "\n---------------------------------------------------------------------------------------------------------------------------\n";


// Initialize the spotify API client using our client id and secret
var spotify = new Spotify({
  id: "404dc512f9cd45d99fba00219b780c28",
  secret: "f8dc87ac3b464424b2a2b30cb68eed58"
});

var command = process.argv[2];
var name = process.argv.slice(3).join(" ");

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

function concert() {
  var url =
    "https://rest.bandsintown.com/artists/" +
    name +
    "/events?app_id=codingbootcamp";
  axios
    .get(url)
    .then(function(response) {
      // handle success
      var concertInfo = response.data
      var myConcert = [
      "Concert Venue: " + concertInfo[0].venue.name,
      "Concert Location: " +
        concertInfo[0].venue.city + ", " + concertInfo[0].venue.country,
      "Concert Date: " + concertInfo[0].datetime
      ].join("\n\n");

      console.log(myConcert);

      fs.appendFile('log.txt', myConcert + newItem, function (err) {
        if (err) throw err;
        console.log('\nSaved!');
      })
      
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
}

function spot() {
  spotify.search({ type: "track", query: name, limit: 1 }, function(
    error,
    data
  ) {
    if (error) {
      return console.log("Error Occurred: " + error);
    }

    var spotifyAry = data.tracks.items;
    for (var i = 0; i < spotifyAry.length; i++) {
      var spotifySong = [
      "Artist: " + spotifyAry[i].album.artists[0].name,
      "Song: " + spotifyAry[i].name,
      "Sample: " + spotifyAry[i].preview_url,
      "Album: " + spotifyAry[i].album.name
      ].join("\n\n");

      console.log(spotifySong)

      fs.appendFile('log.txt', spotifySong + newItem, function (err) {
        if (err) throw err;
        console.log('\nSaved!');
      })
      
    }
  });
}

function movie() {
  var url = "http://www.omdbapi.com/?apikey=trilogy&t=" + name;
  axios
    .get(url)
    .then(function(response) {
      // handle success
      var movieInfo = response.data;

      var myMovie = [
      "Movie Name: " + movieInfo.Title,
      "Movie Year: " + movieInfo.Year,
      "IMDB Rating: " + movieInfo.Ratings[0].Value,
      "Rotten Tomatoes Rating: " + movieInfo.Ratings[1].Value,
      "Country: " + movieInfo.Country,
      "Language: " + movieInfo.Language,
      "Plot: " + movieInfo.Plot,
      "Actors: " + movieInfo.Actors
      ].join("\n\n");

      console.log(myMovie);

      fs.appendFile('log.txt', myMovie + newItem, function (err) {
        if (err) throw err;
        console.log('\nSaved!');
      })


    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
}

function randomAction() {
  fs.readFile('random.txt', 'utf-8', (err, data) => { 
    if (err) throw err; 
  
    // Converting Raw Buffer to text 
    // data using tostring function. 
    console.log(data);
})
}
