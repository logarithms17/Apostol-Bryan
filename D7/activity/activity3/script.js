const products = document.querySelectorAll(".product");

products.forEach(product => {
    product.querySelector("button").addEventListener("click", () => {
        const cartList = document.querySelector("#cartList");
        const listItem = document.createElement("li");
        const productId = product.getAttribute("id");
        const price = parseFloat(product.querySelector(".price").textContent.replace('$', ''));
        const totalAmount = document.querySelector("#totalAmount");

        // Check if the product is already in the cart
        const existingProduct = cartList.querySelector(`[data-product-id="${productId}"]`);

        let quantity = 1;

        if (existingProduct) {
            // If the product is already in the cart, increment the quantity
            quantity = parseInt(existingProduct.querySelector(".quantity").textContent) + 1;
            existingProduct.querySelector(".quantity").textContent = quantity;

        } else {
            // If the product is not in the cart, add it to the cart
            switch (productId) {
                case "product1":
                    listItem.innerHTML = `Product 1 <span class="price">$10.00</span> <button class="removeBtn">Remove</button> <span class="quantity">1</span>`;
                    break;
                case "product2":
                    listItem.innerHTML = `Product 2 <span class="price">$15.00</span> <button class="removeBtn">Remove</button> <span class="quantity">1</span>`;
                    break;
                case "product3":
                    listItem.innerHTML = `Product 3 <span class="price">$20.00</span> <button class="removeBtn">Remove</button> <span class="quantity">1</span>`;
                    break;
            }

            // Add a unique attribute to the list item to check if it's in the cart
            listItem.setAttribute("data-product-id", productId);
            cartList.appendChild(listItem);
        }

        // Calculate the new total amount
        updateTotalAmount(cartList);

        // Add event listener to the remove button for removing items from the cart
        const removeButton = listItem.querySelector(".removeBtn");
        removeButton.addEventListener("click", () => {
            listItem.remove();
            updateTotalAmount(cartList);
        });
    });
});

// Function to update the total amount
function updateTotalAmount(cartList) {
    let total = 0;

    // Loop through all the items in the cart and calculate the total
    cartList.querySelectorAll("li").forEach(item => {
        const priceText = item.querySelector(".price").textContent.replace('$', '');
        const price = parseFloat(priceText);
        const quantity = parseInt(item.querySelector(".quantity").textContent);

        total += price * quantity;
    });

    // Update the total amount display
    document.querySelector("#totalAmount").textContent = `$${total.toFixed(2)}`;
}