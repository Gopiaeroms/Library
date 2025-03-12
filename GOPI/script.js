// Handle the search filter functionality
function filterMenu() {
    let input = document.getElementById('menu-search').value.toLowerCase();
    let items = document.querySelectorAll('.menu-item');

    items.forEach(item => {
        let itemName = item.querySelector('p').textContent.toLowerCase();
        if (itemName.includes(input)) {
            item.style.display = 'block'; // Show item
        } else {
            item.style.display = 'none'; // Hide item
        }
    });
}

// Cart functionality (Add, Remove, Update Total Price)
let cart = [];
let cartCount = document.getElementById('cart-count');
let totalPriceElement = document.getElementById('total-price');
let cartItemsContainer = document.getElementById('cart-items');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const item = {
            name: this.dataset.item,
            price: parseInt(this.dataset.price)
        };

        cart.push(item);
        cartCount.textContent = cart.length;
        updateTotalPrice();
        displayCartItems();
    });
});

function updateTotalPrice() {
    let totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    totalPriceElement.textContent = `Total: ₹${totalPrice}`;
}

function displayCartItems() {
    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <p>${item.name}</p>
            <p>₹${item.price}</p>
        `;
        cartItemsContainer.appendChild(itemDiv);
    });
}
