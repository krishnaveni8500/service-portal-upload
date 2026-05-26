// // import { Navigate } from "react-router-dom";

// // export default function ProtectedRoute({ children, role }) {
// //   const token = localStorage.getItem("token");
// //   const userRole = localStorage.getItem("role");

// //   if (!token) {
// //     return <Navigate to="/" />;
// //   }

// //   if (role && userRole !== role) {
// //     return <Navigate to="/dashboard" />;
// //   }

// //   return children;
// // }

// import React from "react";
// import { Navigate } from "react-router-dom";

// export default function ProtectedRoute({ children, role }) {
//   const userRole = localStorage.getItem("role");

//   // Debug (VERY IMPORTANT)
//   console.log("USER ROLE:", userRole);
//   console.log("REQUIRED ROLE:", role);

//   if (!userRole) {
//     return <Navigate to="/" />;
//   }

//   if (userRole !== role) {
//     return <Navigate to="/" />;
//   }

//   return children;
// }

import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  const userRole = localStorage.getItem("role");

  console.log("USER ROLE:", userRole);
  console.log("REQUIRED ROLE:", role);

  if (!userRole) {
    return <Navigate to="/" />;
  }

  // ADMIN CAN ACCESS EVERYTHING
  if (userRole === "admin") {
    return children;
  }

  // NORMAL USER CHECK
  if (userRole !== role) {
    return <Navigate to="/" />;
  }

  return children;
}