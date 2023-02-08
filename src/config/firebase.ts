// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjQJbKtbQfVvPI7TaDa-_tSzDb7ehj0Z0",
  authDomain: "menu-app-51f4b.firebaseapp.com",
  projectId: "menu-app-51f4b",
  storageBucket: "menu-app-51f4b.appspot.com",
  messagingSenderId: "865977549437",
  appId: "1:865977549437:web:c3e0d700136ed56e1b6714"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); 
export const provider = new GoogleAuthProvider();