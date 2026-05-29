// // // // // // // import { useState } from "react";
// // // // // // // import API from "../api";
// // // // // // // import "../index.css";

// // // // // // // export default function Dashboard() {
// // // // // // //   const [title, setTitle] = useState("");
// // // // // // //   const [description, setDescription] = useState("");
// // // // // // //   const [file, setFile] = useState(null);
// // // // // // //   const [loading, setLoading] = useState(false);

// // // // // // //   // 👇 ROLE FROM LOCAL STORAGE
// // // // // // //   const role = localStorage.getItem("role");

// // // // // // //   // 📤 UPLOAD FUNCTION (USER ONLY)
// // // // // // //   const upload = async () => {
// // // // // // //     if (!title || !description || !file) {
// // // // // // //       alert("Please fill all fields");
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     setLoading(true);

// // // // // // //     try {
// // // // // // //       const formData = new FormData();
// // // // // // //       formData.append("title", title);
// // // // // // //       formData.append("description", description);
// // // // // // //       formData.append("file", file);

// // // // // // //       await API.post("/service/add", formData);

// // // // // // //       alert("Uploaded successfully!");

// // // // // // //       setTitle("");
// // // // // // //       setDescription("");
// // // // // // //       setFile(null);
// // // // // // //     } catch (err) {
// // // // // // //       alert("Upload failed");
// // // // // // //     }

// // // // // // //     setLoading(false);
// // // // // // //   };

// // // // // // //   // 🚪 LOGOUT
// // // // // // //   const logout = () => {
// // // // // // //     localStorage.clear();
// // // // // // //     window.location.href = "/";
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div>

// // // // // // //       {/* NAVBAR */}
// // // // // // //       <div className="navbar">
// // // // // // //         <h3>Service Portal ({role})</h3>
// // // // // // //         <button onClick={logout} style={{ width: "100px" }}>
// // // // // // //           Logout
// // // // // // //         </button>
// // // // // // //       </div>

// // // // // // //       {/* MAIN CONTAINER */}
// // // // // // //       <div className="container">

// // // // // // //         {/* 👤 USER SECTION */}
// // // // // // //         {role === "user" && (
// // // // // // //           <>
// // // // // // //             <h2>Upload Service</h2>

// // // // // // //             <input
// // // // // // //               placeholder="Title"
// // // // // // //               value={title}
// // // // // // //               onChange={(e) => setTitle(e.target.value)}
// // // // // // //             />

// // // // // // //             <input
// // // // // // //               placeholder="Description"
// // // // // // //               value={description}
// // // // // // //               onChange={(e) => setDescription(e.target.value)}
// // // // // // //             />

// // // // // // //             <input
// // // // // // //               type="file"
// // // // // // //               onChange={(e) => setFile(e.target.files[0])}
// // // // // // //             />

// // // // // // //             <button onClick={upload} disabled={loading}>
// // // // // // //               {loading ? "Uploading..." : "Upload"}
// // // // // // //             </button>
// // // // // // //           </>
// // // // // // //         )}

// // // // // // //         {/* 👨‍💼 ADMIN SECTION */}
// // // // // // //         {role === "admin" && (
// // // // // // //           <div>
// // // // // // //             <h2>Admin Dashboard</h2>
// // // // // // //             <p>Admin can only VIEW services (no upload permission)</p>
// // // // // // //           </div>
// // // // // // //         )}

// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // import { useState } from "react";

// // // // // // export default function Dashboard() {
// // // // // //   const role = localStorage.getItem("role");

// // // // // //   return (
// // // // // //     <div>

// // // // // //       <div className="navbar">
// // // // // //         <h3>Service Portal ({role})</h3>
// // // // // //       </div>

// // // // // //       <div className="container">

// // // // // //         {!role && <h2>Loading...</h2>}

// // // // // //         {role === "user" && (
// // // // // //           <h2>User Dashboard - Upload Allowed</h2>
// // // // // //         )}

// // // // // //         {role === "admin" && (
// // // // // //           <h2>Admin Dashboard - View Only</h2>
// // // // // //         )}

// // // // // //         {role !== "user" && role !== "admin" && (
// // // // // //           <h2>Invalid Role: {role}</h2>
// // // // // //         )}

// // // // // //       </div>

// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // import "../index.css";

// // // // // export default function Dashboard() {
// // // // //   const role = localStorage.getItem("role");

