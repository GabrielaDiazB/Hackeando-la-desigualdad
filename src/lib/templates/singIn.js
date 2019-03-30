export const signIn = () => {
    const templateSignIn = `
    <div id="signin-container" class="signin-container">
        <h2>Ingresa directamente con:</h2>
        <button id="facebook-login" class="fa fa-facebook"></button>
        <button id="google-login" class="fa fa-google"></button>
        <button id="twitter-login" class="fa fa-twitter"></button>
      </div>
    </div>`;
    const divElem = document.createElement('div');
    divElem.innerHTML = templateSignIn;
  
    // const btnFacebook = divElem.querySelector('#facebook-login');
    // btnFacebook.addEventListener('click', facebookOnClick);
  
    // const btnGoogle = divElem.querySelector('#google-login');
    // btnGoogle.addEventListener('click', googleOnClick);

    // const btnTwitter = divElem.querySelector('#twitter-login');
    // btnTwitter.addEventListener('click', twitterOnClick);
    
    return divElem;
};  