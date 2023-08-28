// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,GithubAuthProvider,FacebookAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3HLVj11dPAtCel5GLpkBl7z8VIzhyGaw",
  authDomain: "latihanfirebase-37964.firebaseapp.com",
  projectId: "latihanfirebase-37964",
  storageBucket: "latihanfirebase-37964.appspot.com",
  messagingSenderId: "984174512888",
  appId: "1:984174512888:web:972aed5ec9ee92fbb8090d"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider()
export const providerGithub = new GithubAuthProvider();
export const providerFacebook = new FacebookAuthProvider();