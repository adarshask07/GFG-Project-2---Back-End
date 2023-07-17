const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connection established successfully");
    })
    .catch((error) => {
      console.log("Error connecting to the database:");
      console.error(error);
    });
};

module.exports = dbConnect;
