// Import the functions you need from the SDKs you need
const { initializeApp } = require("@firebase/app")
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase/firestore');
// const { getAnalytics } = require("@firebase/analytics")
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdePQ8Ra6_2jvPWekMbgPFkUC314ltSwY",
  authDomain: "testtb-18e3b.firebaseapp.com",
  projectId: "testtb-18e3b",
  storageBucket: "testtb-18e3b.firebasestorage.app",
  messagingSenderId: "1064708395384",
  appId: "1:1064708395384:web:44c850978bfc90572eb88d",
  measurementId: "G-KLYZ84MRGF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fb = getFirestore();
// const analytics = getAnalytics(app);

module.exports = { fb };