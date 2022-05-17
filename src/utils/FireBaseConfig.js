import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0OgzwwGVblVNnM7vAkHLJPQNQ5I8UX90",
  authDomain: "fdgunderclothes.firebaseapp.com",
  projectId: "fdgunderclothes",
  storageBucket: "fdgunderclothes.appspot.com",
  messagingSenderId: "268735520897",
  appId: "1:268735520897:web:6e8aff3f09d26d4e1a6d80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export default db