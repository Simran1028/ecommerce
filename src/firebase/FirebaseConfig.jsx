
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB0UdodSME-_f1ZRY-aynLHf7urAHuDQ40",
    authDomain: "ecommerce-770b8.firebaseapp.com",
    projectId: "ecommerce-770b8",
    storageBucket: "ecommerce-770b8.firebasestorage.app",
    messagingSenderId: "135662911502",
    appId: "1:135662911502:web:535ffbcaece61c40b9bc5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { auth, fireDB }