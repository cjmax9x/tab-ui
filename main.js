var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var headerElements = $$('.header')
var contentElements = $$('.content')
var iconElements = $$('.tab-icon')
var btnElement = $('.btn')

var line = $('.line')
headerElements.forEach((tab, index) => {
    tab.onclick = function(){
        $('.content.content--active')?.classList.remove('content--active')
        $('.header.header--active')?.classList.remove('header--active')
        $('.tab-icon.tab-icon--active')?.classList.remove('tab-icon--active')
        line.style.left = tab.offsetLeft + 'px'
        line.style.width = tab.offsetWidth + 'px'
        this.classList.add('header--active')
        contentElements[index].classList.add('content--active')
        iconElements[index].classList.add('tab-icon--active')
        btnElement.classList.add('btn--active')
    }
})
btnElement.onclick = function(){
        $('.content.content--active')?.classList.remove('content--active')
        $('.header.header--active')?.classList.remove('header--active')
        $('.tab-icon.tab-icon--active')?.classList.remove('tab-icon--active')
        line.style.left = 0 
        line.style.width = 0
        btnElement.classList.remove('btn--active')
}