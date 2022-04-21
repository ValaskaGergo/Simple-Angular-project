const mongoose = require ('mongoose');

const bikeSchema = mongoose.Schema({
  name: {type: String, required: true },
  content: {type: String, required: true },
});

module.exports = mongoose.model('Bike', bikeSchema);
