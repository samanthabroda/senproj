import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, getDocs, onSnapshot,
    addDoc, deleteDoc, doc, query, where, orderBy, getDoc
} from 'firebase/firestore'
import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    createUserWithEmailAndPassword
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

  const addStudents = document.querySelector('.add')
    if(addStudents){
    addStudents.addEventListener('submit', (e) => {
        e.preventDefault()

        const email = addStudents.Email.value;
        var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var passwordLength = 12;
        var p = "";
        for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            p += chars.substring(randomNumber, randomNumber +1);
        }
        const password = p;
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                sendPasswordResetEmail(auth, email)
                    .then((cred) => {
                    })
                    .catch((err) => {
                        console.log(err.message)
                    })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    })
}

  
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
                if (err.code === 'auth/user-not-found') {
                    document.getElementById("error1").innerHTML = "Your email is not associated with an account."
                } 
                else if (err.code === 'auth/too-many-requests') { 
                    document.getElementById("error1").innerHTML = "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later."
                } 
                else if (err.code === 'auth/invalid-email') { 
                    document.getElementById("error1").innerHTML = "You must enter a valid email."
                }
                else if (err.code === 'auth/invalid-password') { 
                    document.getElementById("error1").innerHTML = "Your password is incorrect."
                }
            })
    });
    }

    //Work for the Database
  //collection red
  const colRef = collection(db, 'Students')

  //queries
  const q = query(colRef, where("LastName", "==", "Malik"), orderBy('FirstName', 'asc'))

getDocs(colRef)
.then((snapshot) => {
    let Students = []
    snapshot.docs.forEach((doc) => {
        Students.push({ ...doc.data(), id: doc.id })
    })
    console.log(Students)
})
.catch(err => {
    console.log(err.message)
})

    // //realtime  collection data
    // onSnapshot(q, (snapshot) => {
    //     let Students = []
    //     snapshot.docs.forEach((doc) => {
    //         Students.push({ ...doc.data(), id: doc.id})
    //     })
    //     console.log(Students)
    // })

    //adding documents
    if(addStudents){
    addStudents.addEventListener('submit', (e) => {
        e.preventDefault()

        // <label for="FirstName">First Name:</label>
        // <input type="text" name="FirstName" required>
        addDoc(colRef, {
            FirstName: addStudents.FirstName.value, 
            LastName: addStudents.LastName.value,
            Email: addStudents.Email.value,
            PhoneNumber: addStudents.PhoneNumber.value,
            Gender: addStudents.Gender.value,
            Standing: addStudents.Standing.value,

            // <label for="PhoneNumber">Phone Number</label>
            // <input type="number" name="PhoneNumber">
        })
        .then(() => {
            addStudents.reset()
        })
        .catch(err => {
            console.log(err.message)
        })
    })
}

    //deleting document
    const deleteStudentForm = document.querySelector('.delete')
    if(deleteStudentForm){
    deleteStudentForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const docRef = doc(db, 'Students', deleteStudentForm.id.value)
        deleteDoc(docRef)
            .then(() => {
                deleteStudentForm.reset()
            })
    })
}

    //get a single document
    const docRef = doc(db, 'Students', )


