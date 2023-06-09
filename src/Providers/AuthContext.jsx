import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { createContext, useState } from "react";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthPorvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /** conmmunication with firebase */
  const createUserWithEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    loading,
    createUserWithEmailPassword,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthPorvider;
