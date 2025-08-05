import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD45_Oeq4gpT4I8flOboZlYAI0Qar3A_ME",
  authDomain: "saancourses.firebaseapp.com",
  projectId: "saancourses",
  storageBucket: "saancourses.firebasestorage.app",
  messagingSenderId: "125772801263",
  appId: "1:125772801263:web:95cb35a1ed2dcae5fca71a",
  measurementId: "G-6P1X14XR1M"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
// export const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const db = getFirestore(app);
export const googleprovider =new GoogleAuthProvider()



