// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'
import 'firebase/compat/firestore'  ///finally!!!!!!!!!!!

const firebaseConfig = {
  apiKey: "AIzaSyAYZBNg6crDIKc9OVzatt1rWldHE_YFnx8",
  authDomain: "clone-93ee5.firebaseapp.com",
  projectId: "clone-93ee5",
  storageBucket: "clone-93ee5.appspot.com",
  messagingSenderId: "1036905274023",
  appId: "1:1036905274023:web:e6f64a5296e943704b5982",
  measurementId: "G-8BDPX2ML7Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };