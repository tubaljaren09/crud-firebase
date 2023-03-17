// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRYxRYwh3HlnPYRr2yH36D7fdIPYYr7aI",
  authDomain: "crud-firebase-5ad3a.firebaseapp.com",
  projectId: "crud-firebase-5ad3a",
  storageBucket: "crud-firebase-5ad3a.appspot.com",
  messagingSenderId: "476691220936",
  appId: "1:476691220936:web:03f5557ae184c3ee7018fd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
