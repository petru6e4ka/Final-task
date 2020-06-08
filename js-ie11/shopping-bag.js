var basket = document.querySelector('a[data-basket="qty"]');
document.addEventListener('DOMContentLoaded', basketQty);
document.addEventListener('DOMContentLoaded', inputEvents);
document.addEventListener('DOMContentLoaded', btnDeleteEvents);

function basketQty() {
  var purchasesQty = document.querySelectorAll('.purchase-row input[type="number"]');
  var decimal = 10;
  var qty = 0;

  if (purchasesQty) {
    for (var key = 0; key < purchasesQty.length; key++) {
      qty += parseInt(purchasesQty[key].value, decimal);
    }
  }

  basket.textContent = 'Basket(' + qty + ')';
}

function inputEvents() {
  var purchasesQty = document.querySelectorAll('.purchase-row input[type="number"]');

  if (purchasesQty) {
    for (var key = 0; key < purchasesQty.length; key++) {
      purchasesQty[key].addEventListener('change', basketQty);
    }
  }
}

function btnDeleteEvents() {
  var purchasesDelete = document.querySelectorAll('.purchase-row button[data-del="delete"]');

  if (purchasesDelete) {
    for (var key = 0; key < purchasesDelete.length; key++) {
      purchasesDelete[key].addEventListener('click', deleteItem);
    }
  }
}

function deleteItem(e) {
  var toDelete = e.currentTarget.parentNode.parentNode;
  var list = e.currentTarget.parentNode.parentNode.parentNode;
  list.removeChild(toDelete);

  if (!list.children.length) {
    var emptyLi = document.createElement('li');
    emptyLi.classList.add('empty');
    emptyLi.textContent = 'Your basket is empty';
    list.appendChild(emptyLi);
  }

  basketQty();
}
