import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"


// temporarily hard coded until i figure out how to use the environment variable for expo to hold the values
const firebaseConfig = {
	apiKey: "AIzaSyCOjtrKi9nzNVSfvnXCNaPFFOAUtQhny9o",
  authDomain: "trackwise-e081a.firebaseapp.com",
  projectId: "trackwise-e081a",
  storageBucket: "trackwise-e081a.firebasestorage.app",
  messagingSenderId: "170795576863",
  appId: "1:170795576863:web:199d945e4e1c312306ef2a"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)