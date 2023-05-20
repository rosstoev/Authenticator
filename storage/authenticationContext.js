import { createContext, useState } from "react";
import User from "../models/User";

export const AuthenticationContext = createContext({
  user: null,
  login: (email, token) => {},
  logout: () => {},
});

function AuthenticationContextProvider({ children }) {
  const [user, setUser] = useState(null);

  function login(email, token) {
    setUser(new User(email, token));
  }

  function logout() {
    setUser(null);
  }

  const value = {
    user: user,
    login: login,
    logout: logout,
  };

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export default AuthenticationContextProvider;
