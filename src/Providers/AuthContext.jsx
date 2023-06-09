import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthPorvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /** conmmunication with firebase */
  const createUserWithEmailPassword = (email, password) => {
    setLoading();
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logInUserWithEmailPassword = (email, password) => {
    setLoading();
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading();
    return signOut(auth);
  };

  const profileUpdate = (name, photo) => {
    setLoading();
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscibe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUserWithEmailPassword,
    logInUserWithEmailPassword,
    logOut,
    profileUpdate,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthPorvider;
