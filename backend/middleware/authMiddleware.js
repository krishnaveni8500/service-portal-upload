// const jwt = require("jsonwebtoken");

// module.exports = (req, res, next) => {
//   const token = req.header("Authorization");

//   if (!token) return res.status(401).json({ message: "No token" });

//   try {
//     const verified = jwt.verify(token, "secretkey");
//     req.user = verified;
//     next();
//   } catch (err) {
//     res.status(400).json({ message: "Invalid token" });
//   }
// };
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  // remove "Bearer "
  const token = authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : authHeader;

  try {
    const verified = jwt.verify(token, "secretkey");
    req.user = verified;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};