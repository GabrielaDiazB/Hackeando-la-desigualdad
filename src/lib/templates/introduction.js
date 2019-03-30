const changeHash = (hash) => {
    location.hash = hash;
  };
  
export const introduction = () => {
    
    const tmpIntroduction = `
    <div id='introduction'>
        <p> presentacion de producto.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe molestias suscipit quibusdam sit qui ipsam voluptates, ullam ea tempora. Obcaecati, pariatur. Magnam tenetur maiores perferendis consequuntur illum odio blanditiis? Eaque.
        Reiciendis ut velit libero nisi quis saepe quod praesentium molestiae, molestias laudantium! Accusamus sit voluptatibus earum nemo magni cum repellendus blanditiis? Magnam nesciunt totam eius ipsa explicabo minima, tempore cum!
        Nihil inventore eum tenetur illum delectus atque quod, beatae ex alias placeat, deleniti veniam consequuntur facere voluptatem laboriosam dolorem quasi deserunt. Consequatur culpa cum animi suscipit. Eligendi dolor doloremque reiciendis.</p>
        <button id= "intro-btn">Siguiente</button>
    </div>`;
    const introElement = document.createElement('div');
    introElement.innerHTML = tmpIntroduction;

    const toNextSection = introElement.querySelector('#intro-btn');
    toNextSection.addEventListener('click', () => {
        changeHash('/stereotypeList')
    });

    return introElement;
}