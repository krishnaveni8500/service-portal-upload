// // // import { useEffect, useState } from "react";
// // // import API from "../api";

// // // export default function MyServices() {
// // //   const [services, setServices] = useState([]);

// // //   useEffect(() => {
// // //     API.get("/service/my")
// // //       .then(res => setServices(res.data));
// // //   }, []);

// // //   return (
// // //     <div>
// // //       <h2>My Services</h2>

// // //       {services.map((s) => (
// // //         <div key={s._id}>
// // //           <h3>{s.title}</h3>
// // //           <p>{s.description}</p>
// // //           <a href={s.fileUrl} target="_blank">View File</a>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // }
// // import { useEffect, useState } from "react";
// // import API from "../api";
// // import "../index.css";

// // export default function MyServices() {
// //   const [services, setServices] = useState([]);

// //   useEffect(() => {
// //     API.get("/service/my").then(res => setServices(res.data));
// //   }, []);

// //   return (
// //     <div>
// //       <div className="navbar">
// //         <h3>My Services</h3>
// //       </div>

// //       <div className="container">
// //         {services.map((s) => (
// //           <div className="card" key={s._id}>
// //             <h3>{s.title}</h3>
// //             <p>{s.description}</p>
// //             <a href={s.fileUrl} target="_blank">View File</a>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// import { useEffect, useState } from "react";
// import API from "../api";
// import "../index.css";

// export default function MyServices() {
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     API.get("/service/my", {
//       headers: {
//         Authorization: localStorage.getItem("token")
//       }
//     }).then(res => setServices(res.data));
//   }, []);

//   return (
//     <div>
//       <div className="navbar">
//         <h3>My Services</h3>
//       </div>

//       <div className="container">
//         {services.map((s) => (
//           <div className="card" key={s._id}>
//             <h3>{s.title}</h3>
//             <p>{s.description}</p>
//             <a href={s.fileUrl} target="_blank">
//               View File
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

// export default function MyServices() {

//   const [services, setServices] = useState([]);

//   useEffect(() => {

//     //const token = localStorage.getItem("token");

//     API.get("/service/my")//{
//     //   headers: {
//     //     Authorization: `Bearer ${localStorage.getItem("token")}`
//     //   }
//     // })
//     .then(res => {
//       console.log("MY SERVICES:", res.data);

//       // SAFE HANDLING
//       setServices( res.data || []);
//     })
//     .catch(err => {
//       console.log("ERROR:", err);
//     });

//   }, []);

//   return (
//     <div>

//       <div className="navbar">
//         <h3>My Services</h3>
//       </div>

//       <div className="container">

//         {services.length === 0 && <p>No services found</p>}

//         {services.map((s) => (
//           <div className="card" key={s._id}>

//             <h3>{s.title}</h3>
//             <p>{s.description}</p>

//             <a
//               href={s.fileKey || s.documentUrl}
//               target="_blank"
//               rel="noreferrer"
//             >
//               View File
//             </a>

//           </div>
//         ))}

//       </div>

//     </div>
//   );
// }

import { useEffect, useState } from "react";
import API from "../api";
import "../index.css";

export default function MyServices() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    API.get("/service/my")
      .then(res => {
        console.log("MY SERVICES:", res.data);
        setServices(res.data || []);
      })
      .catch(err => {
        console.log("ERROR:", err);
      });
  }, []);

  // ✅ VIEW FILE USING PRE-SIGNED URL
  const handleView = async (fileKey) => {
  try {
    const token = localStorage.getItem("token");

    let cleanFileKey = fileKey;

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

    // open secure S3 link
    window.open(res.data.url, "_blank");

  } catch (err) {
    console.log("VIEW ERROR:", err);
  }
};

  return (
    <div>

      {/* NAVBAR */}
      <div className="navbar">
        <h3>My Services</h3>
      </div>

      {/* CONTENT */}
      <div className="container">

        {services.length === 0 && (
          <p>No services found</p>
        )}

        {services.map((s) => {

  // ✅ DEBUG HERE
  console.log("DEBUG FILEKEY:", s.fileKey);

  return (
    <div className="card" key={s._id}>

      <h3>{s.title}</h3>
      <p>{s.description}</p>

      <button
        onClick={() => handleView(s.fileKey)}
        style={{
          padding: "8px 12px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        View File
      </button>

    </div>
  );
})}

      </div>

    </div>
  );
}