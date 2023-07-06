 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
 import { getDatabase,ref,set,push,onValue} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyCpGZIX0yRr_QXXDKkg90Nnd5D-FbpdJaQ",
   authDomain: "atifironwork.firebaseapp.com",
   projectId: "atifironwork",
   storageBucket: "atifironwork.appspot.com",
   messagingSenderId: "537328514451",
   appId: "1:537328514451:web:49025ae94f005ffc98a466",
   measurementId: "G-FBWL7VFP55"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const db = getDatabase()
  export {app,db,ref, set,push,onValue}

  