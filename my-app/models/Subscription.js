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
  type: {
    type: String,
    unique: true
    },

  isSaved: {
    type: Boolean,
    default: false
  },
});

var Subscription = mongoose.model("Subscription", SubscriptionSchema);

module.exports = Subscription;
