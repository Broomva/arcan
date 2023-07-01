import dotenv from 'dotenv';
import { getApps, initializeApp } from "firebase/app";
import { EmailAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
dotenv.config();

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID
// };
const firebaseConfig = {
  apiKey: "AIzaSyBhCCqu7t0CK7py3fZtOPYzZLwvOlfJU24",
  authDomain: "arcanautomat.firebaseapp.com",
  projectId: "arcanautomat",
  storageBucket: "arcanautomat.appspot.com",
  messagingSenderId: "744544220490",
  appId: "1:744544220490:web:1724e14909d15296ed3db3",
  measurementId: "G-9PE29WRQ7D"
};

// Initialize Firebase
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const provider = new EmailAuthProvider();
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, provider };
export default db;
