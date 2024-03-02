// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANIWGzPAopJPe1X7CJWUmBgno7ZmNpCU8",
  authDomain: "expense-mate-1b3e5.firebaseapp.com",
  projectId: "expense-mate-1b3e5",
  storageBucket: "expense-mate-1b3e5.appspot.com",
  messagingSenderId: "859828725134",
  appId: "1:859828725134:web:b4860aebbd8771c0e1f0df",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider(auth);

export default app;
