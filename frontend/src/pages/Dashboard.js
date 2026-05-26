// // // // import { useState } from "react";
// // // // import API from "../api";
// // // // import "../index.css";

// // // // export default function Dashboard() {
// // // //   const [title, setTitle] = useState("");
// // // //   const [description, setDescription] = useState("");
// // // //   const [file, setFile] = useState(null);
// // // //   const [loading, setLoading] = useState(false);

// // // //   // 👇 ROLE FROM LOCAL STORAGE
// // // //   const role = localStorage.getItem("role");

// // // //   // 📤 UPLOAD FUNCTION (USER ONLY)
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

// // // //       await API.post("/service/add", formData);

// // // //       alert("Uploaded successfully!");

// // // //       setTitle("");
// // // //       setDescription("");
// // // //       setFile(null);
// // // //     } catch (err) {
// // // //       alert("Upload failed");
// // // //     }

// // // //     setLoading(false);
// // // //   };

// // // //   // 🚪 LOGOUT
// // // //   const logout = () => {
// // // //     localStorage.clear();
// // // //     window.location.href = "/";
// // // //   };

// // // //   return (
// // // //     <div>

// // // //       {/* NAVBAR */}
// // // //       <div className="navbar">
// // // //         <h3>Service Portal ({role})</h3>
// // // //         <button onClick={logout} style={{ width: "100px" }}>
// // // //           Logout
// // // //         </button>
// // // //       </div>

// // // //       {/* MAIN CONTAINER */}
// // // //       <div className="container">

// // // //         {/* 👤 USER SECTION */}
// // // //         {role === "user" && (
// // // //           <>
// // // //             <h2>Upload Service</h2>

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

// // // //         {/* 👨‍💼 ADMIN SECTION */}
// // // //         {role === "admin" && (
// // // //           <div>
// // // //             <h2>Admin Dashboard</h2>
// // // //             <p>Admin can only VIEW services (no upload permission)</p>
// // // //           </div>
// // // //         )}

// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // import { useState } from "react";

// // // export default function Dashboard() {
// // //   const role = localStorage.getItem("role");

// // //   return (
// // //     <div>

// // //       <div className="navbar">
// // //         <h3>Service Portal ({role})</h3>
// // //       </div>

// // //       <div className="container">

// // //         {!role && <h2>Loading...</h2>}

// // //         {role === "user" && (
// // //           <h2>User Dashboard - Upload Allowed</h2>
// // //         )}

// // //         {role === "admin" && (
// // //           <h2>Admin Dashboard - View Only</h2>
// // //         )}

// // //         {role !== "user" && role !== "admin" && (
// // //           <h2>Invalid Role: {role}</h2>
// // //         )}

// // //       </div>

// // //     </div>
// // //   );
// // // }

// // import "../index.css";

// // export default function Dashboard() {
// //   const role = localStorage.getItem("role");

// //   return (
// //     <div>
// //       <div className="navbar">
// //         <h3>Service Portal ({role})</h3>
// //       </div>

// //       <div className="container">
// //         {role === "user" && <h2>User Dashboard</h2>}
// //         {role === "admin" && <h2>Admin Dashboard</h2>}

// //         {!role && <h2>Loading...</h2>}
// //       </div>
// //     </div>
// //   );
// // }

// import { useState } from "react";
// import API from "../api";
// import "../index.css";

// export default function Dashboard() {
//   const role = localStorage.getItem("role");

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(false);

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

//       await API.post("/service/add", formData, {
//         headers: {
//           Authorization: localStorage.getItem("token")
//         }
//       });

//       alert("Uploaded successfully!");

//       setTitle("");
//       setDescription("");
//       setFile(null);

//     } catch (err) {
//       alert("Upload failed");
//       console.log(err);
//     }

//     setLoading(false);
//   };

//   return (
//     <div>

//       {/* NAVBAR */}
//       <div className="navbar">
//         <h3>Service Portal ({role})</h3>
//       </div>

//       <div className="container">

//         {/* USER DASHBOARD */}
//         {role === "user" && (
//           <>
//             <h2>User Dashboard - Upload Service</h2>

//             <input
//               placeholder="Title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />

//             <input
//               placeholder="Description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />

//             <input
//               type="file"
//               onChange={(e) => setFile(e.target.files[0])}
//             />

//             <button onClick={upload} disabled={loading}>
//               {loading ? "Uploading..." : "Upload"}
//             </button>
//           </>
//         )}

//         {/* ADMIN DASHBOARD */}
//         {role === "admin" && (
//           <h2>Admin Dashboard - Go to Admin Page</h2>
//         )}

//         {/* ERROR CASE */}
//         {!role && <h2>Loading...</h2>}

//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import API from "../api";
import "../index.css";

export default function Dashboard() {
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // 🚀 UPLOAD FUNCTION (USER ONLY)
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
      formData.append("file", file); // MUST BE "file"

      const res = await API.post("/service/add", formData, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "multipart/form-data"
        }
      });

      console.log(res.data);
      alert("Uploaded successfully!");

      setTitle("");
      setDescription("");
      setFile(null);

    } catch (err) {
      console.log(err.response?.data || err.message);
      alert("Upload failed");
    }

    setLoading(false);
  };

  return (
    <div>

      {/* NAVBAR */}
      <div className="navbar">
        <h3>Service Portal ({role})</h3>
      </div>

      <div className="container">

        {/* USER DASHBOARD */}
        {role === "user" && (
          <>
            <h2>User Dashboard - Upload Service</h2>

            <input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />

            <button onClick={upload} disabled={loading}>
              {loading ? "Uploading..." : "Upload"}
            </button>
          </>
        )}

        {/* ADMIN DASHBOARD */}
        {role === "admin" && (
          <>
            <h2>Admin Dashboard</h2>
            <p>Admin can only view uploaded services</p>
          </>
        )}

        {/* NO ROLE */}
        {!role && <h2>Loading...</h2>}

      </div>
    </div>
  );
}