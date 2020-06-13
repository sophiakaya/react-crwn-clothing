import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAvSPAu5Wd_mIDKxm0QFb0bjOv_kyU_rIU",
  authDomain: "react-crwn-db-45783.firebaseapp.com",
  databaseURL: "https://react-crwn-db-45783.firebaseio.com",
  projectId: "react-crwn-db-45783",
  storageBucket: "react-crwn-db-45783.appspot.com",
  messagingSenderId: "24362764368",
  appId: "1:24362764368:web:d7001d6a1b0dda252d2955",
  measurementId: "G-X9SHWGWYTV",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
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
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;