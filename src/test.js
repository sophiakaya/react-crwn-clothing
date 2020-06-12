import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("ei4gkmjFJ6iaWlhUMUEN")
  .collection("cartItems")
  .doc("zL5hgiTB7IS9FXWsR22J");

firestore.doc("/users/ei4gkmjFJ6iaWlhUMUEN/cartItems/dSxRfhIOze0EbvCwEjRH");
firestore.collection("/users");
