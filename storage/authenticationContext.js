import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import User from "../models/User";

export const AuthenticationContext = createContext({
  user: null,
  login: (email, token) => {},
  logout: () => {},
});

function AuthenticationContextProvider({ children }) {
  const [user, setUser] = useState(null);

  function login(email, token) {
    const jsonValue = JSON.stringify({email: email, token: token});
    setUser(new User(email, token));
    AsyncStorage.setItem('user', jsonValue);
  }

  function logout() {
    setUser(null);
    AsyncStorage.removeItem('user');
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
