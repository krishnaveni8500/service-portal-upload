// const express = require("express");
// const router = express.Router();
// const multer = require("multer");
// const upload = multer();
// const Service = require("../models/Service");
// const uploadFile = require("../utils/s3");
// const auth = require("../middleware/authMiddleware");

// // CREATE SERVICE
// router.post("/add", auth, upload.single("file"), async (req, res) => {
//   try {
//     const fileUrl = await uploadFile(req.file);

//     const service = new Service({
//       userId: req.user.id,
//       title: req.body.title,
//       description: req.body.description,
//       fileUrl
//     });

//     await service.save();
//     res.json(service);

//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // GET ALL SERVICES (ADMIN VIEW)
// router.get("/all", auth, async (req, res) => {
//   const services = await Service.find();
//   res.json(services);
// });

// // GET USER SERVICES
// router.get("/my", auth, async (req, res) => {
//   const services = await Service.find({ userId: req.user.id });
//   res.json(services);
// });

// // 👀 TRACK VIEW
// router.post("/view/:id", auth, async (req, res) => {
//   try {
//     const service = await Service.findById(req.params.id);

//     if (!service) return res.status(404).json("Not found");

//     service.viewedBy.push({
//       userId: req.user.id
//     });

//     await service.save();

//     res.json({ message: "View recorded" });

//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const multer = require("multer");

const Service = require("../models/Service");
const uploadFile = require("../utils/s3");
const auth = require("../middleware/authMiddleware");

// ✅ FIXED MULTER (required for S3 buffer)
const storage = multer.memoryStorage();
const upload = multer({ storage });

/* =========================
   CREATE SERVICE (UPLOAD)
========================= */
router.post("/add", auth, upload.single("file"), async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    // ❌ file missing check
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // ☁️ upload to S3
    const fileUrl = await uploadFile(req.file);

    // 💾 save in MongoDB
    const service = new Service({
      userId: req.user.id,
      title: req.body.title,
      description: req.body.description,
      fileUrl
    });

    await service.save();

    res.json({
      message: "Service created successfully",
      service
    });

  } catch (err) {
    console.log("UPLOAD ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

/* =========================
   GET ALL (ADMIN)
========================= */
router.get("/all", auth, async (req, res) => {
  const services = await Service.find();
  res.json(services);
});

/* =========================
   GET USER SERVICES
========================= */
router.get("/my", auth, async (req, res) => {
  const services = await Service.find({ userId: req.user.id });
  res.json(services);
});

/* =========================
   TRACK VIEW
========================= */
router.post("/view/:id", auth, async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({ message: "Not found" });
    }

    service.viewedBy.push({
      userId: req.user.id
    });

    await service.save();

    res.json({ message: "View recorded" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;