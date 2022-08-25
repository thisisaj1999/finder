const mongoose = require('mongoose');

const FinderSchema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, 'must provide username'],
    unique: [true, `${this.username} already exists.`],
    trim: true,
  },
});

const Finder = new mongoose.model('Finder', FinderSchema);

module.exports = Finder;
