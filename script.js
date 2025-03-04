// Sample cart with image URLs
let cart = [
    { id: 1, name: "Decorative Vase", price: 25.00, quantity: 1, image: "download (2).jpeg" },
    { id: 2, name: "Wall Art", price: 45.00, quantity: 2, image: "download (3).jpeg" },
];

function renderCartItems() {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    cartItemsContainer.innerHTML = "";
    let totalPrice = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");

        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <p>${item.name}</p>
                <p>Price: $${item.price} x ${item.quantity}</p>
                <button onclick="removeItem(${item.id})">Remove</button>
            </div>
        `;

        cartItemsContainer.appendChild(itemDiv);
        totalPrice += item.price * item.quantity;
    });

    totalPriceElement.innerText = `$${totalPrice.toFixed(2)}`;
}

function removeItem(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    renderCartItems();
}

document.addEventListener("DOMContentLoaded", renderCartItems);