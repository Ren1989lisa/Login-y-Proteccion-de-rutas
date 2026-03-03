import { useState } from "react";
import { UseNavigate } from "react-router-dom"
import Boton from "../Componentes/Boton"
import { useAuth } from "../context/AuthContext";
import Boton from "../Componentes/Boton";

function Login() {
    const navigate = UseNavigate();
    const { login } = useAuth;

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        if(!username){
            alert("Usuario requerido");
            return;
        }

        if(!password){
            alert("Contraseña requerida");
            return;
        }

        const success = login(username, password);

        if(success){
            navigate("/profile");
        } else {
            alert("Credenciales incorrectas")
        }
    };
    return (
        <>
        <div>
            <h1>Login</h1>

            <input
            type="text"
            placeholder="Usuario"
            onChange={(event) => setUsername(event.target.value)}
            />

            <input
            type="password"
            placeholder="Contraseña"
            onChange={(event) => setPassword(event.target.value)}
            />

            <Boton
            text="Iniciar Sesión"
            action={{handleLogin}}
            />
        </div>
        </>
    )
}

export default Login;