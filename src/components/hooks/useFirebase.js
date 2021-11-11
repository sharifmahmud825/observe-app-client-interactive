import React, { useEffect, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from 'firebase/auth';

import initializeAuthentication from '../firebase/firebase.init';

initializeAuthentication();
const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Create user / Register user
  const registerUser = (email, password) => {
    console.log(email, password);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // get user name
  const updateUser = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
      })
      .catch((error) => {
        // An error occurred
      });
  };

  //   Login user with email pass
  const loginUser = (email, password) => {
    console.log(email, password);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   observe user
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      return () => unsubscribed;
    });
  }, []);

  // log out user
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return {
    user,
    setUser,
    registerUser,
    loginUser,
    updateUser,
    isLoading,
    setIsLoading,
    logOut,
  };
};

export default useFirebase;
