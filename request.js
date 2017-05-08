var request = require("request");
var fs =require("fs");

var requestOptions = {
  host: 'sytantris.github.io',
  path: "/http-examples/future.jpg"
};




function makeRequest(reqOptions) {

  request.get( reqOptions)
    .on("error", (err) =>{
      if (err){
        throw err;
      }
    })
    .on("response", (response) => {
      console.log('Downloading image...');
      console.log("Response Msg Status: ", response.statusMessage);
      console.log("Response Headers: ", response.headers["content-type"]);
      console.log('Download complete.');
    })
    .pipe( fs.createWriteStream( "./future.jpg"));


}


makeRequest('https://sytantris.github.io/http-examples/future.jpg');
