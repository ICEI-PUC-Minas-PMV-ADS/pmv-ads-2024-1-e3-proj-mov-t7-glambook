import { getAuth } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);
export const auth = getAuth(app)