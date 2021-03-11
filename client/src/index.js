import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";

firebase.initializeApp({
  apiKey: "AIzaSyB4nFLOSH2WOe63Bam8M8sufsHrctMnoqw",
  authDomain: "englishwebsite-e7339.firebaseapp.com",
  databaseURL: "https://englishwebsite-e7339-default-rtdb.firebaseio.com",
  projectId: "englishwebsite-e7339",
  storageBucket: "englishwebsite-e7339.appspot.com",
  messagingSenderId: "319585569362",
  appId: "1:319585569362:web:2bbb036cc588e04fc42d8b",
  measurementId: "G-5W4BT66G3Z"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
