
import { homepage } from "./homepage.js";
import { aboutPage } from "./about.js";

import './css/style.css'


const content = document.getElementById('content')

let currentPage = homepage


content.appendChild(currentPage)

function changePage(page){

    if(page === currentPage) return

    currentPage.remove()
    currentPage = page
    content.appendChild(currentPage)
    console.log('Page Changed');
}



document.body.addEventListener('click', event => {
    if(event.target.tagName != 'BUTTON') return

    const button = event.target
    let page = homepage
    switch(button.id){
        case 'homeBtn':
            console.log('Home');
            page = homepage
            break
        case 'menuBtn':
            console.log('Menu')
            
            break
        case 'aboutBtn':
            console.log('about');
            page = aboutPage
    }
    changePage(page)
})