import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBBlZ8bToJv1oRhk9t2NRi_92soIMMo6GA',
  authDomain: 'socar-ba65a.firebaseapp.com',
  databaseURL: 'https://socar-ba65a.firebaseio.com',
  storageBucket: 'socar-ba65a.appspot.com',
  projectId: 'socar-ba65a',
  messagingSenderId: '397991860070',
  appId: '1:397991860070:web:a6afd14b8637c7f2389aa7',
  measurementId: 'G-YBWWLXM5BM',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseDatabase = firebaseApp.database();