// // // // //   return (
// // // // //     <div>
// // // // //       <div className="navbar">
// // // // //         <h3>Service Portal ({role})</h3>
// // // // //       </div>

// // // // //       <div className="container">
// // // // //         {role === "user" && <h2>User Dashboard</h2>}
// // // // //         {role === "admin" && <h2>Admin Dashboard</h2>}

// // // // //         {!role && <h2>Loading...</h2>}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // import { useState } from "react";
// // // // import API from "../api";
// // // // import "../index.css";

// // // // export default function Dashboard() {
// // // //   const role = localStorage.getItem("role");

// // // //   const [title, setTitle] = useState("");
// // // //   const [description, setDescription] = useState("");
// // // //   const [file, setFile] = useState(null);
// // // //   const [loading, setLoading] = useState(false);

// // // //   const upload = async () => {
// // // //     if (!title || !description || !file) {
// // // //       alert("Please fill all fields");
// // // //       return;
// // // //     }

// // // //     setLoading(true);

// // // //     try {
// // // //       const formData = new FormData();
// // // //       formData.append("title", title);
// // // //       formData.append("description", description);
// // // //       formData.append("file", file);

// // // //       await API.post("/service/add", formData, {
// // // //         headers: {
// // // //           Authorization: localStorage.getItem("token")
// // // //         }
// // // //       });

// // // //       alert("Uploaded successfully!");

// // // //       setTitle("");
// // // //       setDescription("");
// // // //       setFile(null);

// // // //     } catch (err) {
// // // //       alert("Upload failed");
// // // //       console.log(err);
// // // //     }

// // // //     setLoading(false);
// // // //   };

// // // //   return (
// // // //     <div>

// // // //       {/* NAVBAR */}
// // // //       <div className="navbar">
// // // //         <h3>Service Portal ({role})</h3>
// // // //       </div>

// // // //       <div className="container">

// // // //         {/* USER DASHBOARD */}
// // // //         {role === "user" && (
// // // //           <>
// // // //             <h2>User Dashboard - Upload Service</h2>

// // // //             <input
// // // //               placeholder="Title"
// // // //               value={title}
// // // //               onChange={(e) => setTitle(e.target.value)}
// // // //             />

// // // //             <input
// // // //               placeholder="Description"
// // // //               value={description}
// // // //               onChange={(e) => setDescription(e.target.value)}
// // // //             />

// // // //             <input
// // // //               type="file"
// // // //               onChange={(e) => setFile(e.target.files[0])}
// // // //             />

// // // //             <button onClick={upload} disabled={loading}>
// // // //               {loading ? "Uploading..." : "Upload"}
// // // //             </button>
// // // //           </>
// // // //         )}

// // // //         {/* ADMIN DASHBOARD */}
// // // //         {role === "admin" && (
// // // //           <h2>Admin Dashboard - Go to Admin Page</h2>
// // // //         )}

// // // //         {/* ERROR CASE */}
// // // //         {!role && <h2>Loading...</h2>}

// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // import { useState } from "react";
// // // import API from "../api";
// // // import "../index.css";

// // // export default function Dashboard() {
// // //   const role = localStorage.getItem("role");
// // //   const token = localStorage.getItem("token");

// // //   const [title, setTitle] = useState("");
// // //   const [description, setDescription] = useState("");
// // //   const [file, setFile] = useState(null);
// // //   const [loading, setLoading] = useState(false);

// // //   // 🚀 UPLOAD FUNCTION (USER ONLY)
// // //   const upload = async () => {
// // //     if (!title || !description || !file) {
// // //       alert("Please fill all fields");
// // //       return;
// // //     }

// // //     setLoading(true);

// // //     try {
// // //       const formData = new FormData();
// // //       formData.append("title", title);
// // //       formData.append("description", description);
// // //       formData.append("file", file); // MUST BE "file"

// // //       const res = await API.post("/service/add", formData, {
// // //         headers: {
// // //           Authorization: "Bearer " + token,
// // //           "Content-Type": "multipart/form-data"
// // //         }
// // //       });

// // //       console.log(res.data);
// // //       alert("Uploaded successfully!");

// // //       setTitle("");
// // //       setDescription("");
// // //       setFile(null);

// // //     } catch (err) {
// // //       console.log(err.response?.data || err.message);
// // //       alert("Upload failed");
// // //     }

