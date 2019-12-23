import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCJ1uzV_Kfc0PcwUr5RqRz_obtsCHXV3WI",
    authDomain: "shopping-mockup.firebaseapp.com",
    databaseURL: "https://shopping-mockup.firebaseio.com",
    projectId: "shopping-mockup",
    storageBucket: "shopping-mockup.appspot.com",
    messagingSenderId: "965331707272",
    appId: "1:965331707272:web:a72490e20971a1ad17463d",
    measurementId: "G-BNM7WVKQ9D"
});

const functions = firebaseApp.functions();


export { functions };