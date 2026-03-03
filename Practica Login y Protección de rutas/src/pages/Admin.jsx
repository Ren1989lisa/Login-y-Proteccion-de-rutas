import React from 'react'
import { users } from "../data/users";
import { Table, Container } from 'react-bootstrap';

const Admin = () => {
  return (
    <Container className="mt-5">
      <h2 className="mb-4">Administración</h2>

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
  )
}

export default Admin;