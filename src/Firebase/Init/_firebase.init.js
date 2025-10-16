// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiTV5KXWEB_INqj-wa-TE0rTEPPPDfXro",
  authDomain: "dragon-news-pre-practise.firebaseapp.com",
  projectId: "dragon-news-pre-practise",
  storageBucket: "dragon-news-pre-practise.firebasestorage.app",
  messagingSenderId: "1032323556803",
  appId: "1:1032323556803:web:597135c95ba68b14a14976"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
