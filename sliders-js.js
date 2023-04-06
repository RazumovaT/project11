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
    },
  },
});

/*    Показать все       */

const buttonMore = document.querySelector(".showmoreButton");
const buttonLess = document.querySelector(".showlessButton");
const iconBrands = document.querySelector(".main__button");

const sony = document.querySelector(".slide--sony");
const viewsonic = document.querySelector(".slide--viewsonic");

const buttonMoreHeader = document.querySelector(".showmore--fixing");
const buttonLessHeader = document.querySelector(".showless--fixing");
const iconFeatures = document.querySelector(".icon--fixing");

const fixingPk = document.querySelector(".fixing--pk");
const fixingDisplay = document.querySelector(".fixing--display");
const fixingPhone = document.querySelector(".fixing--phone");
const fixingCamera = document.querySelector(".fixing--camera");
const fixingEquipment = document.querySelector(".fixing--equipment");

const wrapperBrands = document.querySelector(".wrapper--brands");
const wrapperFixing = document.querySelector(".wrapper--fixing");
const brandLenovoCopy = document.querySelector("#element__template1").content;
const brandLenovo = brandLenovoCopy.querySelector("div");
const brandSamsungCopy = document.querySelector("#element__template2").content;
const brandSamsung = brandSamsungCopy.querySelector("div");
const brandAppleCopy = document.querySelector("#element__template3").content;
const brandApple = brandAppleCopy.querySelector("div");

var on = function () {
  buttonLess.classList.remove("button--hidden");
  iconBrands.classList.toggle("icon__rotate");
  buttonMore.classList.add("button--hidden");
};

const clickBrands = function () {
  iconBrands.classList.toggle("icon__rotate");
  fixingPk.classList.toggle("button--hidden");
  buttonLess.classList.toggle("button--hidden");
  buttonMore.classList.toggle("button--hidden");
};

buttonMore.addEventListener("click", () => {
  sony.classList.remove("hidden");
  viewsonic.classList.remove("hidden");
  wrapperBrands.appendChild(brandLenovo);
  wrapperBrands.appendChild(brandSamsung);
  wrapperBrands.appendChild(brandApple);
  clickBrands();
});
buttonLess.addEventListener("click", function () {
  sony.classList.add("hidden");
  viewsonic.classList.add("hidden");
  brandLenovo.remove();
  brandSamsung.remove();
  brandApple.remove();
  clickBrands();
});

const clickFixing = function () {
  buttonLessHeader.classList.toggle("button--hidden");
  iconFeatures.classList.toggle("icon__rotate");
  buttonMoreHeader.classList.toggle("button--hidden");
  fixingDisplay.classList.toggle("button--hidden");
  fixingCamera.classList.toggle("button--hidden");
  fixingPhone.classList.toggle("button--hidden");
  fixingEquipment.classList.toggle("button--hidden");
};

buttonMoreHeader.addEventListener("click", () => {
  // buttonLess2.classList.remove("button--hidden");
  // icon2.classList.toggle("icon__rotate");
  // buttonMore2.classList.add("button--hidden");
  clickFixing();
});

buttonLessHeader.addEventListener("click", () => {
  // buttonLess2.classList.add("button--hidden");
  // icon2.classList.toggle("icon__rotate");
  // buttonMore2.classList.remove("button--hidden");
  fixingPk.classList.toggle("hidden");
  clickFixing();
});

/*   Попап -  меню   */

const body = document.querySelector("body");
const burger = document.querySelector(".button--burger");
const popupMenu = document.querySelector(".popup--menu");
const cancelB = document.querySelectorAll(".popup--close");
const wrapperBody = document.querySelector(".main__wrapper");
const callB = document.querySelector(".connection--call");
const popupCall = document.querySelector(".popup--call");
const popup = document.querySelectorAll(".popup");
const connectionB = document.querySelector(".connection--chat");
const popupConnection = document.querySelector(".popup--connection");
const callBHeader = document.querySelector(".call--header");
const connectionBHeader = document.querySelector(".chat--header");

const popupMenuClose = function () {
  popupMenu.classList.add("close");
  popupMenu.classList.add("opacity");
};

burger.addEventListener("click", () => {
  wrapperBody.style.opacity = "0.2";
  popupMenu.classList.add("open");
  popupMenu.classList.remove("close");
  document.body.style.position = "fixed";
});

for (let i = 0; i < cancelB.length; i++) {
  cancelB[i].addEventListener("click", (event) => {
    wrapperBody.style.opacity = "1";
    popupMenu.classList.remove("opacity");
    popupMenu.classList.remove("open");
    popupMenu.classList.add("close");
    popupCall.classList.remove("popup--open");
    popupCall.classList.add("close");
    popupConnection.classList.remove("popup--open");
    popupConnection.classList.add("close");
    document.body.style.position = "";
    event.preventDefault();
  });
}

callB.addEventListener("click", () => {
  wrapperBody.style.opacity = "0.2";
  popupMenu.classList.add("close");
  popupCall.classList.remove("close");
  popupCall.classList.add("popup--open");
  popupMenu.classList.add("opacity");
});

callBHeader.addEventListener("click", () => {
  wrapperBody.style.opacity = "0.2";
  popupMenu.classList.add("close");
  popupCall.classList.remove("close");
  popupCall.classList.add("popup--open");
  popupMenu.classList.add("opacity");
});

connectionB.addEventListener("click", () => {
  wrapperBody.style.opacity = "0.2";
  popupConnection.classList.add("popup--open");
  popupConnection.classList.remove("close");
  popupMenuClose();
});

connectionBHeader.addEventListener("click", () => {
  wrapperBody.style.opacity = "0.2";
  popupConnection.classList.add("popup--open");
  popupConnection.classList.remove("close");
  popupMenuClose();
});

const content = document.querySelector(".content");
content.addEventListener("click", (e) => {
  if (
    e.target !== popupMenu &&
    e.target !== burger &&
    !e.target.closest(".popup") &&
    e.target !== callBHeader &&
    e.target !== connectionBHeader
  ) {
    popupMenu.classList.add("close");
    popupMenu.classList.remove("open");
    popupCall.classList.add("close");
    popupConnection.classList.add("close");
    popupCall.classList.remove("popup--open");
    popupConnection.classList.remove("popup--open");
    wrapperBody.style.opacity = "1";
    popupMenu.classList.remove("opacity");
    document.body.style.position = "";
  }
});
