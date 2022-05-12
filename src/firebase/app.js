import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import config from "./config.js";

// Initialize Firebase
const firebaseApp = initializeApp(config);

// Init services
const firebaseDB = getFirestore(firebaseApp);

export {
  firebaseApp,
  firebaseDB
};