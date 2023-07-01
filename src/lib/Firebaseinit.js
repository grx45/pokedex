import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCuYk7Feh9x23dBksPbgVMtPDM8PSXCZPc",
  authDomain: "pokedex-jeffry.firebaseapp.com",
  projectId: "pokedex-jeffry",
  storageBucket: "pokedex-jeffry.appspot.com",
  messagingSenderId: "810962830103",
  appId: "1:810962830103:web:81afc106bd77a01141ed52",
  measurementId: "G-BFHD71C2Q0",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
