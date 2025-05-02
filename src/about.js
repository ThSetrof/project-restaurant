
import { createElement, lorem } from "./utils";
import AboutImage from './assets/images/pexels-rachel-claire-8112969.jpg'

const aboutPage = createElement('div', 'aboutPage')

const container = createElement('div', null)

const title = createElement('h1', 'aboutTitle', 'AboutUs')
const p = createElement('p', 'aboutMessage')
const img = createElement('img', 'aboutImg')
img.src = AboutImage

p.textContent = lorem.generateSentences(5)


container.append(title, p, img)

aboutPage.append(container)


export {aboutPage}