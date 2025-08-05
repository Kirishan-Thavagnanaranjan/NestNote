
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA986fSx8mqs_JY26rC0_lYCnXBjjGTjPw",
  authDomain: "notenest-320da.firebaseapp.com",
  projectId: "notenest-320da",
  storageBucket: "notenest-320da.firebasestorage.app",
  messagingSenderId: "401067021962",
  appId: "1:401067021962:web:285d7498a5a9ec7b48bf73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);