import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
    apiKey: "AIzaSyA_cIFqat95reHApn63-355VzHmqXu842I",
    authDomain: "roadtodesign-ab7f1.firebaseapp.com",
    projectId: "roadtodesign-ab7f1",
    storageBucket: "roadtodesign-ab7f1.appspot.com",
    messagingSenderId: "1032370132070",
    appId: "1:1032370132070:web:85d96b157cf791a71609a7",
    measurementId: "G-HWXPZZ0N4H"
};

export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
