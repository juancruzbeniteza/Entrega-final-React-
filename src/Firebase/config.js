// Import the functions you need from the SDKs you need
import 'firebase/auth';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
/* eslint-disable */
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsDkGxuKGwwhM8aCfqtyfaSFvwCv0PNmk",
  authDomain: "entrega-final-benitez.firebaseapp.com",
  projectId: "entrega-final-benitez",
  storageBucket: "entrega-final-benitez.appspot.com",
  messagingSenderId: "478988876077",
  appId: "1:478988876077:web:150d7d65c76e062e93bba4"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };