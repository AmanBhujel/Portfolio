// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARYIF48kiSF4gQIaCOllzLdKpfRDhixN8",
  authDomain: "learn-01-70ac8.firebaseapp.com",
  projectId: "learn-01-70ac8",
  storageBucket: "learn-01-70ac8.appspot.com",
  messagingSenderId: "843910193183",
  appId: "1:843910193183:web:b5f453e2f1fb7473d9752a",
  measurementId: "G-Q5K0X6E27E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
