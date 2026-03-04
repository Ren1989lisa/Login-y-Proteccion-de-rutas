import { useState } from "react";
import { useNavigate } from "react-router-dom"
import Boton from "../Componentes/Boton"
import Input from "../Componentes/Input"
import { useAuth } from "../context/AuthContext";

function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

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
        <div>
            <h1>Login</h1>

            <Input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={setUsername}
            />

            <Input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={setPassword}
            />

            <Boton
            text="Iniciar Sesión"
            action={handleLogin}
            />
        </div>
    )
}

export default Login;