import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { users } from "./users";

function App() {

  const [Usuarioactual, setUsuarioactual] = useState(null);

  const login = (username, password) => {
    const Usuarioencontrado = users.find(
      (u) => u.user === username && u.password === password
    );

    if (Usuarioencontrado) {
      setUsuarioactual(Usuarioencontrado);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUsuarioactual(null);
  };

  return (
    <Routes>

      <Route
        path="/"
        element={
          Usuarioactual
            ? <Navigate to="/profile" />
            : <Login login={login} />
        }
      />

      <Route
        path="/profile"
        element={
          Usuarioactual && Usuarioactual.role === "user"
            ? <Profile user={Usuarioactual} logout={logout} />
            : <Navigate to="/" />
        }
      />

      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  );
}

export default App;