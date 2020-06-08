document.addEventListener('DOMContentLoaded', thumbnailListener);

function thumbnailListener() {
  const thumbnails = document.querySelectorAll('a[data-view="thumbnail"]');

  for (const key of thumbnails) {
    key.addEventListener('click', changeImg);
  }
}

function changeImg(e) {
  e.preventDefault();

  const mainView = document.querySelector('img[data-view="main"]');
  const thumb = e.currentTarget.children[0];
  const thumbnailSrc = thumb.src;
  const mainViewSrc = mainView.src;
  const newMainSrc = thumbnailSrc.split('thumbnail-').join('thumbnail-main-');
  const newThumbSrc = mainViewSrc.split('thumbnail-main-').join('thumbnail-');
  
  thumb.src = newThumbSrc;
  mainView.src = newMainSrc;
}
