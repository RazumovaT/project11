/*     Свайпер      */

    const swiper = new Swiper(".mySwiper", {
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

const buttonMore = document.querySelector('.showmoreButton');
const buttonLess = document.querySelector('.showlessButton');
const icon = document.querySelector('.main__button');

const sony = document.querySelector('.slide--sony');
const viewsonic = document.querySelector('.slide--viewsonic');

const buttonMore2 = document.querySelector('.showmore--fixing');
const buttonLess2 = document.querySelector('.showless--fixing');
const icon2 = document.querySelector('.icon--fixing');

const fixingPk = document.querySelector('.fixing--pk');
const fixingDisplay = document.querySelector('.fixing--display');
const fixingPhone = document.querySelector('.fixing--phone');
const fixingCamera = document.querySelector('.fixing--camera');
const fixingEquipment = document.querySelector('.fixing--equipment');

const wrapperBrands = document.querySelector('.wrapper--brands');
const wrapperFixing = document.querySelector('.wrapper--fixing');
const template1 = document.querySelector('#element__template1').content;
const brandLenovo = template1.querySelector('div');
const template2 = document.querySelector('#element__template2').content;
const brandSamsung = template2.querySelector('div');
const template3 = document.querySelector('#element__template3').content;
const brandApple = template3.querySelector('div');


const clickBrands = function () {
  icon.classList.toggle('icon__rotate'); 
  fixingPk.classList.toggle('button--hidden');
  buttonLess.classList.toggle('button--hidden');
  buttonMore.classList.toggle('button--hidden');
}

buttonMore.addEventListener('click',  () => {
  sony.classList.remove('hidden');
  viewsonic.classList.remove('hidden');
  wrapperBrands.appendChild(brandLenovo);
  wrapperBrands.appendChild(brandSamsung);
  wrapperBrands.appendChild(brandApple);
  clickBrands();  
});

    buttonLess.addEventListener('click', function () {
      sony.classList.add('hidden');
      viewsonic.classList.add('hidden');
      brandLenovo.remove();
      brandSamsung.remove();
      brandApple.remove();
      clickBrands(); 
    });
  
    const clickFixing = function () {
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

  const burger = document.querySelector('.button--burger');
  const popupMenu = document.querySelector('.popup--menu');
  const cancelB = document.querySelectorAll('.popup--close');
  const wrapperBody = document.querySelector('.main__wrapper');
  const callB = document.querySelector('.connection--call');
  const popupCall = document.querySelector('.popup--call');
  const popup = document.querySelectorAll('.popup');
  const connectionB = document.querySelector('.connection--chat');
  const popupConnection = document.querySelector('.popup--connection');
  const callBHeader = document.querySelector('.call--header');
  const connectionBHeader = document.querySelector('.chat--header');

  const popupMenuClose = function () {
    popupMenu.classList.add('close');
    popupMenu.classList.add('opacity');
  }

burger.addEventListener('click',  () => {
wrapperBody.style.opacity = '0.2';
popupMenu.classList.add('open');
popupMenu.classList.remove('close');
});

for (let i = 0; i < cancelB.length; i++ ) {
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
  popupCall.classList.remove('close');
  popupCall.classList.add('popup--open');
  popupMenu.classList.add('opacity');
});

callBHeader.addEventListener('click', () => {
  wrapperBody.style.opacity = '0.2';
  popupMenu.classList.add('close');
  popupCall.classList.remove('close');
  popupCall.classList.add('popup--open');
  popupMenu.classList.add('opacity');
});
  
  connectionB.addEventListener('click',  () => {
  wrapperBody.style.opacity = '0.2';
  popupConnection.classList.add('popup--open');
  popupConnection.classList.remove('close');
  popupMenuClose();
  });

  connectionBHeader.addEventListener('click',  () => {
    wrapperBody.style.opacity = '0.2';
    popupConnection.classList.add('popup--open');
    popupConnection.classList.remove('close');
   popupMenuClose();
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



