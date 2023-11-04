import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAMSzevSWLecpMCInvg6DJlkiR2G7N9IrQ",
  authDomain: "kalamakeupstore-26383.firebaseapp.com",
  projectId: "kalamakeupstore-26383",
  storageBucket: "kalamakeupstore-26383.appspot.com",
  messagingSenderId: "388048853459",
  appId: "1:388048853459:web:c47f47b86ebe7acf313726"
};
initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


