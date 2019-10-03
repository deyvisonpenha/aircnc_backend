const cloudinary = require('cloudinary').v2;

require('dotenv').config();

module.exports = (req, res, next) => {

  cloudinary.config({
    cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.REACT_APP_CLOUDINARY_API_KEY,
    api_secret: process.env.REACT_APP_CLOUDINARY_API_SECRET,
  });
  next();
}