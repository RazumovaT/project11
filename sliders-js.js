
var buttonMore = document.querySelector('.main__showmoreButton');
var buttonLess = document.querySelector('.main__showlessButton');
var icon = document.querySelector('.main__icon');
var swiper = document.querySelector('.swiper__slide--sony');
var sony = document.querySelector('.swiper__slide--sony');
while (buttonLess.classList.contains('button--hiden') === 'true'){
    document.getElementById('swipper--hidden').hidden = true;
    
}
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

 
*/