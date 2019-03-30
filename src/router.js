import { actionPlan } from './lib/templates/action-plan.js';
import { stereotypeBox } from './lib/templates/stereotype-box.js';
import { introduction } from './lib/templates/introduction.js';
import { signIn } from './lib/templates/singIn.js';
// import { getStereotypeData} from './lib/functions.js';


const changeTmp = (hash) => {
    if (hash === '#/' || hash === '' || hash === '#') {
      return viewTmp('#/introduction');
    } else if (hash === '#/introduction' || hash === '#/stereotypeList' ||hash === '#/signin' || hash === '#/actionPlan') {
      return viewTmp(hash);
    } else {
      return viewTmp('#/introduction');
    }
  };
  
  const viewTmp = (routers) => {
    const router = routers.substr(2, routers.length - 2);
    const section = document.getElementById('first-template');
    const actionPlanSection = document.getElementById('action-plan');
    actionPlanSection.innerHTML = '';
    section.innerHTML = '';
    switch (router) {  
    case 'actionPlan':
      section.appendChild(actionPlan());
      // printList((actionList) => {
      //   postSection.innerHTML = '';
      // });
      break;
    case 'signin':
    section.appendChild(signIn());
    break;
    case 'stereotypeList': 
    // getStereotypeData((data) => {
    //   section.innerHTML = '';
      section.appendChild(stereotypeBox());
    // })
    break;         
    case 'introduction':
      section.appendChild(introduction());
      break;  
    default:
      section.appendChild(introduction());
      break;
    }
  };
  
  export const routerRed = () => {
    window.addEventListener('load',
      changeTmp(window.location.hash));
    if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);
  };