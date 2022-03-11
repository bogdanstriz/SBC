import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from './Routes';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

import 'scss/react-images.scss';
import 'scss/slick-slider.scss';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0C9suhziNgOEqE0Uk1ufZI7mt3GoNpt8",
  authDomain: "slavicbethelchurch-81e42.firebaseapp.com",
  projectId: "slavicbethelchurch-81e42",
  storageBucket: "slavicbethelchurch-81e42.appspot.com",
  messagingSenderId: "494972932316",
  appId: "1:494972932316:web:0f0ca6d96a00ee35372419",
  measurementId: "G-SCQZ0TYTDN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const browserHistory = createBrowserHistory();

const App = () => {
  return (
    <Router history={browserHistory}>
      <Routes />
    </Router>
  );
};

export default App;
