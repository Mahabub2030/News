// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe5hnTq4sQZV1nh-q2pID-_keMyvzATzw",
  authDomain: "dragon-news-6a472.firebaseapp.com",
  projectId: "dragon-news-6a472",
  storageBucket: "dragon-news-6a472.appspot.com",
  messagingSenderId: "1035832452415",
  appId: "1:1035832452415:web:a5ecc0dd11df25034f9f8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;