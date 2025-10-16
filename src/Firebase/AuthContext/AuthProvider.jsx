import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import { auth } from '../Init/_firebase.init';

const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider()

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password)=>{
        setLoading(true)
      return  createUserWithEmailAndPassword(auth, email, password)
    }

    const SignInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = ()=>{
        setLoading(true)
            return signInWithPopup(auth, googleProvider);
    }

    const signOutIn = ()=>{
      return  signOut(auth)
    }

    useEffect(()=>{
      const unsubcriber = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
        setLoading(false);
      })
      return unsubcriber;
    },[])


    const appInfo = {
        user,
        loading,
        createUser,
        SignInUser,
        googleSignIn,
        signOutIn
    }

    return (
        <AuthContext.Provider value={appInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;