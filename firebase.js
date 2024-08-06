// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdD1iXmEVlWQ_GqcgOBjCfk_q5-QFXfjg",
  authDomain: "inventory--managment.firebaseapp.com",
  projectId: "inventory--managment",
  storageBucket: "inventory--managment.appspot.com",
  messagingSenderId: "525867969086",
  appId: "1:525867969086:web:10bf82c5c5f93e66e8ff6f",
  measurementId: "G-41T3Y2S9MR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {firestore};