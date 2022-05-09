import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import config from "./config.js";

// Initialize Firebase
const firebaseApp = initializeApp(config);
const db = getFirestore(firebaseApp);

async function getCities(db) {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
  }

  

export default firebaseApp;