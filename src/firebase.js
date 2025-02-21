import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD51ptdbK78SR_YjAaL7e2BIJucMp-YtB4",
  authDomain: "project-7243512118410874806.firebaseapp.com",
  projectId: "project-7243512118410874806",
  storageBucket: "project-7243512118410874806.firebasestorage.app",
  messagingSenderId: "440770788158",
  appId: "1:440770788158:web:f3b42e1188cae7dc71ca6f",
  measurementId: "G-0NEHF13JV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };