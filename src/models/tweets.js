const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
    text: {
    type: String,
    required: true,
    },
  
  date: { type: Date, default: Date.now
},

userLikes: [{type:String}]
});

module.exports = mongoose.model('Tweet', tweetSchema);