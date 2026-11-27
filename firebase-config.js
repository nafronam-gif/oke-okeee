// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8d1-i_Ec0wOgL2-zvXCVBkdpCxsiHLPI",
  authDomain: "jokiplace-app2.firebaseapp.com",
  projectId: "jokiplace-app2",
  storageBucket: "jokiplace-app2.firebasestorage.app",
  messagingSenderId: "521394485243",
  appId: "1:521394485243:web:5c4b996443f96d2a00bd5e",
  measurementId: "G-5SXXCF55DS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
