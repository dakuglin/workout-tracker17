const express = require("express"); //require in express
const mongoose = require("mongoose"); //require in mongoose

const PORT = process.env.PORT || 3000 //port 3000 local host and heroku deployment port 

const app = express();

// sets up express app to handle data parsing
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

