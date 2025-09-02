/*// index.js
// src/index.js
import odinImage from "./odin.png";
import './styles.css'  
const image = document.createElement("img");
image.src = odinImage;
   
document.body.appendChild(image);

import { greeting } from "./greeting.js";

console.log(greeting);
*/
 import _ from 'lodash';
import './style.css';

 function component() {
   const element = document.createElement('div');

   // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

   return element;
 }

 document.body.appendChild(component());