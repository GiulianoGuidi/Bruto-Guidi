import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAmMYqsOSrv453datXxx53u3hbKqhGmwpA",
  authDomain: "bruto-panesypizza.firebaseapp.com",
  projectId: "bruto-panesypizza",
  storageBucket: "bruto-panesypizza.appspot.com",
  messagingSenderId: "445458354212",
  appId: "1:445458354212:web:b5def400b7f922d48d88b1"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
