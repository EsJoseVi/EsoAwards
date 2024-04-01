import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB5m_4vK99MA9unUhLOl6ytYgh6d0L-VzQ",
  authDomain: "lanciaawards-f9e99.firebaseapp.com",
  projectId: "lanciaawards-f9e99",
  storageBucket: "lanciaawards-f9e99.appspot.com",
  messagingSenderId: "601218413663",
  appId: "1:601218413663:web:70beaa956fad45174317ea"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);