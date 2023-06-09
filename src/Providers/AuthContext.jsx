import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthPorvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "sakib",
  });
  const [loading, setLoading] = useState(true);

  const authInfo = {
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthPorvider;
