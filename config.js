import firebase from 'firebase';
require('@firebase/firestore')

 const firebaseConfig = {
  apiKey: "AIzaSyA4nv-cSaT-qxce5B5btr8I8EZpV0cYJlo",
  authDomain: "booksantaapp-4932e.firebaseapp.com",
  databaseURL: "https://booksantaapp-4932e.firebaseio.com",
  projectId: "booksantaapp-4932e",
  storageBucket: "booksantaapp-4932e.appspot.com",
  messagingSenderId: "835520658872",
  appId: "1:835520658872:web:72b1803f5002bca4e6a34d"
};

// Initialize Firebase
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export default firebaseConfig;

