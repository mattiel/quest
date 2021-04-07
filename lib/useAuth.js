import React, { useState, useEffect, useContext, createContext } from 'react'
import firebase from './firebase'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const auth = useProvideAuth()
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signIn = ({ type }) => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.EmailAuthProvider())
      .then((response => setUser(response.user)))
  }

  const signOut = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => setUser(false))
  }

  useEffect(() => {
    const unsubscribe = firebase
      .auth().onIdTokenChanged(() => setUser(false))
    return () => unsubscribe();
  }, [])

  return {
    user,
    signIn,
    signOut
  }
}