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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // console.log(firestore.doc(`users/${userAuth.uid}`));
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // console.log("snapShot", snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  console.log(transformedCollection);
  return transformedCollection.reduce((accumlator, collection) => {
    accumlator[collection.title.toLowerCase()] = collection;
    return accumlator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
