const request = require("request");
const { BREED_SEARCH } = require("./constants");

const fetchBreedDescription = (breedName, callback) => {
  const APIEndPointWithQuery = BREED_SEARCH + "?q=" + breedName;
  request(APIEndPointWithQuery, (err, response, body) => {
    if (err) callback(err, null);
    if (response && response.statusCode === 200) {
      const responseObject = JSON.parse(body);
      if (responseObject.length > 0) {
        callback(null, responseObject[0].description);
      } else {
        callback("No results found.", null);
      }
    }
  });
};

module.exports = { fetchBreedDescription };