// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAP1MICsZ1gdOR2BVZrP4LNaXuxVZrRVUM",
  authDomain: "friendly-chat-7abf1.firebaseapp.com",
  projectId: "friendly-chat-7abf1",
  storageBucket: "friendly-chat-7abf1.appspot.com",
  messagingSenderId: "702879392834",
  appId: "1:702879392834:web:6f5e78a8a7519633ecf9db"
};
firebase.initializeApp(firebaseConfig);

export default firebase;