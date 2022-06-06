import React, { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [Auth,setAuth]=useState(false);

  function handleAuth(data)
  {
    setAuth(data);
  }

  return <AuthContext.Provider value={{Auth,handleAuth}} >{children}</AuthContext.Provider>;
};
