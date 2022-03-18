import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { seedDatabase } from "../seed";

// Config
const config = {
  apiKey: "AIzaSyCemigwFHeSrV4740k6QlR_CKKRTTCN-Wg",
  authDomain: "netflix-b1dff.firebaseapp.com",
  projectId: "netflix-b1dff",
  storageBucket: "netflix-b1dff.appspot.com",
  messagingSenderId: "860607757585",
  appId: "1:860607757585:web:242f8bc153da80df83e0b0",
  measurementId: "G-J93HZ68LZL",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
