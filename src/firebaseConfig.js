// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWZSghefPWtx-Ji6LEiqOVYKNvaQlemAo",
  authDomain: "homechef-266f0.firebaseapp.com",
  projectId: "homechef-266f0",
  storageBucket: "homechef-266f0.appspot.com",
  messagingSenderId: "951316167065",
  appId: "1:951316167065:web:c8e416588a6652c079bb08",
};

// Initialize Firebase  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
