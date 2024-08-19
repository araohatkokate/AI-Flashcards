// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYpo20fGk4CFrsVP6037EoKZnWnQ6wCwk",
  authDomain: "ai-flashcards-74898.firebaseapp.com",
  projectId: "ai-flashcards-74898",
  storageBucket: "ai-flashcards-74898.appspot.com",
  messagingSenderId: "941233616522",
  appId: "1:941233616522:web:371b91161a1e13bf7c1f73",
  measurementId: "G-L7E02LRK0G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);