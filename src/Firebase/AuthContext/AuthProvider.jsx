import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../Init/_firebase.init';

const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password)=>{
      return  createUserWithEmailAndPassword(auth, email, password);
    }

    const SignInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = ()=>{
            return signInWithPopup(auth, googleProvider);
    }


    const appInfo = {
        createUser,
        SignInUser,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={appInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;