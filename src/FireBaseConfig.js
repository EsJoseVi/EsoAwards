import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD691tjkiF3tagzQolYfi2ZuhpACmf6PQo",
  authDomain: "eso-awards.firebaseapp.com",
  projectId: "eso-awards",
  storageBucket: "eso-awards.appspot.com",
  messagingSenderId: "293192557212",
  appId: "1:293192557212:web:6bbe3cc497619d87c28359"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);