const UNIT_PRICE = 100;

const quantityInput = document.getElementById('quantity');

const payableDisplay = document.getElementById('payable');

const addToCartBtn = document.getElementById('addToCartBtn');

 

function updatePayable() {

    const quantity = parseInt(quantityInput.value) || 0;

    const total = UNIT_PRICE * quantity;

    

    payableDisplay.textContent = `$${total}`;

}

 
quantityInput.addEventListener('input', updatePayable);

 
addToCartBtn.addEventListener('click', () => {

    const quantity = quantityInput.value;

    const total = UNIT_PRICE * quantity;

    if (quantity > 0) {

        alert(`Successfully added ${quantity} items to your cart! Total: $${total}`);

    } else {

        alert('Please select a valid quantity.');

    }

});
 