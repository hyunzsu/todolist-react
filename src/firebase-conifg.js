// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // 코드 추가

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFCKVabbadbK1KOdiEoTc7M-y7NuQQaH8",
  authDomain: "login-fcd74.firebaseapp.com",
  projectId: "login-fcd74",
  storageBucket: "login-fcd74.appspot.com",
  messagingSenderId: "549853458092",
  appId: "1:549853458092:web:e5a3bda88b4fcb25c9b909"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // 코드 추가