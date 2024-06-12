import { initializeAuth, getReactNativePersistence} from 'firebase/auth'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAMQOpNboEFnK1U_TTn8EQJhPyGuPtJ6mQ",
  authDomain: "glambook-firebase.firebaseapp.com",
  databaseURL: "https://glambook-firebase-default-rtdb.firebaseio.com",
  projectId: "glambook-firebase",
  storageBucket: "glambook-firebase.appspot.com",
  messagingSenderId: "679696862956",
  appId: "1:679696862956:web:e615382f59e8c01c9ddfc9",
  measurementId: "G-ZMEGNW4XME"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const db = getFirestore(app);