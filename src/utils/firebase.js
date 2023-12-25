// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBk4_8lcGQFHxbILl_pEUKzFTk6-9Bm600",
  authDomain: "netflixgpt-f2eac.firebaseapp.com",
  projectId: "netflixgpt-f2eac",
  storageBucket: "netflixgpt-f2eac.appspot.com",
  messagingSenderId: "667131590268",
  appId: "1:667131590268:web:14e4fdc74b0ed9ff8ffbf9",
  measurementId: "G-MB4VNLBJ2G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
