// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO5fgtqYHyk5hYmfmgNNmD99E8UtVM15E",
  authDomain: "subrent-a793a.firebaseapp.com",
  projectId: "subrent-a793a",
  storageBucket: "subrent-a793a.firebasestorage.app",
  messagingSenderId: "511881169566",
  appId: "1:511881169566:web:1d87693032266b5cf7c98f",
  measurementId: "G-HP7YN4GGMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);


export { db, auth };