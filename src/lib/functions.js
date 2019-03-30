
export const searchDataFunction = (data, dataSearch) => {
  let dataCopy = []; // Copia de la data
  let arraySearch = []; // Data en minúsculas
  let newArraySearch = [];
  
  for (let i = 0; i < data.length; i++)
    dataCopy.push(Object.assign({}, data[i]));
  
  for (let i = 0; i < dataCopy.length; i++) {
    arraySearch.push(dataCopy[i].name.toLowerCase());
    if (arraySearch[i].indexOf(dataSearch.toLowerCase()) !== -1) {
      newArraySearch.push(dataCopy[i]);
    }  
  }
  return newArraySearch.value;
};


export const addUserStereotypeData = (content, idUser) => { 
  let posts = firebase.firestore().collection('data');
  let data = {
    content: content,
    uidUser: idUser,
    date: firebase.firestore.FieldValue.serverTimestamp(),
  };
  return posts.add(data);
};

export const getStereotypeData = (callback) => { 
  const user = firebase.auth().currentUser;
  return firebase.firestore().collection('data').where('userId', '==', user.uid)
    .onSnapshot((querySnapshot) => {
      let data = {};
      querySnapshot.forEach((doc) => {
        data = { id: doc.id, ...doc.data()
        };
      });   
      callback(data);
    });
};

export const totalValue = () => {
  const totalLi = document.querySelector('#listNum');

  let total = 0;
  for (let i = 0; i < totalLi.keys; i++) {
    return total += [i];
  }
};

