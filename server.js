const express = require("express"); //require in express
const mongoose = require("mongoose"); //require in mongoose

const PORT = process.env.PORT || 3000 //port 3000 local host and heroku deployment port 

const app = express();

//parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
