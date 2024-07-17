"use client";
import { getAnalytics, Analytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// https://github.com/dipeshhkc/nextjs-firebase-analytics/blob/main/utils/firebase.js
const firebaseConfig = {
  apiKey: "AIzaSyATxcvUW_V_xjOosKEhhcUoQcD5BwwK-tw",
  authDomain: "reasons-to-not-split.firebaseapp.com",
  projectId: "reasons-to-not-split",
  storageBucket: "reasons-to-not-split.appspot.com",
  messagingSenderId: "11810441209",
  appId: "1:11810441209:web:ef43619380bee0e1aa9f28",
  measurementId: "G-6J76ES03ZF"
};
let analytics: Analytics;
if(typeof window !== "undefined") {
  const app =  initializeApp(firebaseConfig);

  analytics = getAnalytics(app);
};

export { analytics };