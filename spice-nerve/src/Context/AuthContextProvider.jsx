import React from "react";
import { useState } from "react";
import { createContext } from "react";
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [authentification, setAuthentification] = useState({
    isAuth: false,
    name: false,
  });

  const loing = () => { };

  return (
    <AuthContext.Provider value={{ authentification }}>
      {" "}
      {children}
    </AuthContext.Provider>
  );
};
