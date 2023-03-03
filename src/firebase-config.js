// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcfZWOIvGPTDE63svDSZxh_ZNNCY1lq4M",
  authDomain: "easy-a10e1.firebaseapp.com",
  projectId: "easy-a10e1",
  storageBucket: "easy-a10e1.appspot.com",
  messagingSenderId: "725525598213",
  appId: "1:725525598213:web:f60c12b2cbfdd4bd2a4c6c",
  measurementId: "G-HTFBBPB1NT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
