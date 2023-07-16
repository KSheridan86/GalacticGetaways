import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import { getAuth, setPersistence, browserSessionPersistence } from "firebase/auth";


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
const storageRef = ref(storage);

export const auth = getAuth();

setPersistence(auth, browserSessionPersistence)
  .then(() => {
    console.log('Session persistence enabled');
  })
  .catch((error) => {
    console.error('Error enabling session persistence:', error);
  });

export default app;
export const db = getFirestore(app);