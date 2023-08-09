// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCcnq1F4rG8K7qNa0kikWDdKqRBkEr3Ny4',
  authDomain: 'repoquest.firebaseapp.com',
  projectId: 'repoquest',
  storageBucket: 'repoquest.appspot.com',
  messagingSenderId: '481303606464',
  appId: '1:481303606464:web:bc19b115e4ba42ebac2925',
  measurementId: 'G-MG0BGMG34N',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
