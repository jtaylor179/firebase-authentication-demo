import firebase from 'firebase'
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