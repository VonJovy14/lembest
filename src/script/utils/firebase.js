import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDVUTYgbHpGzVLTL_IgjntfPgVrR8atxwk",
  authDomain: "lembest.firebaseapp.com",
  projectId: "lembest",
  storageBucket: "lembest.appspot.com",
  messagingSenderId: "974758309174",
  appId: "1:974758309174:web:114f18d10849704a9a1797",
  measurementId: "G-XGGKW9BHJY",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
