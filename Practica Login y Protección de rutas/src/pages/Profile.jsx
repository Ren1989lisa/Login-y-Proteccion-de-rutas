import { useAuth } from "../context/AuthContext";
import Boton from "../Componentes/Boton"
import { useNavigate, useParams, Navigate} from "react-router-dom";
import { users } from "../data/users";


function Profile() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const { username } = useParams();
    const selectedUser = users.find(
    (u) => u.username === username
    );
    if (!selectedUser) {
    return <h2>Usuario no encontrado</h2>;
    }

  return (
    <div className="profile-container">
      <h2>Perfil</h2>
      <p><strong>Usuario:</strong> {selectedUser.username}</p>
      <p><strong>Nombre:</strong> {selectedUser.nombre}</p>
      <p><strong>Rol:</strong> {selectedUser.rol}</p>

      {user?.rol === "admin" && (
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