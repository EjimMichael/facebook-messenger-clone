import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDi7qbf7wV2HGhuGwNeMiRnXmpifSRUdjU",
    authDomain: "facebook-messenger-clone-26520.firebaseapp.com",
    projectId: "facebook-messenger-clone-26520",
    storageBucket: "facebook-messenger-clone-26520.appspot.com",
    messagingSenderId: "940316936399",
    appId: "1:940316936399:web:648fedb48b4028a1f68fba",
    measurementId: "G-JLR0B9J489"
});

const db = firebaseApp.firestore();

export default db;