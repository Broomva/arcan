import { getApps, initializeApp } from "firebase/app";
import { EmailAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY as string,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN as string,
//   projectId: process.env.FIREBASE_PROJECT_ID as string,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET as string,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID as string,
//   appId: process.env.FIREBASE_APP_ID as string,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID as string
// };

// DEMO Temporary Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyA9N38njjsupoMNWQFsyNTUVzVAROZd3vw",
  authDomain: "arcanapp-ai.firebaseapp.com",
  projectId: "arcanapp-ai",
  storageBucket: "arcanapp-ai.appspot.com",
  messagingSenderId: "535959673756",
  appId: "1:535959673756:web:f1332aadd32e40863b8659",
  measurementId: "G-84XJXBEXS0"
};

// Initialize Firebase
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const provider = new EmailAuthProvider();
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, provider };
export default db;
