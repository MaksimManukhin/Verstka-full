$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        center:true,
        loop:true,
        margin:30,
        items:3,
       responsive:{ 
        850:{
            items:2
        },
        1000:{
            margin:20,
            items:3
        },
        1200:{
            margin:30,
            
        }
       }
    });
});

const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav')
const menuIcon = document.querySelector('.menu-icon');


navBtn.onclick=function(){
    menuIcon.classList.toogle(`menu-icon-active`)
 }

