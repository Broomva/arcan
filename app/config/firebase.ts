import { getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { EmailAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from '@/app/config/firebase.config'

// Initialize Firebase
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const provider = new EmailAuthProvider();
const db = getFirestore(app);
const auth = getAuth(app);

// const analytics = getAnalytics(app);

export { auth, provider, app };
export default db;