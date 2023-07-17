// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth';
import 'firebase/compat/firestore';  ///finally!!!!!!!!!!!

const firebaseConfig = {
  apiKey: "AIzaSyCAV9IZB58iPHVHY7vKwPCuNhevtqPrxyw",
  authDomain: "allypistore-3310c.firebaseapp.com",
  projectId: "allypistore-3310c",
  storageBucket: "allypistore-3310c.appspot.com",
  messagingSenderId: "567194087295",
  appId: "1:567194087295:web:a2a9a5e6762c1cff5e744a",
  measurementId: "G-XXWYQNSLH6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };