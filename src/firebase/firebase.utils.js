import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDu_dloNYyir9UVTWV9GVIVyJ3ukwrtk8g",
  authDomain: "crwn-db-451ff.firebaseapp.com",
  projectId: "crwn-db-451ff",
  storageBucket: "crwn-db-451ff.appspot.com",
  messagingSenderId: "904766429635",
  appId: "1:904766429635:web:ae07c9f3b616302b204576",
  measurementId: "G-YM76BQ7TP2"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase