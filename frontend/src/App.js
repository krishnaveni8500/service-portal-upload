import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import MyServices from "./pages/MyServices";
import Admin from "./pages/Admin";

import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* USER ROUTES */}
        <Route path="/dashboard" element={
          <ProtectedRoute role="user">
            <Dashboard />
          </ProtectedRoute>
        } />

        <Route path="/myservices" element={
          <ProtectedRoute role="user">
            <MyServices />
          </ProtectedRoute>
        } />

        {/* ADMIN ROUTE */}
        <Route path="/admin" element={
          <ProtectedRoute role="admin">
            <Admin />
          </ProtectedRoute>
        } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;