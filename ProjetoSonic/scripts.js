let prevbutton = document.getElementById('prev')
let nextbutton = document.getElementById('next')
let container = document.getquerySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots= indicator.querySelectorAll('ul li')

let active = 0
let firstPosition = 0
let lastPosition = items.lenght -1

nextbutton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active +1 > lastPosition ? 0 : active + 1
    items[active].classList.add('active')

    letdotsOld = indicator.querySelector('ul .li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')
}

prevbutton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active - 1 < firstPosition ? lastPosition : active - 1
    items[active].classList.add('active')

}