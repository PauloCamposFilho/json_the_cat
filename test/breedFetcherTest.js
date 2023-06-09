const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require("chai");

describe("#fetchBreedDescriptio", () => {
  it("returns a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription("Siberian", (err, desc) => {
      assert.equal(err, null);
      const expectedDescription = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      assert.equal(desc.trim(), expectedDescription);
      done();
    });
  });
  it("returns an error when invalid/non-existent breed is called", (done) => {
    fetchBreedDescription("FlorpaLorpin", (err, desc) => {
      assert.equal(desc, null); // no description returned.
      const expectedError = "No results found.";
      assert.equal(err.trim(), expectedError);
      done();
    });
  });
});