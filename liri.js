var axios = require('axios');

var spofity = require("node-spotify-api");


console.log(process.argv);

if (process.argv[2] === "concert-this" ){
    var artist = process.argv[3];
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function (response) {
            console.log(response.data);
            if (error) {
           console.log(error);
        }
    
    
    });  
}


console.log("song name: " + songs[i].name);
        console.log("preview song: " + songs[i].preview_url);
        console.log("album: " + songs[i].album.name);

        
if (spofity === "songs"){

    fs.readFile(".\\radmon.txt", "utf8", function (error, data) {

        if (error) {
            return console.log(error);
        }
    
        console.log(data)
       
    });
}
    
