import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import AdminTable from "./pages/AdminTable";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import { useAuth } from "./context/AuthContext";

function App() {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Ruta pública */}
      <Route
        path="/login"
        element={user ? <Navigate to="/profile" /> : <Login />}
      />

      {/* Rutas protegidas */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/profile" 
        element={<Profile />} />
      </Route>

      {/* Solo admin */}
      <Route element={<ProtectedRoutes allowedRoles={["admin"]} />}>
        <Route path="/admin" 
        element={<AdminTable />} />
      </Route>

      <Route path="*" 
      element={<Navigate to="/login" />} />
    </Routes>
  );
}