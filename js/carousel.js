const inspirationsContainer = document.querySelector('div[data-scroll="container"]');
const inspirationsList = document.querySelector('ul[data-scroll="list"]');
const inspirationsItems = document.querySelectorAll('ul[data-scroll="list"] li');
const btnPrev = document.querySelector('button[data-scroll="prev"]');
const btnNext = document.querySelector('button[data-scroll="next"]');
const decimal = 10;
const btnsWidth = parseInt(getComputedStyle(btnPrev).width, decimal);
const scrollWidth = parseInt(getComputedStyle(inspirationsItems[0]).width, decimal);
let scrollPosition = btnsWidth;

window.addEventListener('resize', resetScroll);
btnPrev.addEventListener('click', scrollPrev);
btnNext.addEventListener('click', scrollNext);

function scrollPrev() {
  const toScroll = scrollPosition + scrollWidth > -scrollWidth ? 
  -scrollPosition + btnsWidth : scrollWidth;

  scrollPosition += toScroll;
  inspirationsList.style.left = scrollPosition + 'px';
}

function scrollNext() {
  const currentImgContainerWidth = parseInt(getComputedStyle(inspirationsContainer).width, decimal);
  const hiddenItemsWidth = scrollWidth * inspirationsItems.length - currentImgContainerWidth;
  const toScroll = scrollPosition - scrollWidth >= -hiddenItemsWidth ? 
     scrollWidth : hiddenItemsWidth + scrollPosition + btnsWidth;
  
  scrollPosition -= toScroll;
  inspirationsList.style.left = scrollPosition + 'px'; 
}

function resetScroll() {
  inspirationsList.style.left = btnsWidth + 'px';
  scrollPosition = btnsWidth;
}
