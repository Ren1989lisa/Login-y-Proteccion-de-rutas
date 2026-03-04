import "./Componentes/components-styles.css"
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import { useAuth } from "./context/AuthContext";

function App() {
  const { user } = useAuth();

  return (
    <Routes>

      {/* Redirección */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Ruta pública */}
      <Route
        path="/login"
        element={user ? <Navigate to="/profile" /> : <Login />}
      />

      {/* Rutas protegidas para cualquier usuario autenticado */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/profile" element={<Profile />} />
      </Route>

      {/* Ruta solo para admin */}
      <Route element={<ProtectedRoutes allowedRoles={["admin"]} />}>
        <Route path="/admin" element={<Admin />} />
      </Route>

      {/* Ruta 404 */}
      <Route path="*" element={<Navigate to="/login" />} />

    </Routes>
  );
}

export default App;