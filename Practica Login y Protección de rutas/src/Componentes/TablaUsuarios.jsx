import { Table } from "react-bootstrap";

const TablaUsuarios = ({ users }) => {
  return (
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
  );
};

export default TablaUsuarios;