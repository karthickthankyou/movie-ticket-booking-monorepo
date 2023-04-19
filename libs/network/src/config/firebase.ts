import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDSx4n7_pmood9KrGdLytTIKmSCo6rcC5w',
  authDomain: 'common-kitchen.firebaseapp.com',
  projectId: 'common-kitchen',
  storageBucket: 'common-kitchen.appspot.com',
  messagingSenderId: '700734495716',
  appId: '1:700734495716:web:b103adbef29c6291d945f1',
  measurementId: 'G-MJNC3DKLJP',
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
// const analytics = getAnalytics(firebaseApp)
export const db = getFirestore(firebaseApp)
export const storage = getStorage(firebaseApp)

export const auth = getAuth(firebaseApp)
