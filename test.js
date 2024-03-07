var search_modal = document.querySelector('.search-modal')
var search_close_btn = document.querySelector('.search-close')
search_close_btn.onclick = function () {
    search_modal.style.display = 'none'
}
// search_close_btn.addEventListener('click',function(){
//     search_modal.style.display='none'
// })
var input_area = document.querySelector('#what-search')
var search_btn = document.querySelector('.nav-right .search_btn')
search_btn.onclick = function () {
    search_modal.style.display = 'block'
    console.log(search_modal.style.display)

}

var search_content = document.querySelector('.search-modal .content')
var search_modal = document.querySelector('.search-modal')
search_content.onclick = function (event) {
    event.stopPropagation()
}
search_modal.onclick = function () {
    search_modal.style.display = 'none'

}
var login_close = document.querySelector('.login-close-btn')
var login_modal = document.querySelector('.login-modal')
login_close.onclick = function () {
    login_modal.style.display = 'none'
}

var parent_menu=document.querySelector('#nav li:nth-child(5) a')
var sub_nav=document.querySelector('#nav>li .subnav')

parent_menu.onclick=function(){
    if(sub_nav.display=='block'){
        sub_nav.display='none'
    }
}

console.log(typeof window.innerWidth)
var icon_login = document.querySelector('.login .ti-user')
if (window.innerWidth <= 740) {
    icon_login.textContent = 'Login'
} else {
    icon_login.textContent = ''
}

window.addEventListener('resize', function () {
    if (window.innerWidth <= 740) {
        icon_login.textContent = 'Login'
    } else {
        icon_login.textContent = ''
    }
})
const lists=document.querySelectorAll('#slider .slide-nav span');

//  const navs_slide_icon = document.querySelectorAll('#slider .slide-nav a')
//  console.log(navs_slide_icon[0])
const slides = document.querySelectorAll('#slider .content .slide')
// console.log(slides)
let currentIndex = 0
 const totalSlides = lists.length
for (let i = 0; i < totalSlides; i++) {
    let icon=lists[i];
    icon.addEventListener('click', function(event){
        currentSlide(i)
        console.log(currentIndex)
    })

}
function showSlide(index) {
    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else currentIndex = index;
    slides.forEach((slide, i) => {
        const isCurrent = i === currentIndex;
        const scaleFactor = isCurrent ? 1 : 0.8;
        const transformValue=isCurrent ? 'scale(1)' : 'scale(0.8)';
        
        slide.style.transform=transformValue;
        
        lists[i].classList.toggle('active-dot',isCurrent)
    });
    const translateValue=-currentIndex*25 +'%';
    document.querySelector('#slider .content').style.transform='translateX('+translateValue+')';

}

function nextSlide(){
    showSlide(currentIndex+1)
}
function preSlide(){
    showSlide(currentIndex-1)
}
function currentSlide(index){
    showSlide(index)
}

