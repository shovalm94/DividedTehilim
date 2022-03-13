import firebase from  'firebase/app'
import database from 'firebase/database'
import auth from 'firebase/auth'
import storage from "firebase/storage";
import functions from 'firebase/functions'
firebase.initializeApp({
    apiKey: "AIzaSyA2l8ICXPMzk3rkNRedH5LNOyb9zgQy1Lw",
    authDomain: "divided-tehilim.firebaseapp.com",
    databaseURL: "https://divided-tehilim-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "divided-tehilim",
    storageBucket: "divided-tehilim.appspot.com",
    messagingSenderId: "77669830410",
    appId: "1:77669830410:web:5e2edae4304e7bca92f4f3"
});
export default {
    firebase
}