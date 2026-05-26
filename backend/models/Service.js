// const mongoose = require("mongoose");

// const ServiceSchema = new mongoose.Schema({
//   userId: String,
//   title: String,
//   description: String,
//   fileUrl: String,
//   createdAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model("Service", ServiceSchema);

const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
  userId: String,
  title: String,
  description: String,
  fileUrl: String,

  // 👇 NEW FIELD (track viewers)
  viewedBy: [
    {
      userId: String,
      viewedAt: { type: Date, default: Date.now }
    }
  ],

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Service", ServiceSchema);