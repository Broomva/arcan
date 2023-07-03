import { getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { EmailAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//import { firebaseConfig } from '@/app/config/firebase.config'


export const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY as string,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN as string,
    projectId: process.env.FIREBASE_PROJECT_ID as string,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET as string,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID as string,
    appId: process.env.FIREBASE_APP_ID as string,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID as string
  };

// Initialize Firebase
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const provider = new EmailAuthProvider();
const db = getFirestore(app);
const auth = getAuth(app);

// const analytics = getAnalytics(app);

export { auth, provider, app };
export default db;