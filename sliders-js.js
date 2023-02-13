var button = document.querySelector('.main__button');
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
   
    sony.style.display = 'flex';
    viewsonic.style.display = 'flex';
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
        sony.style.display = 'none';
        viewsonic.style.display = 'none';
        element.remove();
        clonedElement1.remove();
        clonedElement2.remove();
    });
  
}
click();
    /*
     
    var array = Array.from(document.querySelector('.swiper__wrapper').children);
    items = array;
var visItems = array.slice(0, items);
visItems.forEach(el => el.classList.add('visibleItems'));


var icon = document.querySelector('.main__icon');
var swiper = document.querySelector('.swiper__slide--sony');
var sony = document.querySelector('.swiper__slide--sony');

buttonMore.addEventListener('click', function () {
buttonLess.classList.remove('button--hidden'); 
icon.classList.toggle('icon__rotate');   
buttonMore.classList.add('button--hidden')

});

buttonLess.addEventListener('click', function () {
    buttonMore.classList.remove('button--hidden'); 
    icon.classList.toggle('icon__rotate');  
    buttonLess.classList.add('button--hidden');  
});

/*
buttonMore.addEventListener('click', function () {
   sony.classList.toggle('swiper--hidden');
});


/*
buttonMore.addEventListener('click', function() {
    var wrapper = document.querySelector('.swiper__wrapper');
var template = document.querySelector('#element__template').content;
    var element = template.querySelector('li');
    var clonedElement = element.cloneNode(true);
    wrapper.appendChild(element);
    wrapper.appendChild(clonedElement);
});

    

buttonMore.addEventListener('click', function() {
    var element = template.querySelector('li');
    var clonedElement = element.cloneNode(true);
   element.remove();
   clonedElement.remove();
});

    var elements = document.querySelector('swiper__wrapper');
    for (var i = 0; i < array.length; i++){
        var element = elements[i];
        console.log(element);
        element.classList.add('visibleItems');
    }
*/