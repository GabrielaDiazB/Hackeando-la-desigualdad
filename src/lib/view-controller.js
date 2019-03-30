import {wordss} from '../data/words.js';
const arrKeys = Object.values(wordss);

const changeHash = (hash) => {
  location.hash = hash;
};
    

import { addUserStereotypeData } from '../lib/functions.js';
import { searchDataFunction } from '../lib/functions.js';

// export const functionOrderSearch = () => {
//   const content = document.querySelector('#stereotypes-box').value;
//   searchDataFunction(arrKeys, content.value); 
// };

export const addPostOnClick = () => {
  const content = document.querySelector('#stereotypes-box').value;
  const contents = document.querySelector('#stereotypes-box').value;
  const searchDataValue = searchDataFunction(arrKeys, contents.value); 
  addUserStereotypeData(content, searchDataValue);
};

export const facebookOnClick = () => {
  registerFacebookLogIn()
    .then((result) => {
      changeHash('/actionPlan');
    })
    .catch((error) => { 
      alert(error);
    });
};
  
export const googleOnClick = () => {
  registerGoogleLogIn()
    .then((result) => {
      changeHash('/actionPlan');
    })
    .catch((error) => { 
      alert(error);
    });
};
    
export const twitterOnClick = () => {
  registerTwitterLogIn()
    .then((result) => {
      changeHash('/actionPlan');
    })
    .catch((error) => { 
      alert(error);
    });
};