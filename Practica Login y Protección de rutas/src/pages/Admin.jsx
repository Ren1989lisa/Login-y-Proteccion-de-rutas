import { users } from "../data/users";
import { Container } from "react-bootstrap";
import Boton from "../Componentes/Boton";
import TablaUsuarios from "../Componentes/TablaUsuarios";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container className="mt-5">
        <h2 className="mb-4">Admin</h2>

        <TablaUsuarios users={users} />
      </Container>

      <Boton
        type="primary"
        text="Regresar"
        action={() => navigate("/profile")}
      />
    </>
  );
};

export default Admin;  