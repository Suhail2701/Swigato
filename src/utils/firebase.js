// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbevLpCfZGF8yU_2LO0sVXzMwz2XDrvOY",
  authDomain: "swigato-f8439.firebaseapp.com",
  projectId: "swigato-f8439",
  storageBucket: "swigato-f8439.appspot.com",
  messagingSenderId: "691212970594",
  appId: "1:691212970594:web:9a96274944f6d11dd9ff3b",
  measurementId: "G-MNEG0P5C5D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();