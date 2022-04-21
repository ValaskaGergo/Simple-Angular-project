const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require ('mongoose');

const userRoutes = require("./routes/user");
const bikesRoutes = require("./routes/bikes");

const app = express();

mongoose.connect("mongodb+srv://valaska:NqpVROe9xtWpyobt@webtech.mjwoa.mongodb.net/webtech?retryWrites=true&w=majority")
.then(() => {
  console.log('connected to db');
})
.catch(() =>{
  console.log('connection failed');
});
//zQuqx0PBF0QEviz3
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});


app.use("/api/user", userRoutes);
app.use("/api/bikes", bikesRoutes);

module.exports = app;