// // //     setLoading(false);
// // //   };

// // //   return (
// // //     <div>

// // //       {/* NAVBAR */}
// // //       <div className="navbar">
// // //         <h3>Service Portal ({role})</h3>
// // //       </div>

// // //       <div className="container">

// // //         {/* USER DASHBOARD */}
// // //         {role === "user" && (
// // //           <>
// // //             <h2>User Dashboard - Upload Service</h2>

// // //             <input
// // //               placeholder="Title"
// // //               value={title}
// // //               onChange={(e) => setTitle(e.target.value)}
// // //             />

// // //             <input
// // //               placeholder="Description"
// // //               value={description}
// // //               onChange={(e) => setDescription(e.target.value)}
// // //             />

// // //             <input
// // //               type="file"
// // //               onChange={(e) => setFile(e.target.files[0])}
// // //             />

// // //             <button onClick={upload} disabled={loading}>
// // //               {loading ? "Uploading..." : "Upload"}
// // //             </button>
// // //           </>
// // //         )}

// // //         {/* ADMIN DASHBOARD */}
// // //         {role === "admin" && (
// // //           <>
// // //             <h2>Admin Dashboard</h2>
// // //             <p>Admin can only view uploaded services</p>
// // //           </>
// // //         )}

// // //         {/* NO ROLE */}
// // //         {!role && <h2>Loading...</h2>}

// // //       </div>
// // //     </div>
// // //   );
// // // }

// // import { useEffect,useState } from "react";
// // import API from "../api";
// // import "../index.css";

// // export default function Dashboard() {

// //   const role = localStorage.getItem("role");
// //   const token = localStorage.getItem("token");

// //   const [title, setTitle] = useState("");
// //   const [description, setDescription] = useState("");
// //   const [file, setFile] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   // ✅ STORE USER SERVICES
// //   const [services, setServices] = useState([]);

// //   // ✅ GET USER SERVICES
// //   useEffect(() => {

// //     API.get("/service/my", {
// //       headers: {
// //         Authorization: `Bearer ${token}`
// //       }
// //     })
// //       .then((res) => {
// //         console.log("MY SERVICES:", res.data);
// //         setServices(res.data);
// //       })
// //       .catch((err) => {
// //         console.log(err.response?.data || err.message);
// //       });

// //   }, [token]);

// //   // 🚀 UPLOAD FUNCTION
// //   const upload = async () => {

// //     if (!title || !description || !file) {
// //       alert("Please fill all fields");
// //       return;
// //     }

// //     setLoading(true);

// //     try {

// //       const formData = new FormData();
// //       formData.append("title", title);
// //       formData.append("description", description);

// //       // ⚠️ MUST MATCH backend multer field name
// //       formData.append("file", file);

// //       const res = await API.post("/service/add", formData, {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //           "Content-Type": "multipart/form-data"
// //         }
// //       });

// //       console.log(res.data);
// //       alert("Uploaded successfully!");

// //       // ✅ RESET FORM PROPERLY
// //       setTitle("");
// //       setDescription("");
// //       setFile(null);

// //       // 🔥 IMPORTANT: refresh page or data if needed
// //       window.location.reload();

// //     } catch (err) {
// //       console.log(err.response?.data || err.message);
// //       alert("Upload failed");
// //     }

// //     setLoading(false);
// //   };
// //    // ✅ LOGOUT
// //   const logout = () => {
// //     localStorage.clear();
// //     window.location.href = "/";
// //   };
// //   return (
// //     <div style={styles.page}>

// //       {/* NAVBAR */}
// //       <div style={styles.navbar}>
// //         <h3 style={styles.title}>Service Portal ({role})</h3>

// //         <button
// //           style={styles.logoutBtn}
// //           onClick={logout}
// //         >
// //           Logout
// //         </button>

// //       </div>

// //       <div style={styles.container}>

// //         {/* USER DASHBOARD */}
// //         {role === "user" && (
// //           <>
// //             <h2>User Dashboard - Upload Service</h2>

// //             <input
// //               placeholder="Title"
// //               value={title}
// //               onChange={(e) => setTitle(e.target.value)}
// //             />

// //             <input
// //               placeholder="Description"
// //               value={description}
// //               onChange={(e) => setDescription(e.target.value)}
// //             />

