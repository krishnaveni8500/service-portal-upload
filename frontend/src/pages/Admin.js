// // // // import { useEffect, useState } from "react";
// // // // import API from "../api";
// // // // import "../index.css";

// // // // export default function Admin() {
// // // //   const [services, setServices] = useState([]);

// // // //   useEffect(() => {
// // // //     API.get("/service/all").then(res => setServices(res.data));
// // // //   }, []);

// // // //   const logout = () => {
// // // //     localStorage.clear();
// // // //     window.location.href = "/";
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <div className="navbar">
// // // //         <h3>Admin Panel</h3>
// // // //         <button onClick={logout} style={{ width: "100px" }}>Logout</button>
// // // //       </div>

// // // //       <div className="container">
// // // //         <h2>All Services</h2>

// // // //         {services.map((s) => (
// // // //           <div className="card" key={s._id}>
// // // //             <h3>{s.title}</h3>
// // // //             <p>{s.description}</p>
// // // //             <p><b>User:</b> {s.userId}</p>
// // // //             <a href={s.fileUrl} target="_blank">Open File</a>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // import { useEffect, useState } from "react";
// // // import API from "../api";
// // // import "../index.css";

// // // export default function Admin() {
// // //   const [services, setServices] = useState([]);

// // //   useEffect(() => {
// // //     API.get("/service/all", {
// // //       headers: {
// // //         Authorization: `Bearer ${localStorage.getItem("token")}`
// // //       }
// // //     }).then(res => setServices(res.data));
// // //   }, []);

// // //   const logout = () => {
// // //     localStorage.clear();
// // //     window.location.href = "/";
// // //   };

// // //   return (
// // //     <div>
// // //       <div className="navbar">
// // //         <h3>Admin Panel</h3>
// // //         <button onClick={logout}>Logout</button>
// // //       </div>

// // //       <div className="container">
// // //         <h2>All Services</h2>

// // //         <table border="1" cellPadding="10">
// // //           <thead>
// // //             <tr>
// // //               <th>Title</th>
// // //               <th>Description</th>
// // //               <th>User</th>
// // //               <th>File</th>
// // //             </tr>
// // //           </thead>

// // //           <tbody>
// // //             {services.map((s) => (
// // //               <tr key={s._id}>
// // //                 <td>{s.title}</td>
// // //                 <td>{s.description}</td>
// // //                 <td>{s.userId}</td>
// // //                 <td>
// // //                   <a href={s.fileUrl} target="_blank">
// // //                     Open
// // //                   </a>
// // //                 </td>
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // import { useEffect, useState } from "react";
// // import API from "../api";
// // import "../index.css";

// // export default function Admin() {

// //   const [services, setServices] = useState([]);

// //   useEffect(() => {

// //     API.get("/service/all")

// //       .then((res) => {

// //         console.log(res.data);

// //         setServices(res.data);

// //       })

// //       .catch((err) => {

// //         console.log(err);

// //       });

// //   }, []);

// //   const logout = () => {

// //     localStorage.clear();

// //     window.location.href = "/";

// //   };

// //   return (

// //     <div>

// //       <div className="navbar">

// //         <h3>Admin Panel</h3>

// //         <button onClick={logout}>
// //           Logout
// //         </button>

// //       </div>

// //       <div className="container">

// //         <h2>All Services</h2>

// //         {services.map((s) => (

// //           <div
// //             key={s._id}
// //             style={{
// //               border: "1px solid black",
// //               padding: "10px",
// //               marginBottom: "10px"
// //             }}
// //           >

// //             <h3>{s.title}</h3>

// //             <p>
// //               {s.description}
// //             </p>

// //             <p>
// //               User ID:
// //               {s.userId}
// //             </p>

// //             <a
// //               href={s.fileUrl}
// //               target="_blank"
// //               rel="noreferrer"
// //             >
// //               Open File
// //             </a>

// //           </div>

// //         ))}

// //       </div>

// //     </div>

// //   );

// // }

// import { useEffect, useState } from "react";
// import API from "../api";
// import "../index.css";

// export default function Admin() {
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     API.get("/service/all")
//       .then((res) => {
//         console.log(res.data);
//         setServices(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const logout = () => {
//     localStorage.clear();
//     window.location.href = "/";
//   };

//   return (
//     <div>

//       <div className="navbar">
//         <h3>Admin Panel</h3>
//         <button onClick={logout}>Logout</button>
//       </div>

//       <div className="container">
//         <h2>All Services</h2>

//         {services.map((s) => (
//           <div key={s._id} className="card">

//             <h3>{s.title}</h3>
//             <p>{s.description}</p>

//             <p>User: {s.userId}</p>

//             <a href={s.fileUrl} target="_blank">
//               Open File
//             </a>

//           </div>
//         ))}

//       </div>

//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import API from "../api";
// import "../index.css";

// export default function Admin() {
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//   const token = localStorage.getItem("token");

