// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAYgn2gaMj91wwtSslJQSw_EFswnMY4KcM",
  authDomain: "logicalsir-89a84.firebaseapp.com",
  projectId: "logicalsir-89a84",
  storageBucket: "logicalsir-89a84.appspot.com",
  messagingSenderId: "1030319148767",
  appId: "1:1030319148767:web:0cf8612410beabd143e36a",
  measurementId: "G-LKPM6ENF11"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider, signInWithPopup, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword };
