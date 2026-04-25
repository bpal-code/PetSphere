let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart count (header)
function updateCartCount() {
    const count = document.getElementById("cart-count");
    if (count) count.innerText = cart.length;
}

// Add to cart buttons (any page)
document.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", () => {
        const product = {
            name: btn.dataset.name,
            price: btn.dataset.price,
            animal: btn.dataset.animal
        };

        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();

        alert(`${product.name} added to cart 🛒`);
    });
});

// Display cart items (cart.html)
function displayCartItems() {
    const cartDiv = document.getElementById("cart-items");
    if (!cartDiv) return;

    cartDiv.innerHTML = "";

    if (cart.length === 0) {
        cartDiv.innerHTML = "<p>Your cart is empty</p>";
        return;
    }

    cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <span>${item.name} (${item.animal}) - ₹${item.price}</span>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartDiv.appendChild(div);
    });
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    displayCartItems();
}

// Init
updateCartCount();
displayCartItems();

