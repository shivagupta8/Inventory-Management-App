// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBqHSg-AcPBKAX6q_Qb0mQiyIdZO2bihP8",
    authDomain: "inventory-management-app-2bd7b.firebaseapp.com",
    projectId: "inventory-management-app-2bd7b",
    storageBucket: "inventory-management-app-2bd7b.appspot.com",
    messagingSenderId: "315337251167",
    appId: "1:315337251167:web:a990c3b575d525d5947eea",
    measurementId: "G-L7RMLBR19S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore }

