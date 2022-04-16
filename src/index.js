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
    createUserWithEmailAndPassword,
    onAuthStateChanged
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

  const logoutButton = document.querySelector('#logout')
   if(logoutButton){
        logoutButton.addEventListener('click', () => {
            signOut(auth)
                .then(() => {
                    location.href = "ChooseLogin.html";
                })
                .catch((err) => {
                    console.log(err.message)
                })
        });
   }
    
  const loginForm = document.querySelector('#logina')
  if(loginForm){
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = loginForm.em.value;
        const password = loginForm.pas.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                location.href = "HomePage.html";
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

  const loginFormb = document.querySelector('#loginc')
  if(loginFormb){
    loginFormb.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = loginFormb.em.value;
        const password = loginFormb.pas.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                location.href = "CounselorHomePage.html";
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

const loginFormc = document.querySelector('#logint')
  if(loginFormc){
    loginFormc.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = loginFormc.em.value;
        const password = loginFormc.pas.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                location.href = "TLCHomePage.html";
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
    const loginFormd = document.querySelector('#logins')
  if(loginFormd){
    loginFormd.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = loginFormd.em.value;
        const password = loginFormd.pas.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                location.href = "StudentHomePage.html";
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
    const colRef2 = collection(db, 'TRIOLeadershipCouncil')
    const colRef3 = collection(db, 'Counselors')
    const colRef4 = collection(db, 'Administrators')

    //queries
    const q = query(colRef, where("LastName", "==", "Malik"), orderBy('FirstName', 'asc'))
 

    onAuthStateChanged(auth, (user) => {
        if (user) {
          const q2 = query(colRef, where("Email", "==", auth.currentUser.email));
          const q3 = query(colRef2, where("Email", "==", auth.currentUser.email));
          const q4 = query(colRef3, where("Email", "==", auth.currentUser.email));
          const q5 = query(colRef4, where("Email", "==", auth.currentUser.email));
            
          //if(q2){
              //console.log("good job");
              //document.querySelectorAll(".adonly").forEach(a=>a.style.display = "none");
            //} 
        }
        else {
          console.log("state = definitely signed out")
        }
      })

      
  
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

const dropCheck = document.querySelector('.dropbtn')
if(dropCheck){
    dropCheck.addEventListener('click', () => {
         document.getElementById("myDropdown").classList.toggle("show");
    });
}

  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  //for the calender

  let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const calendar = document.getElementById('calendar');
const newEventModal = document.getElementById('newEventModal');
const deleteEventModal = document.getElementById('deleteEventModal');
const backDrop = document.getElementById('modalBackDrop');
const eventTitleInput = document.getElementById('eventTitleInput');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function openModal(date) {
  clicked = date;

  const eventForDay = events.find(e => e.date === clicked);

  if (eventForDay) {
    document.getElementById('eventText').innerText = eventForDay.title;
    deleteEventModal.style.display = 'block';
  } else {
    newEventModal.style.display = 'block';
  }

  backDrop.style.display = 'block';
}

function load() {
  const dt = new Date();

  if (nav !== 0) {
    dt.setMonth(new Date().getMonth() + nav);
  }

  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
  const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

  document.getElementById('monthDisplay').innerText = 
    `${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`;

  calendar.innerHTML = '';

  for(let i = 1; i <= paddingDays + daysInMonth; i++) {
    const daySquare = document.createElement('div');
    daySquare.classList.add('day');

    const dayString = `${month + 1}/${i - paddingDays}/${year}`;

    if (i > paddingDays) {
      daySquare.innerText = i - paddingDays;
      const eventForDay = events.find(e => e.date === dayString);

      if (i - paddingDays === day && nav === 0) {
        daySquare.id = 'currentDay';
      }

      if (eventForDay) {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        eventDiv.innerText = eventForDay.title;
        daySquare.appendChild(eventDiv);
      }

      daySquare.addEventListener('click', () => openModal(dayString));
    } else {
      daySquare.classList.add('padding');
    }

    calendar.appendChild(daySquare);    
  }
}

function closeModal() {
  eventTitleInput.classList.remove('error');
  newEventModal.style.display = 'none';
  deleteEventModal.style.display = 'none';
  backDrop.style.display = 'none';
  eventTitleInput.value = '';
  clicked = null;
  load();
}

function saveEvent() {
  if (eventTitleInput.value) {
    eventTitleInput.classList.remove('error');

    events.push({
      date: clicked,
      title: eventTitleInput.value,
    });

    localStorage.setItem('events', JSON.stringify(events));
    closeModal();
  } else {
    eventTitleInput.classList.add('error');
  }
}

function deleteEvent() {
  events = events.filter(e => e.date !== clicked);
  localStorage.setItem('events', JSON.stringify(events));
  closeModal();
}

function initButtons() {
  document.getElementById('nextButton').addEventListener('click', () => {
    nav++;
    load();
  });

  document.getElementById('backButton').addEventListener('click', () => {
    nav--;
    load();
  });

  document.getElementById('saveButton').addEventListener('click', saveEvent);
  document.getElementById('cancelButton').addEventListener('click', closeModal);
  document.getElementById('deleteButton').addEventListener('click', deleteEvent);
  document.getElementById('closeButton').addEventListener('click', closeModal);
}

initButtons();
load();

  


