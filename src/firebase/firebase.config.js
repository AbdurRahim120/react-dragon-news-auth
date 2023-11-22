// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwES0jrtTi2qyoxdR211CgTJ_vdoZDvSU",
  authDomain: "react-dragon-news-auth-13903.firebaseapp.com",
  projectId: "react-dragon-news-auth-13903",
  storageBucket: "react-dragon-news-auth-13903.appspot.com",
  messagingSenderId: "646099806162",
  appId: "1:646099806162:web:83c771618a91d4d6eb0a0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app