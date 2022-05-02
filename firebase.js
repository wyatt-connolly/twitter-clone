// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4llOcSyUABRB-J5-HKD_gPfrhZCQQMdg",
  authDomain: "twitter-clone-a8938.firebaseapp.com",
  projectId: "twitter-clone-a8938",
  storageBucket: "twitter-clone-a8938.appspot.com",
  messagingSenderId: "31153008718",
  appId: "1:31153008718:web:fe7b26e0cc42ab3f02531f",
  measurementId: "G-XX0BP92W9B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
