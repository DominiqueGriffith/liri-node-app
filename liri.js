require("dotenv").config();
var Spotify = require('node-spotify-api');
var axios = require('axios');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var parameter = process.argv[3];
var artist = "";


  

function switchCase() {
  switch (command) {
    case "concert-this":
      break;

    default:
      break;
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
switchCase();
bandsInTown();

axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
  .then(function (response) {

var concertInfo = response.data;

  //  concertInfo = {
  //     datetime: "",
  //     venue: "",
  //     datetime: "",

  //   }
    // handle success
    console.log(concertInfo);
  }) 
  .catch(function (error) {
    // handle error
    // console.log(error);
  })
  .finally(function () {
    // always executed
  });






// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }

// console.log(data); 
// });