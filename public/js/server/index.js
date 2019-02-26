const express = require("express");
const mongoose = require('mongoose');
mongoose.connect('mongodb://acastore:acastore1@ds351455.mlab.com:51455/aca-store-1', {useNewUrlParser: true});


//Routes
const productRoutes = require("./routes/ProductRoutes"); 

const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));

app.use(productRoutes); 


const thePort = 3001;

app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port", thePort);
});
