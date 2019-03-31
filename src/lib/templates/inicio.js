const changeHash = (hash) => {
    location.hash = hash;
  };
export const inicio = () => {
    const inicioTmp = `
    <div class="inicio-background">
    <h1 class="title-text">I'M NOT</h1>
    <h3 class="sub-title">What a paper says</h3>   
    <img class ="icon-img" src="/img/iconinicio.png" alt="">
    <button id="start-btn" class="start-btn">EMPEZAR</button>
    <button id="login-btn" class="login-btn">TENGO UNA CUENTA</button>

    </div>
    `;
    const inicioElement = document.createElement('div');
    inicioElement.innerHTML = inicioTmp;

    const toIntroSection = inicioElement.querySelector('#start-btn');
    toIntroSection.addEventListener('click', () => {
        changeHash('/introduction')
    });
    return inicioElement;
}