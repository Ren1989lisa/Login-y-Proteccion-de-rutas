import { users } from "../data/users";
import { Table, Container } from 'react-bootstrap';
import Boton from "../Componentes/Boton"
import { useNavigate } from "react-router-dom";

const Admin = () => {
    const navigate = useNavigate();

  return (
    <>
    <Container className="mt-5">
      <h2 className="mb-4">Admin</h2>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>Usuario</th>
            <th>Nombre</th>
            <th>Rol</th>
            <th>Contraseña</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.username}</td>
              <td>{user.nombre}</td>
              <td>{user.rol}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>

    <Boton
      type="primary"
      text="Regresar"
      action={() => navigate("/profile")}
    />
    </>
  )
}

export default Admin;