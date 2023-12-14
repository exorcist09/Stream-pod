
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore";
// this will import all the things from the database out of which any thing can be later exported



const firebaseConfig = {
  apiKey: "AIzaSyATlIA2bnXjGzvIVasKpRE7U4t2kx5kwPk",
  authDomain: "filmyverse-b0206.firebaseapp.com",
  projectId: "filmyverse-b0206",
  storageBucket: "filmyverse-b0206.appspot.com",
  messagingSenderId: "212494985761",
  appId: "1:212494985761:web:f800f9bfffc666f20f5160"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// like here we never imported db but it got imported with firstore, so now we can export it.
export const db = getFirestore(app);
export const moviesRef =collection(db,"movies");


export default app;