// //             <input
// //               type="file"
// //               onChange={(e) => setFile(e.target.files[0])}
// //             />

// //             <button  style={styles.uploadBtn} onClick={upload} disabled={loading}>
// //               {loading ? "Uploading..." : "Upload"}
// //             </button>
          
        

       

// //          {/* ✅ USER TABLE */}
// //             <h2 style={{ marginTop: "40px" }}>
// //               My Uploaded Services
// //             </h2>

// //             <div style={styles.tableWrapper}>

// //               <table style={styles.table}>

// //                 <thead>
// //                   <tr>
// //                     <th style={styles.th}>Title</th>
// //                     <th style={styles.th}>Description</th>
// //                     <th style={styles.th}>Viewed By</th>
// //                     <th style={styles.th}>Date</th>
// //                     <th style={styles.th}>File</th>
// //                   </tr>
// //                 </thead>

// //                 <tbody>

// //                   {services.map((s) => (

// //                     <tr key={s._id}>

// //                       <td style={styles.td}>
// //                         {s.title}
// //                       </td>

// //                       <td style={styles.td}>
// //                         {s.description}
// //                       </td>

// //                       <td style={styles.td}>
// //                         {s.viewedBy && s.viewedBy.length > 0
// //                           ? s.viewedBy.map(v => v.userId?.name).join(", ")
// //                           : "Not viewed yet"}
// //                       </td>

// //                       <td style={styles.td}>
// //                         {new Date(s.createdAt).toLocaleString()}
// //                       </td>

// //                       <td style={styles.td}>
// //                         <button
// //                           style={styles.viewBtn}
// //                           onClick={() => window.open(s.fileUrl, "_blank")}
// //                         >
// //                           View
// //                         </button>
// //                       </td>

// //                     </tr>

// //                   ))}

// //                 </tbody>

// //               </table>

// //             </div>

// //           </>
// //         )}

// //         {!role && <h2>Loading...</h2>}


// //       </div>
// //     </div>
// //   );
// // }
// // /* ================= CSS ================= */

// // const styles = {

// //   page: {
// //     fontFamily: "Arial",
// //     backgroundColor: "#f4f6f9",
// //     minHeight: "100vh"
// //   },

// //   navbar: {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     backgroundColor: "#03042c",
// //     color: "white",
// //     padding: "15px 20px"
// //   },

// //   title: {
// //     margin: 0,
// //     fontSize: "18px"
// //   },

// //   logoutBtn: {
// //     backgroundColor: "#ef4444",
// //     color: "white",
// //     border: "none",
// //     padding: "6px 14px",
// //     borderRadius: "20px",
// //     cursor: "pointer"
// //   },

// //   container: {
// //     padding: "25px"
// //   },

// //   input: {
// //     display: "block",
// //     width: "300px",
// //     marginBottom: "15px",
// //     padding: "10px",
// //     borderRadius: "6px",
// //     border: "1px solid #ccc"
// //   },

// //   uploadBtn: {
// //     backgroundColor: "#2563eb",
// //     color: "white",
// //     border: "none",
// //     padding: "10px 16px",
// //     borderRadius: "6px",
// //     cursor: "pointer"
// //   },

// //   tableWrapper: {
// //     overflowX: "auto",
// //     marginTop: "20px"
// //   },

// //   table: {
// //     width: "100%",
// //     borderCollapse: "collapse",
// //     backgroundColor: "white",
// //     boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
// //   },

// //   th: {
// //     backgroundColor: "#111827",
// //     color: "white",
// //     padding: "12px",
// //     textAlign: "left"
// //   },

// //   td: {
// //     padding: "10px",
// //     borderBottom: "1px solid #ddd"
// //   },

// //   viewBtn: {
// //     backgroundColor: "#2563eb",
// //     color: "white",
// //     border: "none",
// //     padding: "6px 10px",
// //     borderRadius: "5px",
// //     cursor: "pointer"
// //   }

// // };

// import { useEffect, useState } from "react";
// import API from "../api";
// import "../index.css";

// export default function Dashboard() {

//   const role = localStorage.getItem("role");
//   const token = localStorage.getItem("token");

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // ✅ STORE USER SERVICES
//   const [services, setServices] = useState([]);

//   /* =========================
//      GET USER SERVICES
//   ========================= */
//   useEffect(() => {

