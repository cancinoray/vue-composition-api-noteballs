import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaFdEtL8hbY5-bhNgq8qzmkDv0POIZhOI",
  authDomain: "noteballs-bed69.firebaseapp.com",
  projectId: "noteballs-bed69",
  storageBucket: "noteballs-bed69.appspot.com",
  messagingSenderId: "420123624158",
  appId: "1:420123624158:web:bd522081320dd84b29b84f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db
}
