import firebase from "firebase";
  
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDoBSf6J-ldXwmOC0deiAkoZlWMJyZy5Lo",
  authDomain: "shopping-app-76917.firebaseapp.com",
  databaseURL: "https://shopping-app-76917.firebaseio.com",
  projectId: "shopping-app-76917",
  storageBucket: "shopping-app-76917.appspot.com",
  messagingSenderId: "650654226448",
  appId: "1:650654226448:web:dd80149e321f9a46f6d295",
  measurementId: "G-0X2HZX5C1R"  
});

const auth = firebase.auth();

export {auth};