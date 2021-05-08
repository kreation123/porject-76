import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyCA6rE-OToL9MNpzVQN5U7pYOzk--mgZdM",
    authDomain: "booksataapp.firebaseapp.com",
    projectId: "booksataapp",
    storageBucket: "booksataapp.appspot.com",
    messagingSenderId: "1069402624229",
    appId: "1:1069402624229:web:e7fa3e0b28798d4dc5840c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()  
