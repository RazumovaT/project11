/*     Свайпер      */

    var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
      },
      slidesPerView: 1.25,
      breakpoints: {
        499: {
            enabled: false,
            width: 350,
            spaceBetween: 24,
        }
      },
    });
   

/*    Показать все       */

var buttonMore = document.querySelector('.showmoreButton');
var buttonLess = document.querySelector('.showlessButton');
var icon = document.querySelector('.main__button');

let sony = document.querySelector('.slide--sony');
let viewsonic = document.querySelector('.slide--viewsonic');

var buttonMore2 = document.querySelector('.showmore--fixing');
var buttonLess2 = document.querySelector('.showless--fixing');
var icon2 = document.querySelector('.icon--fixing');

let fixingPk = document.querySelector('.fixing--pk');
let fixingDisplay = document.querySelector('.fixing--display');
let fixingPhone = document.querySelector('.fixing--phone');
let fixingCamera = document.querySelector('.fixing--camera');
let fixingEquipment = document.querySelector('.fixing--equipment');

var wrapperBrands = document.querySelector('.wrapper--brands');
let wrapperFixing = document.querySelector('.wrapper--fixing');
var template1 = document.querySelector('#element__template1').content;
var element1 = template1.querySelector('div');
var template2 = document.querySelector('#element__template2').content;
var clonedElement2 = template2.querySelector('div');
var template3 = document.querySelector('#element__template3').content;
var clonedElement3 = template3.querySelector('div');


let clickBrands = function () {
  icon.classList.toggle('icon__rotate'); 
  fixingPk.classList.toggle('button--hidden');
  buttonLess.classList.toggle('button--hidden');
  buttonMore.classList.toggle('button--hidden');
}

buttonMore.addEventListener('click',  () => {
  sony.classList.remove('hidden');
  viewsonic.classList.remove('hidden');
  wrapperBrands.appendChild(element1);
  wrapperBrands.appendChild(clonedElement2);
  wrapperBrands.appendChild(clonedElement3);
  clickBrands();  
});

    buttonLess.addEventListener('click', function () {
      sony.classList.add('hidden');
      viewsonic.classList.add('hidden');
        element1.remove();
        clonedElement2.remove();
        clonedElement3.remove();
        clickBrands(); 
    });
  
let clickFixing = function () {
  buttonLess2.classList.toggle('button--hidden'); 
  icon2.classList.toggle('icon__rotate');
  buttonMore2.classList.toggle('button--hidden');
  fixingDisplay.classList.toggle('button--hidden');
  fixingCamera.classList.toggle('button--hidden');
  fixingPhone.classList.toggle('button--hidden');
  fixingEquipment.classList.toggle('button--hidden');
};
   

buttonMore2.addEventListener('click',  () => {
fixingPk.classList.remove('hidden');
 clickFixing();
  });

  buttonLess2.addEventListener('click',  () => {
    fixingPk.classList.add('hidden');
    clickFixing(); 
      }); 

  /*   Попап -  меню   */   

var burger = document.querySelector('.button--burger');
var popupMenu = document.querySelector('.popup--menu');
var cancelB = document.querySelectorAll('.popup--close');
var wrapperBody = document.querySelector('.main__wrapper');
var callB = document.querySelector('.connection--call');
var popupCall = document.querySelector('.popup--call');
var popup = document.querySelectorAll('.popup');
var connectionB = document.querySelector('.connection--chat');
var popupConnection = document.querySelector('.popup--connection');
var callBHeader = document.querySelector('.call--header');
var connectionBHeader = document.querySelector('.chat--header');

burger.addEventListener('click',  () => {
wrapperBody.style.opacity = '0.2';
popupMenu.classList.add('open');
popupMenu.classList.remove('close');
});

for (var i = 0; i < cancelB.length; i++ ) {
cancelB[i].addEventListener('click',  (event) => {
  wrapperBody.style.opacity = '1';
  popupMenu.classList.remove('opacity');
  popupMenu.classList.remove('open');
  popupMenu.classList.add('close');
  popupCall.classList.remove('popup--open');
  popupCall.classList.add('close');
  popupConnection.classList.remove('popup--open');
  popupConnection.classList.add('close');
  event.preventDefault();
  });
}

  callB.addEventListener('click', () => {
  wrapperBody.style.opacity = '0.2';
  popupMenu.classList.add('close');
  popupCall.classList.add('popup--open');
  popupMenu.classList.add('opacity');
});

callBHeader.addEventListener('click', () => {
  wrapperBody.style.opacity = '0.2';
  popupMenu.classList.add('close');
  popupCall.classList.add('popup--open');
  popupMenu.classList.add('opacity');
});
  
  connectionB.addEventListener('click',  () => {
  wrapperBody.style.opacity = '0.2';
  popupConnection.classList.add('popup--open');
  popupConnection.classList.remove('close');
  popupMenu.classList.add('close');
  popupMenu.classList.add('opacity');
  });

  connectionBHeader.addEventListener('click',  () => {
    wrapperBody.style.opacity = '0.2';
    popupConnection.classList.add('popup--open');
    popupConnection.classList.remove('close');
    popupMenu.classList.add('close');
    popupMenu.classList.add('opacity');
    });

const content = document.querySelector('.content');
content.addEventListener('click', (e) => {
  if (e.target !== popupMenu && e.target !== burger && !e.target.closest('.popup') && e.target !== callBHeader && e.target !== connectionBHeader) {
    popupMenu.classList.add('close');
    popupMenu.classList.remove('open');
    popupCall.classList.add('close');
    popupConnection.classList.add('close');
    popupCall.classList.remove('popup--open');
    popupConnection.classList.remove('popup--open');
    wrapperBody.style.opacity = '1';
    popupMenu.classList.remove('opacity');
  }
});



