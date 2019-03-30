const changeHash = (hash) => {
    location.hash = hash;
  };
  
export const introduction = () => {
    
    const tmpIntroduction = `
    <div class="inicio-background">
    <h1 class="sub-title">Tú eliges cambiar</h1>
    <div class="rectangle"></div>
    <div id="intro-btn" class="intro-box">
        <div>
                <h2 class="intro-subtitle">Escribe</h2>
                <p>Lo que quieres comentar en tus redes o lo que has escuchado</p>
        </div>
        <img class="intro-img" src="/img/foto1.png" alt="">
    </div>
    <div id="intro-btn" class="intro-box">
        <div>
            <h2 class="intro-subtitle">Ayuda</h2>
            <p>O guía a la comunidad para un mundo mejor.</p>
        </div>
        <img class="intro-img" src="/img/foto2.png" alt="">
    </div>
</div>
`;
    const introElement = document.createElement('div');
    introElement.innerHTML = tmpIntroduction;

    const toNextSection = introElement.querySelector('#intro-btn');
    toNextSection.addEventListener('click', () => {
        changeHash('/stereotypeList')
    });

    return introElement;
}