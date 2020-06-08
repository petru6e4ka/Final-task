document.addEventListener('DOMContentLoaded', thumbnailListener);

function thumbnailListener() {
  var thumbnails = document.querySelectorAll('a[data-view="thumbnail"]');

  for (var key = 0; key < thumbnails.length; key++) {
    thumbnails[key].addEventListener('click', changeImg);
  }
}

function changeImg(e) {
  e.preventDefault();
  var mainView = document.querySelector('img[data-view="main"]');
  var thumb = e.currentTarget.children[0];
  var thumbnailSrc = thumb.src;
  var mainViewSrc = mainView.src;
  var newMainSrc = thumbnailSrc.split('thumbnail-').join('thumbnail-main-');
  var newThumbSrc = mainViewSrc.split('thumbnail-main-').join('thumbnail-');
  thumb.src = newThumbSrc;
  mainView.src = newMainSrc;
}
