// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3LGJQAyyqihRaWy8J0jgWize30Y9EFUw",
  authDomain: "dynamic-web-dev-final.firebaseapp.com",
  projectId: "dynamic-web-dev-final",
  storageBucket: "dynamic-web-dev-final.appspot.com",
  messagingSenderId: "549775310534",
  appId: "1:549775310534:web:667c07a3e98a6a24dee1c7",
  measurementId: "G-CNSFKRM0QQ",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db };
