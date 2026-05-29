

const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
  userId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User"
},
  title: String,
  description: String,
  fileKey: String,

  // 👇 NEW FIELD (track viewers)
  viewedBy: [
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    viewedAt: { type: Date, default: Date.now }
  }
],

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Service", ServiceSchema);