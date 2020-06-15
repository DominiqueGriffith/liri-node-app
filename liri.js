require("dotenv").config();
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
    // 669e9411abe241ed80fa2f8663dc0da6,
    // 4b9732c618624196b7460f6b01098607
//   id: <your spotify client id>,
//   secret: <your spotify client secret>
});

spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

console.log(data); 
});