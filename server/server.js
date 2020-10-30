var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var app = express();
var bodyParser = require('body-parser')
var uu="mongodb+srv://dbuser:paydb@3211@cluster0.r3ust.mongodb.net/<dbname>?retryWrites=true&w=majority"
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.use(express.json()); 
mongoose.connect(
  uu, 
  { useNewUrlParser: true , useUnifiedTopology: true },
  function (err, db) {
    if (err) {
      console.log(err);
    } else {
      console.log("connected db");
    }
  }
);
const routes = require("./routes");
app.use("/", routes);

const port = process.env.PORT || 4200;
//
//if (process.env.NODE_ENV === "production")
app.listen(port, () => console.log(`Server running on port ${port}`));
