import { useAuth } from "../context/AuthContext";
import Boton from "../Componentes/Boton"
import { useNavigate } from "react-router-dom";

function Profile() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

  return (
    <div className="profile-container">
      <h2>Perfil</h2>

      <p><strong>Nombre:</strong> {user.nombre}</p>

      {user.rol === "admin" && (
      <Boton
        type="primary"
        text="Ir a tabla de usuarios"
        action={() => navigate("/admin")}
      />
      )}

      <Boton 
      action={logout}
      text="Cerrar Sesión"
      />
    </div>
  );
}

export default Profile;