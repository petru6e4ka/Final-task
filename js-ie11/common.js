var searchForm = document.forms.search;
var searchLabel = document.querySelector('#searchLabel');
document.addEventListener('DOMContentLoaded', searchCollapse);
searchForm.addEventListener('keydown', escHandler);
searchForm.addEventListener('submit', searchHandler);
searchLabel.addEventListener('click', searchHandler);

function searchHandler(event) {
  event.preventDefault();
  var searchInput = document.querySelector('#searchInput');
  var searchValue = searchInput.value.trim();
  var expanded = searchInput.classList.contains('search-form__input-expanded');

  if (expanded && searchValue) {
    window.location.href = './category-all.html';
  } else if (expanded && !searchValue) {
    searchCollapse();
  } else {
    searchExpand();
  }
}

function searchCollapse() {
  var searchInput = document.querySelector('#searchInput');
  searchInput.value = '';
  searchInput.classList.remove('search-form__input-expanded');
  searchInput.blur();
}

function searchExpand() {
  var searchInput = document.querySelector('#searchInput');
  searchInput.classList.add('search-form__input-expanded');
  searchInput.focus();
}

function escHandler(event) {
  var escCode = 27;

  if (event.keyCode === escCode) {
    searchCollapse();
  }
}
