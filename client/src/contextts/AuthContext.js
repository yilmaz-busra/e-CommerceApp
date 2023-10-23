import { useState, createContext, useEffect, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  // ilk giris islemi gerceklestiren fonksiyon
  const login = (data) => {
    setLoggedIn(true);
    setUser(data);

    localStorage.setItem("access-token", data.ac);
  };
  // context içerisinden componentlere gönderilen veriler
  const values = {
    loggedIn,
    user,
    login,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
