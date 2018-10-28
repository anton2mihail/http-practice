const https = require("https");

console.log("I did it!");

const options = {
  host: "www.example.org",
  path: "/"
};

// called by https when the request is made.
const callback = function(response) {
  console.log("In response handler callback!");
  console.log("Response: ", response);
};

console.log("I'm about to make the request!");

https.request(options, callback).end();

console.log("I've made the request!");
