const fetchAllProducts = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();
        console.log(products)
        
        let productContent = "";
        products.forEach((product) => {
            productContent += `
            <div class="col">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" style="height: 500px;" alt="${product.title}" >
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                    </div>
                </div>
                </div>`
        })

        document.querySelector(".productContainer").innerHTML = productContent

    } catch (error) {
        console.log(error)
    }
    
}

fetchAllProducts()