//     API.get("/service/my", {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     })
//       .then((res) => {
//         console.log("MY SERVICES:", res.data);
//         setServices(res.data);
//       })
//       .catch((err) => {
//         console.log(err.response?.data || err.message);
//       });

//   }, [token]);

//   /* =========================
//      UPLOAD FUNCTION
//   ========================= */
//   const upload = async () => {

//     if (!title || !description || !file) {
//       alert("Please fill all fields");
//       return;
//     }

//     setLoading(true);

//     try {

//       const formData = new FormData();

//       formData.append("title", title);
//       formData.append("description", description);
//       formData.append("file", file);

//       const res = await API.post("/service/add", formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data"
//         }
//       });

//       console.log(res.data);

//       alert("Uploaded successfully!");

//       // RESET FORM
//       setTitle("");
//       setDescription("");
//       setFile(null);

//       // REFRESH DATA
//       window.location.reload();

//     } catch (err) {

//       console.log(err.response?.data || err.message);

//       alert("Upload failed");
//     }

//     setLoading(false);
//   };

//   /* =========================
//      LOGOUT
//   ========================= */
//   const logout = () => {

//     localStorage.clear();

//     window.location.href = "/";
//   };

//   return (
//     <div style={styles.page}>

//       {/* NAVBAR */}
//       <div style={styles.navbar}>

//         <h3 style={styles.title}>
//           Service Portal ({role})
//         </h3>

//         <button
//           style={styles.logoutBtn}
//           onClick={logout}
//         >
//           Logout
//         </button>

//       </div>

//       <div style={styles.container}>

//         {/* USER DASHBOARD */}
//         {role === "user" && (
//           <>

//             <h2>User Dashboard - Upload Service</h2>

//             {/* TITLE */}
//             <input
//               style={styles.input}
//               placeholder="Title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />

//             {/* DESCRIPTION */}
//             <input
//               style={styles.input}
//               placeholder="Description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />

//             {/* FILE */}
//             <input
//               style={styles.input}
//               type="file"
//               onChange={(e) => setFile(e.target.files[0])}
//             />

//             {/* UPLOAD BUTTON */}
//             <button
//               style={styles.uploadBtn}
//               onClick={upload}
//               disabled={loading}
//             >
//               {loading ? "Uploading..." : "Upload"}
//             </button>

//             {/* USER TABLE */}
//             <h2 style={{ marginTop: "40px" }}>
//               My Uploaded Services
//             </h2>

//             <div style={styles.tableWrapper}>

//               <table style={styles.table}>

//                 <thead>
//                   <tr>
//                     <th style={styles.th}>Title</th>
//                     <th style={styles.th}>Description</th>
//                     <th style={styles.th}>Viewed By</th>
//                     <th style={styles.th}>Date</th>
//                     <th style={styles.th}>File</th>
//                   </tr>
//                 </thead>

//                 <tbody>

//                   {services.map((s) => (

//                     <tr key={s._id}>

//                       <td style={styles.td}>
//                         {s.title}
//                       </td>

//                       <td style={styles.td}>
//                         {s.description}
//                       </td>

//                       <td style={styles.td}>
//                         {s.viewedBy && s.viewedBy.length > 0
//                           ? s.viewedBy
//                               .map((v) => v.userId?.name)
//                               .join(", ")
//                           : "Not viewed yet"}
//                       </td>

//                       <td style={styles.td}>
//                         {new Date(s.createdAt).toLocaleString()}
//                       </td>

//                       <td style={styles.td}>

//                         <button
//                           style={styles.viewBtn}
//                           onClick={() =>
//                             window.open(s.fileUrl, "_blank")
//                           }
//                         >
//                           View
//                         </button>

//                       </td>

//                     </tr>

//                   ))}

//                 </tbody>

//               </table>

//             </div>

//           </>
//         )}

//         {!role && <h2>Loading...</h2>}

//       </div>
//     </div>
//   );
// }

// /* =========================
//    CSS
// ========================= */

// const styles = {

//   page: {
//     fontFamily: "Arial",
//     backgroundColor: "#f4f6f9",
//     minHeight: "100vh"
//   },

//   navbar: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     backgroundColor: "#03042c",
//     color: "white",
//     padding: "15px 20px"
//   },

//   title: {
//     margin: 0,
//     fontSize: "18px",
//     fontWeight: "bold"
//   },

