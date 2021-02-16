
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const { on } = require("./models/workout");
//! require("./seeders/seed"); // Either npm run seed or keep this in here uncommented and it will run the seed

const PORT = process.env.PORT || 3005;

const app = express();

app.use(logger("dev"));
// to be able to use json format

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

mongoose.connection.once('open', ()=>{
    console.log('connection created');

});
     on('error',()=>{
      console.log(error)
});

//require(apiRoute)(app);
require("./routes/htmlroutes")(app);
require("./routes/apiroutes")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});


