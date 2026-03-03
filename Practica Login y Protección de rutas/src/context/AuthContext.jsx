import { createContext, useContext, useState } from "react";
import { users } from "../data/users";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  // si es null: no esta autenticado

  const login = (username, password) => {
  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (
      users[i].username === username &&
      users[i].password === password
    ) {
      foundUser = users[i];
      break;
    }
  }

  if (foundUser) {
    setUser(foundUser);
    return true;
  }

  return false;
};

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// custom hook para usar el contexto fácil
export function useAuth() {
  return useContext(AuthContext);
}