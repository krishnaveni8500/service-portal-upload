// import { useState } from "react";
// import API from "../api";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const login = async () => {
//     try {
//       const res = await API.post("/auth/login", {
//         email,
//         password
//       });

//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("role", res.data.role);

//       alert("Login success");
//       window.location.href = "/dashboard";

//     } catch (err) {
//       alert("Login failed");
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>

//       <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//       <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

//       <button onClick={login}>Login</button>

//       <p>
//         <a href="/register">Register</a>
//       </p>
//     </div>
//   );
// }
import { useState } from "react";
import API from "../api";
import "../index.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
  try{
    const res = await API.post("/auth/login", { email, password });

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("role", res.data.role);

    if (res.data.role === "admin") {
  localStorage.setItem("role", "admin");
  window.location.href = "/admin";
} else {
  localStorage.setItem("role", "user");
  window.location.href = "/dashboard";
}
  } catch (err){
    alert("login failed")
  }
    
  };

  return (
    <div className="container">
      <h2>Login</h2>

      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

      <button onClick={login}>Login</button>

      <p style={{ textAlign: "center" }}>
        <a href="/register">Create account</a>
      </p>
    </div>
  );
}