//   logoutBtn: {
//     backgroundColor: "#ef4444",
//     color: "white",
//     border: "none",
//     padding: "8px 14px",
//     borderRadius: "20px",
//     cursor: "pointer"
//   },

//   container: {
//     padding: "25px"
//   },

//   input: {
//     display: "block",
//     width: "320px",
//     marginBottom: "15px",
//     padding: "10px",
//     borderRadius: "6px",
//     border: "1px solid #ccc"
//   },

//   uploadBtn: {
//     backgroundColor: "#2563eb",
//     color: "white",
//     border: "none",
//     padding: "10px 16px",
//     borderRadius: "6px",
//     cursor: "pointer"
//   },

//   tableWrapper: {
//     overflowX: "auto",
//     marginTop: "20px"
//   },

//   table: {
//     width: "100%",
//     borderCollapse: "collapse",
//     backgroundColor: "white",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
//   },

//   th: {
//     backgroundColor: "#111827",
//     color: "white",
//     padding: "12px",
//     textAlign: "left"
//   },

//   td: {
//     padding: "10px",
//     borderBottom: "1px solid #ddd"
//   },

//   viewBtn: {
//     backgroundColor: "#2563eb",
//     color: "white",
//     border: "none",
//     padding: "6px 10px",
//     borderRadius: "5px",
//     cursor: "pointer"
//   }

// };

import { useEffect, useState } from "react";
import API from "../api";
import "../index.css";

