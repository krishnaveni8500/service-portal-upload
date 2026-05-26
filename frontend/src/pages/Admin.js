// import { useEffect, useState } from "react";
// import API from "../api";
// import "../index.css";

// export default function Admin() {
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     API.get("/service/all").then(res => setServices(res.data));
//   }, []);

//   const logout = () => {
//     localStorage.clear();
//     window.location.href = "/";
//   };

//   return (
//     <div>
//       <div className="navbar">
//         <h3>Admin Panel</h3>
//         <button onClick={logout} style={{ width: "100px" }}>Logout</button>
//       </div>

//       <div className="container">
//         <h2>All Services</h2>

//         {services.map((s) => (
//           <div className="card" key={s._id}>
//             <h3>{s.title}</h3>
//             <p>{s.description}</p>
//             <p><b>User:</b> {s.userId}</p>
//             <a href={s.fileUrl} target="_blank">Open File</a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import API from "../api";
import "../index.css";

export default function Admin() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    API.get("/service/all", {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then(res => setServices(res.data));
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div>
      <div className="navbar">
        <h3>Admin Panel</h3>
        <button onClick={logout}>Logout</button>
      </div>

      <div className="container">
        <h2>All Services</h2>

        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>User</th>
              <th>File</th>
            </tr>
          </thead>

          <tbody>
            {services.map((s) => (
              <tr key={s._id}>
                <td>{s.title}</td>
                <td>{s.description}</td>
                <td>{s.userId}</td>
                <td>
                  <a href={s.fileUrl} target="_blank">
                    Open
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}