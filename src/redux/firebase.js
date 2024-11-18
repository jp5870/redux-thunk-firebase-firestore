// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtS52c_ZLibU55ZpS1VM_SOdbtaYXymfE",
  authDomain: "opop-c7d3e.firebaseapp.com",
  databaseURL: "https://opop-c7d3e-default-rtdb.firebaseio.com",
  projectId: "opop-c7d3e",
  storageBucket: "opop-c7d3e.firebasestorage.app",
  messagingSenderId: "914920494785",
  appId: "1:914920494785:web:c2ff6ec57e8cf64763e640"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db