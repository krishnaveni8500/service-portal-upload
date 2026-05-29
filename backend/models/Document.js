// const mongoose = require("mongoose");

// const documentSchema = new mongoose.Schema({

//   title: String,

//   documentUrl: String,

//   uploadedBy: String,

//   viewedBy: [String],

//   createdAt: {
//     type: Date,
//     default: Date.now
//   }

// });

// module.exports = mongoose.model(
//   "Document",
//   documentSchema
// );

const mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema({
  title: String,
  documentUrl: String,
  fileKey: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Document", DocumentSchema);