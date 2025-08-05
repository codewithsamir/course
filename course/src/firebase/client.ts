import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCftrdQMJfD1mTTPVKebbwql4AnIAmryzY",
  authDomain: "test-60b1e.firebaseapp.com",
  projectId: "test-60b1e",
  storageBucket: "test-60b1e.firebasestorage.app",
  messagingSenderId: "1021559944747",
  appId: "1:1021559944747:web:ca9b3a8d5464f16ccd9c6e",
  measurementId: "G-0BHWFGNHBB"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
// export const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const db = getFirestore(app);
export const googleprovider =new GoogleAuthProvider()