import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBtzqjUW66JUbgxrFJRpsBCPUk-lsGOLqc",
  authDomain: "kztest.firebaseapp.com",
  databaseURL: "https://kztest.firebaseio.com",
  projectId: "kztest",
  storageBucket: "",
  messagingSenderId: "593618735219",
  appId: "1:593618735219:web:b1d6a2de47ecad2e"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firestore = firebaseApp.firestore();
export default firebase;