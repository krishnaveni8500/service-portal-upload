

const express = require("express");
const router = express.Router();

const multer = require("multer");
const AWS = require("aws-sdk");

const Document = require("../models/Document");

// ✅ Multer (store file in memory for S3 upload)
const upload = multer({
  storage: multer.memoryStorage()
});


// ✅ AWS S3 (NO ACCESS KEYS if EC2 IAM Role is attached)
const s3 = new AWS.S3({
  region: process.env.AWS_REGION,
  signatureVersion: "v4"
});


/**
 * 🚀 UPLOAD DOCUMENT TO S3 + SAVE IN MONGODB
 */
router.post("/upload", upload.single("document"), async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    // ❌ validation
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // 📦 S3 upload config
    const fileName = Date.now() + "-" + req.file.originalname;

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: fileName,
      Body: req.file.buffer,
      ContentType: req.file.mimetype,

      // 🔥 OPTIONAL: make file public (only if you want direct URL access)
      // ACL: "public-read"
    };

    // 🚀 upload to S3
    await s3.upload(params).promise();

    // 💾 save in MongoDB
    const newDoc = new Document({
      title: req.body.title,
      fileKey: fileName, // S3 object key
      uploadedBy: req.body.uploadedBy,
      
    });

    await newDoc.save();

    res.json({
      message: "Document uploaded successfully",
      document: newDoc
    });

  } catch (error) {
    console.log("UPLOAD ERROR:", error);
    res.status(500).json({
      error: error.message
    });
  }
});


/**
 * 📄 GET ALL DOCUMENTS (ADMIN / USER)
 */
router.get("/documents", async (req, res) => {
  try {
    const docs = await Document.find().sort({ createdAt: -1 });

    res.json({
      count: docs.length,
      documents: docs
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});


/**
 * 🔍 GET SINGLE DOCUMENT
 */
router.get("/documents/:id", async (req, res) => {
  try {
    const doc = await Document.findById(req.params.id);

    if (!doc) {
      return res.status(404).json({ error: "Document not found" });
    }

    res.json(doc);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});


/**
 * ❌ DELETE DOCUMENT (optional admin feature)
 */
router.delete("/documents/:id", async (req, res) => {
  try {
    const deleted = await Document.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ error: "Document not found" });
    }

    res.json({
      message: "Document deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

router.get("/view/:fileKey", async (req, res) => {
  try {

    let fileKey = req.params.fileKey;

    console.log("FILEKEY RECEIVED:", fileKey);

    // remove old full URL if exists
    if (fileKey.includes("amazonaws.com/")) {
      fileKey = fileKey.split("amazonaws.com/")[1];
    }

    console.log("FINAL FILEKEY:", fileKey);

    const signedUrl = s3.getSignedUrl("getObject", {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: fileKey,
      Expires: 300
    });

    console.log("SIGNED URL:", signedUrl);

    res.json({
      url: signedUrl
    });

  } catch (err) {

    console.log("VIEW ERROR:", err);

    res.status(500).json({
      error: err.message
    });

  }
});
module.exports = router;