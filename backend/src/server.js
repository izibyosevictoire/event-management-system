const express = require("express");
const app = express();
const {ServerConfig} = require('./config');
const cors =require("cors");
const mongoose = require('mongoose');
const apirouter = require('./routes')




app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect('mongodb://localhost:27017/Event-Management')

app.use('/api',apirouter);





app.listen(ServerConfig.PORT, () => {
  console.log(`Server is running on port ${ServerConfig.PORT}`);
});