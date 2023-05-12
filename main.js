const header = document.querySelector('header')
const menu = document.querySelector('.menu')
const burgerBtn = document.querySelector('.burger')


const stickHeader = () => {
    const scroll = window.scrollY

    if(scroll>0) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
}

const showBurger = () => {
    burgerBtn.classList.toggle('active')
    menu.classList.toggle('active')
}









burgerBtn.addEventListener('click', showBurger)
window.addEventListener('scroll', stickHeader)

