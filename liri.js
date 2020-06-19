require("dotenv").config();

var Spotify = require('node-spotify-api');
var axios = require('axios');
var keys = require("./keys.js");
var fs = require("fs");
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var parameter = process.argv[3];
var artist = "";
var song = "";
var movieName = "";




switchCase(command, parameter);


function switchCase(command, parameter) {
  switch (command) {
    case "concert-this":
      bandsInTown(parameter);
      bandsInTownAPI(parameter);
      break;
  
  


  
    case "movie-this":
      ombdMovieSearch(parameter);
      omabapi(parameter);
      break;

  

    case "spotify-this-song":
      spotifySearch(parameter);
      spotifyAPI(parameter);

      break;
  

    default:
    
  }

}
function bandsInTown(parameter) {
  if ('concert-this') {

    for (var i = 3; i < process.argv.length; i++) {
      artist += process.argv[i];
    }


  }
  // console.log("Artist " + artist);

}

function spotifySearch() {
  if ('spotify-this-song') {
    for (var i = 3; i < process.argv.length; i++) {
      song += process.argv[i];
    }

  }
}

function ombdMovieSearch() {
  if ('movie-this') {
    for (var i = 3; i < process.argv.length; i++) {
      movieName += process.argv[i];
    }

  }
}






function bandsInTownAPI() {
  axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
    .then(function (response) {

      var concertInfo = response.data[0];
      var concertDate = concertInfo.datetime;
      var concertVenue = concertInfo.venue;
      var concertVenueName = concertVenue.name;
      var concertVenueLocation = concertVenue.location;
      //  concertInfo = {
      //     datetime: "",
      //     venue: "",
      //     datetime: "",

      //   }
      // handle success
      console.log(concertDate);
      console.log(concertVenueName);
      console.log(concertVenueLocation);
    })
    .catch(function (error) {
      // handle error
      // console.log(error);
    })
    .finally(function () {
      // always executed
    });
}
function omabapi() {
  var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
  axios.get(queryURL)
    .then(function (response) {

      console.log(response.data);

      // console.log("Title: " + JSON.parse(body).Title);
      // console.log("Year Released: " + JSON.parse(body).Year);
      // console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
      // console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].value);
      // console.log("Country: " + JSON.parse(body).Country);
      // console.log("Language: " + JSON.parse(body).Language);
      // console.log("Plot Summary: " + JSON.parse(body).Plot);
      // console.log("Actors: " + JSON.parse(body).Actors);
    })
    .catch(function (error) {
      // handle error
      // console.log(error);
    })
    .finally(function () {
      // always executed
    });

}

function spotifyAPI() {
  spotify.search({ type: 'track', query: song }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }


    // if (spotify.search({ type: 'track', query: song }) === undefined) {
    //   command = "The Sign";
    //   spotify.search(command);
    //   console.log(command);
    // }

    // else {
    //  var spotifySong= JSON.parse(data);

    // console.log(spotifySong);

    var musicInfo = ""
    musicInfo += "Song: " + data.tracks.items[0].name + "\n";
    musicInfo += "Artist: " + data.tracks.items[0].artists.map(artist => artist.name).join(", ") + "\n";
    musicInfo += "URL: " + data.tracks.items[0].album.external_urls.spotify + "\n";
    musicInfo += "Album: " + data.tracks.items[0].album.name;

    console.log(musicInfo);
    // }
    // console.log(data.tracks.items[1]); 


  });
}




// node liri.js spotify-this-song '<song name here>'






// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }

// console.log(data); 
// });