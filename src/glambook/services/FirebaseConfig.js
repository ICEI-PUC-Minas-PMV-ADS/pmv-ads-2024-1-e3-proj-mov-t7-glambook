import { getAuth } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAMQOpNboEFnK1U_TTn8EQJhPyGuPtJ6mQ",
  authDomain: "glambook-firebase.firebaseapp.com",
  projectId: "glambook-firebase",
  storageBucket: "glambook-firebase.appspot.com",
  messagingSenderId: "679696862956",
  appId: "1:679696862956:web:e615382f59e8c01c9ddfc9",
  measurementId: "G-ZMEGNW4XME"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const auth = getAuth(app)
export default db