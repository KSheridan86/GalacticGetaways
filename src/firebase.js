// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage, ref } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyB12Ri1wV34IkIH_S6-8DMru3sLbDXEBhk",

  authDomain: "galacticgetaways-8c0b1.firebaseapp.com",

  projectId: "galacticgetaways-8c0b1",

  storageBucket: "galacticgetaways-8c0b1.appspot.com",

  messagingSenderId: "129814592021",

  appId: "1:129814592021:web:42681b973bfa62793eec1c"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

// Create a storage reference from our storage service

const storageRef = ref(storage);

export const db = getFirestore(app);