import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const[loading, setLoading] = useState(true);
    
    const providerLogin = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    const providerLogout = () =>{
        setLoading(true);
        return signOut(auth)
    }
    // new code
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInuser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    } 
    useEffect( ()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('user inside state change',currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unsubscribe();
        }
    }, [])

    const authInfo = { user, loading, providerLogin, providerLogout, createUser, signInuser   }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;