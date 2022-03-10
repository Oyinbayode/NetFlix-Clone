import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Config
const config = {};

const firebase = Firebase.initializeApp(config);

export { firebase };
