import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyABBzlFcTIaYlo1oP9U6BU2TClgXr-QbTI",
  authDomain: "expense-tracker-83b3c.firebaseapp.com",
  projectId: "expense-tracker-83b3c",
  storageBucket: "expense-tracker-83b3c.appspot.com",
  messagingSenderId: "95622887463",
  appId: "1:95622887463:web:c069ebc32df47e52e07602"
};


const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;