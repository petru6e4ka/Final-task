var inspirationsContainer = document.querySelector('div[data-scroll="container"]');
var inspirationsList = document.querySelector('ul[data-scroll="list"]');
var inspirationsItems = document.querySelectorAll('ul[data-scroll="list"] li');
var btnPrev = document.querySelector('button[data-scroll="prev"]');
var btnNext = document.querySelector('button[data-scroll="next"]');
var decimal = 10;
var btnsWidth = parseInt(getComputedStyle(btnPrev).width, decimal);
var scrollWidth = parseInt(getComputedStyle(inspirationsItems[0]).width, decimal);
var scrollPosition = btnsWidth;
window.addEventListener('resize', resetScroll);
btnPrev.addEventListener('click', scrollPrev);
btnNext.addEventListener('click', scrollNext);

function scrollPrev() {
  var toScroll = scrollPosition + scrollWidth > -scrollWidth ? -scrollPosition + btnsWidth : scrollWidth;
  scrollPosition += toScroll;
  inspirationsList.style.left = scrollPosition + 'px';
}

function scrollNext() {
  var currentImgContainerWidth = parseInt(getComputedStyle(inspirationsContainer).width, decimal);
  var hiddenItemsWidth = scrollWidth * inspirationsItems.length - currentImgContainerWidth;
  var toScroll = scrollPosition - scrollWidth >= -hiddenItemsWidth ? scrollWidth : hiddenItemsWidth + scrollPosition + btnsWidth;
  scrollPosition -= toScroll;
  inspirationsList.style.left = scrollPosition + 'px';
}

function resetScroll() {
  inspirationsList.style.left = btnsWidth + 'px';
  scrollPosition = btnsWidth;
}
