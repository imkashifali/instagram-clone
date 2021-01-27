import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBYHPGs8oXYSXEQW03QHCqwwjT8J9xZD_A",
	authDomain: "instagram-clone-63762.firebaseapp.com",
	projectId: "instagram-clone-63762",
	storageBucket: "instagram-clone-63762.appspot.com",
	messagingSenderId: "1014193812238",
	appId: "1:1014193812238:web:722870d45bf2b5ca189d5f",
	measurementId: "G-R5TE9052K7",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
