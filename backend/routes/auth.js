// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// // REGISTER
// router.post("/register", async (req, res) => {
//   const { name, email, password, role } = req.body;

//   const hash = await bcrypt.hash(password, 10);

//   const user = new User({
//     name,
//     email,
//     password: hash,
//     role: role|| "user"
//   });

//   await user.save();

//   res.json({ userId: user._id, role: user.role });
// });

// // LOGIN
// router.post("/login", async (req, res) => {
//   const user = await User.findOne({ email: req.body.email });

//   if (!user) return res.status(400).json("User not found");

//   const valid = await bcrypt.compare(req.body.password, user.password);

//   if (!valid) return res.status(400).json("Wrong password");

//   const token = jwt.sign(
//     { id: user._id, role: user.role },
//     "secretkey"
//   );

//   res.json({ token, role: user.role });
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ================= REGISTER =================
router.post("/register", async (req, res) => {

  try {

    const { name, email, password, role, superKey } = req.body;

    // ✅ CHECK IF USER EXISTS
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    // ✅ SUPER KEY CHECK FOR ADMIN
    if (role === "admin") {

      if (superKey !== process.env.SUPER_ADMIN_KEY) {

        return res.status(401).json({
          message: "Invalid Super Admin Key"
        });

      }
    }

    // ✅ HASH PASSWORD
    const hash = await bcrypt.hash(password, 10);

    // ✅ CREATE USER
    const user = new User({
      name,
      email,
      password: hash,
      role: role || "user"
    });

    await user.save();

    res.json({
      message: "Registered Successfully",
      userId: user._id,
      role: user.role
    });

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }

});

// ================= LOGIN =================
router.post("/login", async (req, res) => {

  try {

    const user = await User.findOne({
      email: req.body.email
    });

    if (!user) {
      return res.status(400).json("User not found");
    }

    const valid = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!valid) {
      return res.status(400).json("Wrong password");
    }

    // ✅ TOKEN
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role
      },
      "secretkey"
    );

    res.json({
      token,
      role: user.role
    });

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }

});

module.exports = router;