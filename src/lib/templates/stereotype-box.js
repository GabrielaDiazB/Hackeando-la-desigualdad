import {addPostOnClick} from '../view-controller.js';


export const stereotypeBox = (data) => {
  const firstTemplate = `
    <div id= "text-box">
      <textarea name="text-input" id="stereotypes-box" cols="30" rows="10"></textarea>
      <button type="button" id="sb-button">Añadir</button>
    </div>`;
  const divElement = document.createElement('div');
  divElement.innerHTML = firstTemplate;

  const paintingDiv = divElement.querySelector('#sb-button');
  paintingDiv.addEventListener('click', () => {
    addPostOnClick();
  });
  const ul = divElement.querySelector('#text-box');
  data.forEach((post) => {
    ul.appendChild(itemStereotype(post));
  });

  return divElement;
};

const itemStereotype = (dataStereotype) => {
  const liElement = document.createElement('li');
  liElement.classList.add('mdl-list__item');
  liElement.innerHTML = `
        <div id="stereotype-result">
            <p id="text-list">${dataStereotype.content}</p>
            <label id="listNum" for="text-list">${dataStereotype.searchDataValue}</label>
        </div>`;
  return liElement;
};

export const totalValue = () => {
  const total = `
    <h3>Total:</h3>
    <button type="button" id="next-btn">Siguiente</button>`;
  const totalElement = document.createElement('div');
  totalElement.innerHtml = total;
  return totalElement;
};


