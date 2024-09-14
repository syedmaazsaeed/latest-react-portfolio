// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc, increment } from 'firebase/firestore';

// Firebase configuration (Already initialized)
const firebaseConfig = {
  apiKey: "AIzaSyDwyk9HPLiLJd5gcxe5JzQzQTcUbXO4bQw",
  authDomain: "react-devfolio.firebaseapp.com",
  projectId: "react-devfolio",
  storageBucket: "react-devfolio.appspot.com",
  messagingSenderId: "1041234643858",
  appId: "1:1041234643858:web:8c85425d3e5fe639460f4b",
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to add data to Firestore
export const addDataToFirestore = async (collection, docId, data) => {
  try {
    await setDoc(doc(db, collection, docId), data);
    console.log('Data successfully written!');
  } catch (error) {
    console.error('Error writing document: ', error);
  }
};

// Function to retrieve data from Firestore
export const getDataFromFirestore = async (collection, docId) => {
  const docRef = doc(db, collection, docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log('No such document!');
    return null;
  }
};
