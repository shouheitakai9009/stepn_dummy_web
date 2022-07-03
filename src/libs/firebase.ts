// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjKolkBRbzAHc06lEjUn6nj68zWeBltYo",
  authDomain: "stepn-dummy.firebaseapp.com",
  projectId: "stepn-dummy",
  storageBucket: "stepn-dummy.appspot.com",
  messagingSenderId: "114062032222",
  appId: "1:114062032222:web:9e4bd2e610c22e58a0e3cf",
  measurementId: "G-HSTZKDQXB5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
