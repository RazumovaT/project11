var swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });

var buttonMore = document.querySelector('.main__showmoreButton');
var buttonLess = document.querySelector('.main__showlessButton');
var icon = document.querySelector('.main__button');
var sony = document.querySelector('.swiper__slide--sony');
var viewsonic = document.querySelector('.swiper__slide--viewsonic');


var wrapper = document.querySelector('.swiper__wrapper');
var template = document.querySelector('#element__template').content;
var element = template.querySelector('li');
var clonedElement1 = element.cloneNode(true);
var clonedElement2 = element.cloneNode(true);
element.classList.add('swiper__slide--lenovo');
clonedElement1.classList.add('swiper__slide--samsung');
clonedElement2.classList.add('swiper__slide--apple');

function click() {
buttonMore.addEventListener('click',  () => {
   
   
    wrapper.appendChild(element);
    wrapper.appendChild(clonedElement1);
    wrapper.appendChild(clonedElement2);
    sony.classList.remove('swiper--hidden');
    viewsonic.classList.remove('swiper--hidden');
    buttonLess.classList.remove('button--hidden'); 
    icon.classList.toggle('icon__rotate');   
    buttonMore.classList.add('button--hidden');
   

});
    buttonLess.addEventListener('click', function () {

        sony.classList.add('swiper--hidden');
        sony.classList.remove('swiper--visible');
        buttonMore.classList.remove('button--hidden'); 
        icon.classList.toggle('icon__rotate');  
        buttonLess.classList.add('button--hidden');
        sony.classList.add('swiper--hidden');
        viewsonic.classList.add('swiper--hidden');
        element.remove();
        clonedElement1.remove();
        clonedElement2.remove();
    });
  
}
click();
   