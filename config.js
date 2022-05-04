import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDk92D4MmYodbaanR8CC-4BZgYc_DLbNQQ",
  authDomain: "c67-2ede0.firebaseapp.com",
  projectId: "c67-2ede0",
  storageBucket: "c67-2ede0.appspot.com",
  messagingSenderId: "251995484965",
  appId: "1:251995484965:web:266da1c8aa557bd94920cc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.database();
