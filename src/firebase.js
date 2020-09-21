
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyByB_KbwbWndVLcrguSS_7_fboL-TbfwkE",
    authDomain: "clone-c149c.firebaseapp.com",
    databaseURL: "https://clone-c149c.firebaseio.com",
    projectId: "clone-c149c",
    storageBucket: "clone-c149c.appspot.com",
    messagingSenderId: "1028599595557",
    appId: "1:1028599595557:web:993636fba59efdee8c75cc",
    measurementId: "G-QYP8CQ1T92"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
