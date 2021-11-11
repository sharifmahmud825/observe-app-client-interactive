import React from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import initializeAuthentication from '../firebase/firebase.init';

initializeAuthentication();
const useFirebase = () => {
  const auth = getAuth();

  // Create user / Register user
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Login user with email pass
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   observe user
  useEffect(() => {}, []);

  return {
    registerUser,
    loginUser,
  };
};

export default useFirebase;
