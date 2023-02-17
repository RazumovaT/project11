var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: 1.2
});


var buttonMore = document.querySelector('.showmoreButton');
var buttonLess = document.querySelector('.showlessButton');
var icon = document.querySelector('.main__button');

var sony = document.querySelector('.swiper__slide--sony');
var viewsonic = document.querySelector('.swiper__slide--viewsonic');

var buttonMore2 = document.querySelector('.showmore--fixing');
var buttonLess2 = document.querySelector('.showless--fixing');
var icon2 = document.querySelector('.icon--fixing');
var display = document.querySelector('.fixing__button:nth-child(4)');
var wrapper = document.querySelector('.swiper__wrapper');
var template = document.querySelector('#element__template').content;
var element = template.querySelector('li');
var clonedElement1 = element.cloneNode(true);
var clonedElement2 = element.cloneNode(true);


element.classList.add('swiper__slide--lenovo');
clonedElement1.classList.add('swiper__slide--samsung');
clonedElement2.classList.add('swiper__slide--apple');

var on = function () {
  buttonLess.classList.remove('button--hidden'); 
  icon.classList.toggle('icon__rotate');   
  buttonMore.classList.add('button--hidden');
};

var off = function () {
  buttonMore.classList.remove('button--hidden'); 
  icon.classList.toggle('icon__rotate');  
  buttonLess.classList.add('button--hidden');
}

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
        viewsonic.classList.add('swiper--hidden');
        element.remove();
        clonedElement1.remove();
        clonedElement2.remove();
        buttonMore.classList.remove('button--hidden'); 
        icon.classList.toggle('icon__rotate');  
        buttonLess.classList.add('button--hidden');
    });
  
}
click();
   

buttonMore2.addEventListener('click',  () => {
  buttonLess2.classList.remove('button--hidden'); 
  icon2.classList.toggle('icon__rotate');   
  buttonMore2.classList.add('button--hidden');
  display.classList.remove('button--hidden');
  });

  buttonLess2.addEventListener('click',  () => {
    buttonMore2.classList.remove('button--hidden'); 
  icon2.classList.toggle('icon__rotate');  
  buttonLess2.classList.add('button--hidden');
  display.classList.add('button--hidden');
      });
    