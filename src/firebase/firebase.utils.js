import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDApKz9BjHcuUzw9cKafGU08Ie_I0aF1io",
  authDomain: "crwn-db-78df6.firebaseapp.com",
  projectId: "crwn-db-78df6",
  storageBucket: "crwn-db-78df6.appspot.com",
  messagingSenderId: "877292035359",
  appId: "1:877292035359:web:c32b101ec15948d7a3a42a",
  measurementId: "G-DW33D7ZLYS",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
