import { routerRed } from './router.js';

const init = () => { 
  const config = {
    apiKey: 'AIzaSyDPltOS5kSZ9shA7Euwz2xw11UCtmSOm-w',
    authDomain: 'hackaton-imnot.firebaseapp.com',
    databaseURL: 'https://hackaton-imnot.firebaseio.com',
    projectId: 'hackaton-imnot',
    storageBucket: 'hackaton-imnot.appspot.com',
    messagingSenderId: '729753010076'
  };
  firebase.initializeApp(config);
  routerRed();
};


window.onload = init();