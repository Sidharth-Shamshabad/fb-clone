import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCf992_VcgWqrkCUWhrHMTaRwt9BlLeU6I",
    authDomain: "facebook-clone-b8b98.firebaseapp.com",
    databaseURL: "https://facebook-clone-b8b98.firebaseio.com",
    projectId: "facebook-clone-b8b98",
    storageBucket: "facebook-clone-b8b98.appspot.com",
    messagingSenderId: "61508404732",
    appId: "1:61508404732:web:e30f1c5e7794e985649e79",
    measurementId: "G-PLPB11N9W1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default database;