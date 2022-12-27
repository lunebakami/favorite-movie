// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC9PPM-88moxYddz3NeO-Q8mDNV22cxf94',
  authDomain: 'favorite-movie-ca63f.firebaseapp.com',
  projectId: 'favorite-movie-ca63f',
  storageBucket: 'favorite-movie-ca63f.appspot.com',
  messagingSenderId: '822615020394',
  appId: '1:822615020394:web:c2d32a14f32eb1c6268b13',
  measurementId: 'G-GWPM8BSJ0W',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
