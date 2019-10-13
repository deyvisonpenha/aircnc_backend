const Spot = require('../models/Spot');
const User = require('../models/User');

const cloudinary = require('cloudinary').v2;
const DataUri = require('datauri');

module.exports = {
  async index(req, res) {

    const { tech } = req.query;

    const spots = await Spot.find({ techs: tech });

    return res.json(spots);

  },

  //localhost/spots/:id_spot
  async show(req, res) {
    const { spot_id } = req.params;
    const spot = await Spot.find({ _id: spot_id });

    return res.json(spot);
  },

  async store(req, res) {
    const { company, price, techs, site } = req.body;
    const { user_id } = req.headers;

    const userExist = await User.findById(user_id);

    if (!userExist) {
      return res.status(400).json({ error: 'User does not exists' })
    }

    var datauri = new DataUri();
    datauri.format('.png', req.file.buffer);

    cloudinary.uploader.upload(datauri.content, async function (error, result) {
      if (error) {
        return res.status(400).json(error);
      }

      const spot = await Spot.create({
        user: user_id,
        company,
        price,
        techs: techs.split(',').map(tech => tech.trim()),
        site,
        thumbnail: result.secure_url,
      });

      return res.json(spot);
    });

  }
}