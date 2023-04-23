import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyA-Xq1pyyRSHgjwP0rRznPCi8x4Do-oauY',
  authDomain: 'movie-tickets-karthick.firebaseapp.com',
  projectId: 'movie-tickets-karthick',
  storageBucket: 'movie-tickets-karthick.appspot.com',
  messagingSenderId: '42740907431',
  appId: '1:42740907431:web:b479c002185ca041268a82',
  measurementId: 'G-2H9H91KF87',
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
export const db = getFirestore(firebaseApp)
export const storage = getStorage(firebaseApp)

export const auth = getAuth(firebaseApp)
