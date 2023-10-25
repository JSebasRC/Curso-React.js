// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdSpugadigLN-E2NSZ3YHfot9H7KWf5jo",
  authDomain: "react-coder-3d3ad.firebaseapp.com",
  projectId: "react-coder-3d3ad",
  storageBucket: "react-coder-3d3ad.appspot.com",
  messagingSenderId: "754731927200",
  appId: "1:754731927200:web:497cca23b4658820fa2bc5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
