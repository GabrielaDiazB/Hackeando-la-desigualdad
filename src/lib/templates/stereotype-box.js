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
        addStereotypeOnClick();
    });

    // const ul = divElement.querySelector('text-box');
    // data.forEach((post) => {
    //     ul.appendChild(itemStereotype(post))
    // });

    return divElement;
}

const itemStereotype = () => {
    const liElement = document.createElement('li');
    liElement.classList.add('mdl-list__item')
    liElement.innerHTML = `
        <div id="stereotype-result">
            <p id="text-list"></p>
            <label for="text-list"></label>
        </div>`;
    return liElement;
}

const totalValue = () => {
    const total = `
    <h3>Total:</h3>
    <button type="button" id="next-btn">Siguiente</button>`;
    const totalElement = document.createElement('div');
    totalElement.innerHtml = total;
}




