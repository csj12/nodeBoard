const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";

module.exports = function (callback) {
  return MongoClient.connect(uri, callback);
};