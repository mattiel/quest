import React, { useState, useEffect, useContext, createContext } from 'react'
import Router from 'next/router'
import firebase from './firebase'
import { createUser } from './db'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const auth = useProvideAuth()

  return (
    <AuthContext.Provider value={auth}>
      { children }
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleUser = async(rawUser) => {
    if (rawUser) {
      const user = await formatUser(rawUser)
      const { token, ...userWithoutToken } = user;

      createUser(user.uid, userWithoutToken)
      setUser(user)

      setLoading(false)
      return user
    } else {
      setUser(false)
      setLoading(false)
      return false
    }
  } 

  const signin = (email, password, redirect) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response => {
        handleUser(response.user)

        if(redirect) {
          Router.push(redirect);
        }
      }))

  }

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => handleUser(false))
  }

  useEffect(() => {
    const unsubscribe = firebase
      .auth().onAuthStateChanged(handleUser)
    return () => unsubscribe();
  }, [])

  return {
    user,
    loading,
    signin,
    signout
  }
}

const formatUser = async(user) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
  }
}