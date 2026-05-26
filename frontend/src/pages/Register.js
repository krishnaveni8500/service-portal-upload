// import { useState } from "react";
// import API from "../api";

// export default function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const register = async () => {
//     try {
//       await API.post("/auth/register", {
//         name,
//         email,
//         password
//       });

//       alert("Registered successfully");
//       window.location.href = "/";
//     } catch (err) {
//       alert("Registration failed");
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>

//       <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
//       <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//       <input type="password" onChange={(e) => setPassword(e.target.value)} />

//       <button onClick={register}>Register</button>
//     </div>
//   );
// }
import { useState } from "react";
import API from "../api";
import "../index.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const register = async () => {
    await API.post("/auth/register", { name, email, password,role });
    alert("Registered successfully");
    window.location.href = "/";
  };

  return (
    <div className="container">
      <h2>Register</h2>

      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
       </select>

      <button onClick={register}>Register</button>
    </div>
  );
}