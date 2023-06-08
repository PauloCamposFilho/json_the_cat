const request = require("request");
const { BREED_SEARCH } = require("./constants");

if (process.argv.length <= 2) {
  console.log("Program terminated. No parameters passed. Pass a query to be searched");
  process.exit();
}
const userQuery = process.argv[2]; // the parameter.
const APIQuery = BREED_SEARCH + "?q=" + userQuery;

request(APIQuery, (err, response, body) => {
  if (err) console.log("error", err.message);
  if (response && response.statusCode === 200) {
    const responseObject = JSON.parse(body);
    if (responseObject.length > 0) {
      for (let breed of responseObject) {
        console.log("Breed:", breed.name);
        console.log("Description:", breed.description);
      }
    } else {
      console.log("The query returned no results");
    }
  }
});