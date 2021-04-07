import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAto5VywNlfj6G_PSBiCOMOFShrbw0Sx7M",
  authDomain: "quest-fb.firebaseapp.com",
  databaseURL: "https://quest-fb-default-rtdb.firebaseio.com",
  projectId: "quest-fb",
  storageBucket: "quest-fb.appspot.com",
  messagingSenderId: "1033798496249",
  appId: "1:1033798496249:web:a0fc4eb57d41ba289ad728"
}

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.FIREBASE_DATABASE_URL,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID
// }

try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}

export default firebase;