import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyD25LIaDBEaB6c-hf_L_yOuZCyXoD9tZlk",
    authDomain: "scoredetran-1399a.firebaseapp.com",
    databaseURL: "https://scoredetran-1399a-default-rtdb.firebaseio.com",
    projectId: "scoredetran-1399a",
    storageBucket: "scoredetran-1399a.appspot.com",
    messagingSenderId: "257462721303",
    appId: "1:257462721303:web:75930d56c10761961ff552",
    measurementId: "G-KTBN1N6YFW"
  };
 
 if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
