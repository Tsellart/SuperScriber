var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SubscriptionSchema = new Schema({
  subscription: {
    type: String,
    unique: true
    },
  cost: {
    type: String
    
  },
  total: {
    type: String
    },

  isSaved: {
    type: Boolean,
    default: false
  },

});

var Subscription = mongoose.model("Subscription", SubscriptionSchema);

module.exports = Subscription;
