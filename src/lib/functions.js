import {wordss} from '../data/words.js';

const arrKeys = Object.entries(wordss);

export const searchDataFunction = (data, dataSearch) => {
  let dataCopy = []; // Copia de la data
  let arraySearch = []; // Data en minúsculas
  let newArraySearch = [];
  
  for (let i = 0; i < data.length; i++)
    dataCopy.push(Object.assign({}, data[i]));
  
  for (let i = 0; i < dataCopy.length; i++) {
    arraySearch.push(dataCopy[i].arrKeys.toLowerCase());
    console.log(arraySearch);
    if (arraySearch[i].indexOf(dataSearch.toLowerCase()) !== -1) {
      newArraySearch.push(dataCopy[i]);
    }  
  }
  return newArraySearch;
};

export const addUserStereotypeData = (content) => { 
  let posts = firebase.firestore().collection('data');
  let data = {
    content: content,
    date: firebase.firestore.FieldValue.serverTimestamp(),
  };
  return posts.add(data);
};

// export const getStereotypeData = (callback) => { 
//   return firebase.firestore().collection('data')
//     .onSnapshot((querySnapshot) => {
//       let data = {};
//       querySnapshot.forEach((doc) => {
//         data = { id: doc.id, ...doc.data()
//         };
//       });   
//       callback(data);
//     });
// };

export const totalValue = () => {
  const totalLi = document.querySelector('#listNum');

  let total = 0;
  for (let i = 0; i < totalLi.keys; i++) {
    return total += [i];
  }
};

export const registerFacebookLogIn = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};
  
// Función para Iniciar Sesión con Google
export const registerGoogleLogIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};
  
// Función para Iniciar Sesión con Twitter
export const registerTwitterLogIn = () => {
  const provider = new firebase.auth.TwitterAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};