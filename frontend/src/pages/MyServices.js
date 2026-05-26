// // import { useEffect, useState } from "react";
// // import API from "../api";

// // export default function MyServices() {
// //   const [services, setServices] = useState([]);

// //   useEffect(() => {
// //     API.get("/service/my")
// //       .then(res => setServices(res.data));
// //   }, []);

// //   return (
// //     <div>
// //       <h2>My Services</h2>

// //       {services.map((s) => (
// //         <div key={s._id}>
// //           <h3>{s.title}</h3>
// //           <p>{s.description}</p>
// //           <a href={s.fileUrl} target="_blank">View File</a>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }
// import { useEffect, useState } from "react";
// import API from "../api";
// import "../index.css";

// export default function MyServices() {
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     API.get("/service/my").then(res => setServices(res.data));
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
//             <a href={s.fileUrl} target="_blank">View File</a>
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
    API.get("/service/my", {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then(res => setServices(res.data));
  }, []);

  return (
    <div>
      <div className="navbar">
        <h3>My Services</h3>
      </div>

      <div className="container">
        {services.map((s) => (
          <div className="card" key={s._id}>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
            <a href={s.fileUrl} target="_blank">
              View File
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}