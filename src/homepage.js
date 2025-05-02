import { createElement } from "./utils.js"
import LogoImage from './assets/images/logo.svg'

const homepage = createElement('div', 'homepage')
const logoContainer = createElement('div')
const logoTitle = createElement('h1', 'logoTitle', 'GRAND HOUSE')
const logoImg = createElement('img', 'logoImg')


console.log(LogoImage)

logoImg.src = LogoImage

logoContainer.appendChild(logoImg)
logoContainer.appendChild(logoTitle)

homepage.appendChild(logoContainer)





export {homepage}


