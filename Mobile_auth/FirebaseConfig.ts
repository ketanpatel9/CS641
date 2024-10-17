// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported as isAnalyticsSupported } from "firebase/analytics"; // Use isSupported for analytics
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxB4qfmXMwZ8rbN0GCYxXGwdiesqpTHjQ",
  authDomain: "rnauth-94.firebaseapp.com",
  projectId: "rnauth-94",
  storageBucket: "rnauth-94.appspot.com",
  messagingSenderId: "100583154406",
  appId: "1:100583154406:web:bad43e6825117351161127",
  measurementId: "G-VV5Z16Q8X4"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);

// Initialize Auth and Firestore
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

// Conditionally initialize Analytics (only for web)
let analytics = null;
isAnalyticsSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(FIREBASE_APP);
  }
});

// Optionally export analytics if needed
export const FIREBASE_ANALYTICS = analytics;
