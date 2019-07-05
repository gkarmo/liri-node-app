# liri-node-app

Gayah Karmo - Lead/Solo Developer, with brainstorming from classmate Shawn Luther

In this assignment, I will make LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

LIRI's Need
  Liri is here to provide users with the oppertunity to search for their upcoming concerts, favourite movies and spotify songs. All       along     with providing them with suggestion to other options if they get stuck.

LIRI's Objective
  Provide it's user with the oppertunity to search for concerts, movies, spotify songs, random (do-what-it-says) commands.
    -concert's providing
       * venue's name. 
       * location. 
       * date.
    -movie's providing 
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating  of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
    -spotify songs providing
       * Artist(s)
       * The song's name
       * A preview link of the song from Spotify
       * The album that the song is from
    -random providing
       * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
       * Edit the text in random.txt to test out the feature for movie-this and concert-this.
       
  LIRI's Instructions
    -Deside if you want to search for a concert, movie, or spotify song
    -if searching for a concert use "node liri concert-this CONCERT-NAME"
    -if searching for movie use "node liri movie-this MOVIE-NAME"
    -if searching for a spotify song use "node liri spotify-this-song SONG-NAME"
    -if wanting a song suggestion use "node liri do-what-it-says"
  
  LIRI's Tech
    -Node
    -Javascript
    -Axios
    -Moment
    -Spotify
    -FS
    -Dotenv
    
