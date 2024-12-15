document.addEventListener('DOMContentLoaded', solve);

function solve() {
   const resultEl = document.querySelector('textarea[disabled]');
   const checkoutEl = document.querySelector('button.checkout');
   const prodCatalogEl = document.querySelector('.shopping-cart');

   const products = {};

   prodCatalogEl.addEventListener('click', (e) =>{
      if ( e.target.nodeName != 'BUTTON') return;
      console.log(e.target);

      switch(e. target.getAttribute('class')){
         case 'add-product':
            const productEL = e.target.closest('.product');
            const name = productEL.querySelector('.product-title').textContent;
            const price = Number(productEL.querySelector('.product-line-price').textContent);

            resultEl.value += `Added ${name} for ${price.toFixed(2)} to the cart.`

            if ( ! products.hasOwnProperty(name)) products[name] = 0;
            // products[name] ??= 0;
            products[name] += price;

            break;
         
         case 'checkout':
            const productNames = Object.keys(products);
            const totalPrice = productNames.reduce((price, name) => price + products[name], 0);

            resultEl.value += `You bought ${productNames.join(', ')} for ${totalPrice.toFixed(2)}.`;

            prodCatalogEl.querySelectorAll('button').forEach(el => el.setAttribute('disabled', 'disabled'));
            break;

      }
      console.log(products)

   });



}
