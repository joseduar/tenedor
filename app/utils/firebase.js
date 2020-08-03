import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDDB8WSnt_ygP4RiE1fLe2OSNEx-Pvjn4g",
  authDomain: "tenedor-eb9af.firebaseapp.com",
  databaseURL: "https://tenedor-eb9af.firebaseio.com",
  projectId: "tenedor-eb9af",
  storageBucket: "tenedor-eb9af.appspot.com",
  messagingSenderId: "276717196893",
  appId: "1:276717196893:web:ff02e33b61c6fe4dea1fb4",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
