const firebaseConfig = {
  apiKey: "AIzaSyD8d1-i_Ec0wOgL2-zvXCVBkdpCxsiHLPI",
  authDomain: "jokiplace-app2.firebaseapp.com",
  projectId: "jokiplace-app2",
  storageBucket: "jokiplace-app2.firebasestorage.app",
  messagingSenderId: "521394485243",
  appId: "1:521394485243:web:5c4b996443f96d2a00bd5e",
  measurementId: "G-5SXXCF55DS"
};

if (typeof firebase !== 'undefined') {
  firebase.initializeApp(firebaseConfig);
  window.db = firebase.firestore();
  window.auth = firebase.auth();
  console.log("🔥 Firebase Berhasil Terhubung!");
}
