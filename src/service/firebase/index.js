import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-umPXil3Ntv8rVDYTjI2lNNuVgmpL8LA",
    authDomain: "bazar-golden-house.firebaseapp.com",
    projectId: "bazar-golden-house",
    storageBucket: "bazar-golden-house.appspot.com",
    messagingSenderId: "257127563242",
    appId: "1:257127563242:web:a2b69f3a2c747133d8bc93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)