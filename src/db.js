const mongoose = require("mongoose");

function connect() {
  mongoose.connect("mongodb://localhost:27017/los-cruds");

  mongoose.connection.once("open", () => {
    console.log("Mongo is alive!");
  });

  mongoose.connection.on("error", (err) => {
    console.log("Something went wrong!", err);
  });

  return mongoose.connection;
}

module.exports = { connect };