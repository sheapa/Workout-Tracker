const express = require("express");
const mongoose = require("mongoose");
const apiRoute = require("./routes/api.js");
const viewRoute = require("./routes/view.js")

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout_db", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(apiRoute);
app.use(viewRoute);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
