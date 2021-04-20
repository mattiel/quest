import React, {useEffect} from 'react'
import '../styles/globals.css'
import "tailwindcss/tailwind.css"
import firebase from 'firebase';
import { AuthProvider } from '../lib/useAuth'

function App({ Component, pageProps }) {
  // useEffect(() => {
  //   const firebaseConfig = {
  //     apiKey: "AIzaSyAto5VywNlfj6G_PSBiCOMOFShrbw0Sx7M",
  //     authDomain: "quest-fb.firebaseapp.com",
  //     databaseURL: "https://quest-fb-default-rtdb.firebaseio.com",
  //     projectId: "quest-fb",
  //     storageBucket: "quest-fb.appspot.com",
  //     messagingSenderId: "1033798496249",
  //     appId: "1:1033798496249:web:a0fc4eb57d41ba289ad728"
  //   }
    
  //   try {
  //     firebase.initializeApp(firebaseConfig);
  //     console.log("firebase connected")
  //   } catch(err){
  //     if (!/already exists/.test(err.message)) {
  //       console.error('Firebase initialization error', err.stack)}
  //   }
  // })
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default App
