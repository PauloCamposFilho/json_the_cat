const { fetchBreedDescription } = require("./breedFetcher");

if (process.argv.length <= 2) {
  console.log("Program terminated. No parameters passed. Pass a query to be searched");
  process.exit();
}

const breedName = process.argv[2]; // the parameter.

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log("Error:", error);
  }
  if (!desc) {
    console.log("The query returned no results.");
  }
  console.log(desc);
});