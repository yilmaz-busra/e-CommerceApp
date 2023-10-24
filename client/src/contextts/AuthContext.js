import { useState, createContext, useEffect, useContext } from "react";
import { fetchLogout, fetchMe } from "../api";
import { Flex, Spinner } from "@chakra-ui/react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const me = await fetchMe();
        setLoggedIn(true); // fetchMe'den veri döndüğünde loggedIn state'i true oluyor
        setLoading(false);
        setUser(me); //fetchMe ile dönen veriyi user state'ne atıyoruz
        console.log("me", me);
      } catch (e) {
        setLoading(false);
      }
    })();
  }, []);

  // ilk giris islemi gerceklestiren fonksiyon
  const login = (data) => {
    setLoggedIn(true);
    setUser(data);

    localStorage.setItem("access-token", data.accessToken);
    localStorage.setItem("refresh-token", data.refreshToken);
  };

  const logout = async (callback) => {
    setLoggedIn(false);
    setUser(null);

    await fetchLogout();
    localStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");

    callback();
  };

  // context içerisinden componentlere gönderilen veriler
  const values = {
    loggedIn,
    user,
    login,
    logout,
  };
  if (loading) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          size="xl"
          color="red"
        />
      </Flex>
    );
  }
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
