const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();
const cloudinaryConfig = require('./config/Storage');

const app = express();

mongoose.connect(process.env.REACT_APP_MongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());

app.use(express.json());
app.use(cloudinaryConfig);
app.use(routes);


app.listen(process.env.PORT || 3333);