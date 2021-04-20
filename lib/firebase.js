import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCi5v_ImRFGYDa5AQhR_bsAnLhXQjmfgNk",
  authDomain: "quest-fb2.firebaseapp.com",
  projectId: "quest-fb2",
  storageBucket: "quest-fb2.appspot.com",
  messagingSenderId: "835237632327",
  appId: "1:835237632327:web:9b5ec6e58f423f4f099462"
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
  console.log("firebase connected")
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}

export default firebase;