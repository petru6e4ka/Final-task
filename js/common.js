const searchForm = document.forms.search;
const searchLabel = document.querySelector('#searchLabel');

document.addEventListener('DOMContentLoaded', searchCollapse);
searchForm.addEventListener('keydown', escHandler);
searchForm.addEventListener('submit', searchHandler);
searchLabel.addEventListener('click', searchHandler);

function searchHandler(event) {
  event.preventDefault();

  const searchInput = document.querySelector('#searchInput');
  const searchValue = searchInput.value.trim();
  const expanded = searchInput.classList.contains('search-form__input-expanded'); 
  
  if(expanded && searchValue) {
    window.location.href = './category-all.html';
  } else if(expanded && !searchValue) {
    searchCollapse();
  } else {
    searchExpand();
  }
}

function searchCollapse() {
  const searchInput = document.querySelector('#searchInput');

  searchInput.value = '';
  searchInput.classList.remove('search-form__input-expanded');
  searchInput.blur();
}

function searchExpand() {
  const searchInput = document.querySelector('#searchInput');

  searchInput.classList.add('search-form__input-expanded');
  searchInput.focus();
}

function escHandler(event) {
  const escCode = 27;

  if(event.keyCode === escCode) {
    searchCollapse();
  }
}

