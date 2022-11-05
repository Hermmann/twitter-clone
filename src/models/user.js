const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true

  },likeads: [{type:String}], //
  followers: [{type:String}],
  following: [{type:String}]

});

module.exports = mongoose.model('User', userSchema);