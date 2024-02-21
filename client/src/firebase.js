// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-15a5f.firebaseapp.com",
  projectId: "mern-blog-15a5f",
  storageBucket: "mern-blog-15a5f.appspot.com",
  messagingSenderId: "866464457998",
  appId: "1:866464457998:web:e7303ebc7384d2a1dc235f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);