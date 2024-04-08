import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpf5QUjtDo1QurWA_MsUOb-BnvF8VEP0k",
  authDomain: "real-homes-68c6c.firebaseapp.com",
  projectId: "real-homes-68c6c",
  storageBucket: "real-homes-68c6c.appspot.com",
  messagingSenderId: "668076878146",
  appId: "1:668076878146:web:0fa76d53c6da0d1e5dc0db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
