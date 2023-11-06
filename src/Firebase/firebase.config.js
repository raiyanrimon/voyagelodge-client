// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBirKoUKYy2sf52KpG8Z9aQgLgMRp7TYoQ",
  authDomain: "voyagelodge.firebaseapp.com",
  projectId: "voyagelodge",
  storageBucket: "voyagelodge.appspot.com",
  messagingSenderId: "273541147825",
  appId: "1:273541147825:web:db9b855b06c368549f0690"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app