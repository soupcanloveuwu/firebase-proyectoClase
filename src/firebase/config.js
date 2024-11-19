// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMupzFR1LjUyrOIIP7J31BDJ-adszZ_P4",
  authDomain: "dmw-crud-react.firebaseapp.com",
  projectId: "dmw-crud-react",
  storageBucket: "dmw-crud-react.firebasestorage.app",
  messagingSenderId: "352424220156",
  appId: "1:352424220156:web:66e73865d1b627be0b4e79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
export { auth, db };



