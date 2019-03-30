import {wordss} from '../data/words.js'
const arrKeys = Object.values(wordss);

import { addUserStereotypeData } from '../lib/functions.js';
import { searchDataFunction } from '../lib/functions.js';

// export const functionOrderSearch = () => {
//   const content = document.querySelector('#stereotypes-box').value;
//   searchDataFunction(arrKeys, content.value); 
// };

export const addPostOnClick = () => {
  const content = document.querySelector('#stereotypes-box').value;
  const uidUser = idUser().uid;
  const contents = document.querySelector('#stereotypes-box').value;
  const searchDataValue = searchDataFunction(arrKeys, contents.value); 
  addUserStereotypeData(content, uidUser, searchDataValue);
};

