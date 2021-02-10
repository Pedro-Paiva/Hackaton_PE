import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyDeSZYKi85fTZcURNpHZZ2zQEo1kEMJrWs",
    authDomain: "scoredetran.firebaseapp.com",
    databaseURL: "https://scoredetran-default-rtdb.firebaseio.com",
    projectId: "scoredetran",
    storageBucket: "scoredetran.appspot.com",
    messagingSenderId: "844350005613",
    appId: "1:844350005613:web:9b8e54b5d055d39a087a64",
    measurementId: "G-DRFPS9YC01"
  };

  if(!firebase.app.length){
  firebase.initializeApp(firebaseConfig);
  }

  export default firebase;