export default function Dashboard() {

  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  // ================= STATES =================
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const [services, setServices] = useState([]);

  // ✅ DEFAULT PAGE = UPLOAD
  const [activePage, setActivePage] = useState("upload");

  // ================= FETCH USER SERVICES =================
  const fetchServices = async () => {

    try {

      const res = await API.get("/service/my", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setServices(res.data);

    } catch (err) {

      console.log(err.response?.data || err.message);

    }
  };

  useEffect(() => {
    fetchServices();
  }, []);
// ================= VIEW FILE =================
const handleView = async (fileKey) => {

  try {

    let cleanFileKey = fileKey;

    // remove full S3 URL if exists
    if (cleanFileKey.includes("amazonaws.com/")) {

      cleanFileKey =
        cleanFileKey.split("amazonaws.com/")[1];

    }

    console.log("CLEAN FILEKEY:", cleanFileKey);

    const res = await API.get(
      `/document/view/${cleanFileKey}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    console.log("SIGNED URL:", res.data.url);

    // open signed URL
    window.open(res.data.url, "_blank");

  } catch (err) {

    console.log("VIEW ERROR:", err);

  }
};
  // ================= UPLOAD =================
  const upload = async () => {

    if (!title || !description || !file) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {

      const formData = new FormData();

      formData.append("title", title);
      formData.append("description", description);
      formData.append("file", file);

      await API.post("/service/add", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        }
      });

      alert("Uploaded Successfully!");

      // RESET
      setTitle("");
      setDescription("");
      setFile(null);

      // REFRESH TABLE
      fetchServices();

      // REDIRECT TO MY UPLOADS
      setActivePage("uploads");

    } catch (err) {

      console.log(err.response?.data || err.message);
      alert("Upload Failed");

    }

    setLoading(false);
  };

  // ================= LOGOUT =================
  const logout = () => {

    localStorage.clear();

    window.location.href = "/";

  };

  return (

    <div style={styles.page}>

      {/* ================= NAVBAR ================= */}

      <div style={styles.navbar}>

        {/* LEFT */}
        <div style={styles.logo}>
          Service Portal
        </div>

        {/* RIGHT */}
        <div style={styles.navRight}>

          <button
            style={
              activePage === "upload"
                ? styles.activeBtn
                : styles.navBtn
            }
            onClick={() => setActivePage("upload")}
          >
            Upload Service
          </button>

          <button
            style={
              activePage === "uploads"
                ? styles.activeBtn
                : styles.navBtn
            }
            onClick={() => setActivePage("uploads")}
          >
            My Uploads
          </button>

          <button
            style={styles.logoutBtn}
            onClick={logout}
          >
            Logout
          </button>

        </div>

      </div>

      {/* ================= MAIN CONTENT ================= */}

      <div style={styles.container}>

        {/* ================= UPLOAD PAGE ================= */}

        {activePage === "upload" && (

          <div style={styles.card}>

            <h2 style={styles.heading}>
              Upload Service
            </h2>

            <input
              style={styles.input}
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              style={styles.textarea}
              placeholder="Enter Description"
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
            />

            <input
              style={styles.fileInput}
              type="file"
              onChange={(e) =>
                setFile(e.target.files[0])
              }
            />

            <button
              style={styles.uploadBtn}
              onClick={upload}
              disabled={loading}
            >
              {loading ? "Uploading..." : "Upload"}
            </button>

          </div>
        )}

        {/* ================= MY UPLOADS PAGE ================= */}

        {activePage === "uploads" && (

          <div>

            <h2 style={styles.heading}>
              My Uploaded Services
            </h2>

            <div style={styles.tableWrapper}>

              <table style={styles.table}>

                <thead>

                  <tr>

                    <th style={styles.th}>Title</th>

                    <th style={styles.th}>
                      Description
                    </th>

                    <th style={styles.th}>
                      Viewed By
                    </th>

                    <th style={styles.th}>
                      Date
                    </th>

                    <th style={styles.th}>
                      File
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {services.length === 0 ? (

                    <tr>

                      <td
                        colSpan="5"
                        style={styles.empty}
                      >
                        No Uploads Found
                      </td>

                    </tr>

                  ) : (

                    services.map((s) => (

                      <tr key={s._id}>

                        <td style={styles.td}>
                          {s.title}
                        </td>

                        <td style={styles.td}>
                          {s.description}
                        </td>

                        <td style={styles.td}>

                          {s.viewedBy &&
                          s.viewedBy.length > 0
                            ? s.viewedBy
                                .map(
                                  (v) =>
                                    v.userId?.name
                                )
                                .join(", ")
                            : "Not viewed yet"}

                        </td>

                        <td style={styles.td}>
                          {new Date(
                            s.createdAt
                          ).toLocaleString()}
                        </td>

                     <td style={styles.td}>

                      <button
                        style={styles.viewBtn}
                        onClick={() => handleView(s.fileKey)}
                      >
                        View
                      </button>

                    </td>

                      </tr>

                    ))
                  )}

                </tbody>

              </table>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}

/* ================= CSS ================= */

const styles = {

  page: {
    backgroundColor: "#f4f7fb",
    minHeight: "100vh",
    fontFamily: "Arial"
  },

  // ================= NAVBAR =================

  navbar: {
    backgroundColor: "#03042c",
    padding: "16px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
  },

  logo: {
    color: "white",
    fontSize: "24px",
    fontWeight: "bold"
  },

  navRight: {
    display: "flex",
    gap: "15px",
    alignItems: "center"
  },

  navBtn: {
    backgroundColor: "transparent",
    color: "white",
    border: "1px solid white",
    padding: "10px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "0.3s"
  },

  activeBtn: {
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    padding: "10px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px"
  },

  logoutBtn: {
    backgroundColor: "#ef4444",
    color: "white",
    border: "none",
    padding: "10px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px"
  },

  // ================= CONTAINER =================

  container: {
    padding: "40px"
  },

  card: {
    maxWidth: "650px",
    margin: "auto",
    backgroundColor: "white",
    padding: "35px",
    borderRadius: "12px",
    boxShadow: "0 4px 14px rgba(0,0,0,0.1)"
  },

  heading: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#111827"
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "18px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    fontSize: "15px"
  },

  textarea: {
    width: "100%",
    height: "120px",
    padding: "12px",
    marginBottom: "18px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    resize: "none",
    fontSize: "15px"
  },

  fileInput: {
    marginBottom: "20px"
  },

  uploadBtn: {
    width: "100%",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    padding: "14px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold"
  },

  // ================= TABLE =================

  tableWrapper: {
    overflowX: "auto",
    marginTop: "20px"
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "white",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 14px rgba(0,0,0,0.1)"
  },

  th: {
    backgroundColor: "#111827",
    color: "white",
    padding: "14px",
    textAlign: "left",
    fontSize: "14px"
  },

  td: {
    padding: "14px",
    borderBottom: "1px solid #e5e7eb",
    fontSize: "14px"
  },

  empty: {
    textAlign: "center",
    padding: "25px",
    fontSize: "15px"
  },

  viewBtn: {
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    padding: "8px 14px",
    borderRadius: "6px",
    cursor: "pointer"
  }

};