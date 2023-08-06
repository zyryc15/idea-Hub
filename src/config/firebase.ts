// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByy5o-ylfuD2yxHjHQtS0aNI44mMcwdhQ",
  authDomain: "idea-hub-c8e13.firebaseapp.com",
  projectId: "idea-hub-c8e13",
  storageBucket: "idea-hub-c8e13.appspot.com",
  messagingSenderId: "459301298198",
  appId: "1:459301298198:web:c2ba3cbc2ddfdf2a399537",
  measurementId: "G-FHHE40MLN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
