import {initializeApp} from 'firebase/app'
import {
    getFirestore, collection, getDocs, onSnapshot,
    addDoc, deleteDoc, doc, query, where, orderBy, getDoc
} from 'firebase/firestore'

import {
    getAuth,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  initializeApp(firebaseConfig)
 
  //init services
  const db = getFirestore()  

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

  //   //realtime  collection data
//     onSnapshot(q, (snapshot) => {
//         let Students = []
//         snapshot.docs.forEach((doc) => {
//             Students.push({ ...doc.data(), id: doc.id})
//         })
//         console.log(Students)
//     })

    //adding documents
    const addStudents = document.querySelector('.add')
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
    })

    //deleting document
    const deleteStudentForm = document.querySelector('.delete')
    deleteStudentForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const docRef = doc(db, 'Students', deleteStudentForm.id.value)
        deleteDoc(docRef)
            .then(() => {
                deleteStudentForm.reset()
            })
    })

    //get a single document
    const docRef = doc(db, 'Students', )
