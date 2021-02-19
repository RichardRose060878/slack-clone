import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCMVbWcBqm7XJkYdaqhZVMQ9aO6SkxMYgs',
  authDomain: 'slack-clone-12491.firebaseapp.com',
  projectId: 'slack-clone-12491',
  storageBucket: 'slack-clone-12491.appspot.com',
  messagingSenderId: '392642017796',
  appId: '1:392642017796:web:fe7da2c2e8f4dfed329351',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider, db }
