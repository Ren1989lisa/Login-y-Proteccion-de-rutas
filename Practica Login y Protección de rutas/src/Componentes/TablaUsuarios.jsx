import { Table } from "react-bootstrap";
import Boton from "./Boton";
import { useNavigate } from "react-router-dom";


const TablaUsuarios = ({ users }) => {

  const navigate = useNavigate();

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No.</th>
          <th>Usuario</th>
          <th>Nombre</th>
          <th>Rol</th>
          <th>Contraseña</th>
          <th>Perfil</th>

        </tr>
      </thead>

      <tbody>
        {users.map((user, index) => (
          <tr key={user.username}>
            <td>{index + 1}</td>
            <td>{user.username}</td>
            <td>{user.nombre}</td>
            <td>{user.rol}</td>
            <td>{user.password}</td>
            <td>
              <Boton
                 text="Ver perfil"
                 action={() => navigate(`/profile/${user.username}`)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TablaUsuarios;