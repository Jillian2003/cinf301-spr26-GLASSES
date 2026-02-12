// Minimal cart functionality for Shop page
// Increments a cart count when Add to Cart buttons are clicked.

document.addEventListener('DOMContentLoaded', () => {
  const countEl = document.querySelector('#cart-count');
  let count = 0;

  const buttons = Array.from(document.querySelectorAll('.add-to-cart'));
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      count += 1;
      if (countEl) countEl.textContent = String(count);
    });
  });
});
