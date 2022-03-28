import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, getDocs, onSnapshot,
    addDoc, deleteDoc, doc, query, where, orderBy, getDoc
} from 'firebase/firestore'
import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAA0U7M6DNc2jzM4pIfKcGCHL121D9LCw4",
    authDomain: "senior-project-db331.firebaseapp.com",
    databaseURL: "https://senior-project-db331-default-rtdb.firebaseio.com",
    projectId: "senior-project-db331",
    storageBucket: "senior-project-db331.appspot.com",
    messagingSenderId: "848266800081",
    appId: "1:848266800081:web:7659e13892635d34254ef0",
    measurementId: "G-FJ0WT1RXW6"
  };

  //init firebase app
  initializeApp(firebaseConfig);

  //init services
  const db = getFirestore();

  //init auth services
  const auth = getAuth();

  const resetForm = document.querySelector('#pssre')
  if(resetForm){
    resetForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = resetForm.em.value;

        sendPasswordResetEmail(auth, email)
            .then((cred) => {
                location.href = "login.html";
            })
            .catch((err) => {
                console.log(err.message)
            })
    });
    }

  const logoutButton = document.querySelector('.logout')
   if(logoutButton){
        logoutButton.addEventListener('click', () => {
            signOut(auth)
                .then(() => {
                    location.href = "login.html";
                })
                .catch((err) => {
                    console.log(err.message)
                })
        });
    }
    
  const loginForm = document.querySelector('.login')
  if(loginForm){
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = loginForm.em.value;
        const password = loginForm.pas.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((cred) => {
                location.href = "HomePage.html";
                const uid = cred.user.uid;
            })
            .catch((err) => {
                console.log(err.message)
            })
    });
    }

