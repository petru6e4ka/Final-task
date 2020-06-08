const basket = document.querySelector('a[data-basket="qty"]');

document.addEventListener('DOMContentLoaded', basketQty);
document.addEventListener('DOMContentLoaded', inputEvents);
document.addEventListener('DOMContentLoaded', btnDeleteEvents);

function basketQty() {
  const purchasesQty = document.querySelectorAll('.purchase-row input[type="number"]');
  const decimal = 10;
  let qty = 0;

  if(purchasesQty) {
    for(const key of purchasesQty) {
      qty += parseInt(key.value, decimal);
    }
  }

  basket.textContent = `Basket(${qty})`;
}

function inputEvents() {
  const purchasesQty = document.querySelectorAll('.purchase-row input[type="number"]');

  if(purchasesQty) {
    for(const key of purchasesQty) {
      key.addEventListener('change', basketQty);
    }
  }
}

function btnDeleteEvents() {
  const purchasesDelete = document.querySelectorAll('.purchase-row button[data-del="delete"]');

  if(purchasesDelete) {
    for(const key of purchasesDelete) {
      key.addEventListener('click', deleteItem)
    }
  }
}

function deleteItem(e) {
  const toDelete = e.currentTarget.closest('li');
  const list = e.currentTarget.closest('ol');

  toDelete.remove();

  if(!list.children.length) {
    const emptyLi = document.createElement('li');
    emptyLi.classList.add('empty');
    emptyLi.textContent = 'Your basket is empty';
    list.append(emptyLi);
  }

  basketQty();
}
