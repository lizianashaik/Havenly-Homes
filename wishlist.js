let wishlist = [
    { id: 1, name: "Decorative Vase", price: 25.00, image: "download (2).jpeg" },
    { id: 2, name: "Wall Art", price: 45.00, image: "download (3).jpeg" },
];

let cart = [];

function renderWishlistItems() {
    const wishlistItemsContainer = document.getElementById("wishlist-items");
    wishlistItemsContainer.innerHTML = "";

    wishlist.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("wishlist-item");

        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="wishlist-item-image">
            <div class="wishlist-item-details">
                <p>${item.name}</p>
                <p>Price: $${item.price}</p>
                <button onclick="addToCart(${item.id})">Add to Cart</button>
                <button onclick="removeFromWishlist(${item.id})">Remove</button>
            </div>
        `;

        wishlistItemsContainer.appendChild(itemDiv);
    });
}

function addToCart(itemId) {
    const item = wishlist.find(item => item.id === itemId);
    if (item) {
        cart.push({ ...item, quantity: 1 });
        removeFromWishlist(itemId);
        alert(`${item.name} has been added to your cart.`);
    }
}

function removeFromWishlist(itemId) {
    wishlist = wishlist.filter(item => item.id !== itemId);
    renderWishlistItems();
}

document.addEventListener("DOMContentLoaded", renderWishlistItems);