//   API.get("/service/all", {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   })
//     .then((res) => {
//       console.log("ADMIN DATA:", res.data);
//       setServices(res.data);
//     })
//     .catch((err) => console.log(err.response?.data || err.message));
// }, []);

//   const logout = () => {
//     localStorage.clear();
//     window.location.href = "/";
//   };

//   return (
//     <div>

//       <div className="navbar">
//         <h3>Admin Panel</h3>
//         <button onClick={logout}>Logout</button>
//       </div>

//       <div className="container">
//         <h2>All Services</h2>

//         {services.length === 0 && <p>No data found</p>}

//         {services.map((s) => (
//           <div key={s._id} className="card">

//             <h3>{s.title}</h3>
//             <p>{s.description}</p>

//             <p>User: {s.userId || "N/A"}</p>

//             <a href={s.fileUrl || s.documentUrl} target="_blank">
//               Open File
//             </a>

//           </div>
//         ))}

//       </div>

//     </div>
//   );
// }

import { useEffect, useState } from "react";
import API from "../api";

export default function Admin() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    API.get("/service/all", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        console.log("ADMIN DATA:", res.data);
        setServices(res.data);
      })
      .catch((err) =>
        console.log(err.response?.data || err.message)
      );
  }, []);
 const handleView = async (id, fileKey) => {
  const token = localStorage.getItem("token");

  try {

    // ✅ mark viewed
    await API.post(`/service/view/${id}`, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    // ✅ CLEAN FILE KEY
    const cleanFileKey = fileKey.includes("amazonaws.com/")
      ? fileKey.split("amazonaws.com/")[1]
      : fileKey;

    console.log("CLEAN FILEKEY:", cleanFileKey);

    // ✅ get signed URL
    const res = await API.get(`/document/view/${cleanFileKey}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    // ✅ open file
    window.open(res.data.url, "_blank");

  } catch (err) {
    console.log(err);
  }
};
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div style={styles.page}>

      {/* NAVBAR */}
      <div style={styles.navbar}>
  <h3 style={styles.title}>Admin Panel</h3>

  <button style={styles.btn} onClick={logout}>
    Logout
  </button>
</div>

      <div style={styles.container}>

        <h2>All Uploaded Services</h2>

        {services.length === 0 ? (
          <p>Admin can only view uploaded services</p>
        ) : (
          <div style={styles.tableWrapper}>

            <table style={styles.table}>

              <thead>
  <tr>
    <th style={styles.th}>Title</th>
    <th style={styles.th}>Description</th>
    <th style={styles.th}>Created By</th>
    <th style={styles.th}>Viewed By</th>
    <th style={styles.th}>Date</th>
    <th style={styles.th}>File</th>
  </tr>
</thead>

<tbody>
  {services.map((s) => {

    // ✅ DEBUG FILE KEY (correct place)
    console.log("FILEKEY CHECK:", s.fileKey);

    return (
      <tr key={s._id} style={styles.tr}>

        <td style={styles.td}>{s.title}</td>

        <td style={styles.td}>{s.description}</td>

        <td style={styles.td}>
          {s.userId?.name || "Unknown"}
        </td>

        <td style={styles.td}>
          {s.viewedBy && s.viewedBy.length > 0
            ? s.viewedBy
                .map(v => v.userId?.name || "User")
                .join(", ")
            : "Not viewed yet"}
        </td>

        <td style={styles.td}>
          {new Date(s.createdAt).toLocaleString()}
        </td>

        <td style={styles.td}>
          <button
            style={styles.viewBtn}
            onClick={() => {
              console.log("CLICK FILEKEY:", s.fileKey);
              handleView(s._id, s.fileKey);
            }}
          >
            View Document
          </button>
        </td>

      </tr>
    );
  })}
</tbody>

            </table>

          </div>
        )}

      </div>

    </div>
  );
}

/* ================= INLINE CSS ================= */
const styles = {
  title: {
  margin: 0,
  fontSize: "18px",
  fontWeight: "bold"
},
  page: {
    fontFamily: "Arial",
    backgroundColor: "#f4f6f9",
    minHeight: "100vh"
  },

navbar: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#03042c",
  color: "white",
  padding: "15px 20px"
},

 btn: {
  backgroundColor: "#ef4444",
  color: "white",
  border: "none",
  padding: "6px 14px",
  cursor: "pointer",
  borderRadius: "20px",
  fontSize: "13px",
  fontWeight: "500",
  width: "auto",
  display: "inline-block",
  whiteSpace: "nowrap"
},

  container: {
    padding: "25px"
  },

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
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
  },

  th: {
    backgroundColor: "#111827",
    color: "white",
    padding: "14px",
    textAlign: "left",
    fontSize: "14px"
  },

  td: {
    padding: "12px",
    borderBottom: "1px solid #eee",
    fontSize: "13px"
  },

  tr: {
    transition: "0.2s"
  },

  viewBtn: {
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    padding: "6px 10px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "12px"
  }
};