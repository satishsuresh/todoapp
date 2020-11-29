import firebase from '@firebase/app';
import '@firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyB26iOyO4rxPGcYKIyuibLFy8hak43gS_k",
    authDomain: "key-beacon-280708.firebaseapp.com",
    databaseURL: "https://key-beacon-280708.firebaseio.com",
    projectId: "key-beacon-280708",
    storageBucket: "key-beacon-280708.appspot.com",
    messagingSenderId: "1050269084390",
    appId: "1:1050269084390:web:5c7202a78982db9a40a927",
    measurementId: "G-5LPP7N2SVB"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);}
 // firebase.analytics();
 export default firebase;
  