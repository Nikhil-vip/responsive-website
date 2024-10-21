const products = [
    { name: "Smartphone", price: 299, image: "https://via.placeholder.com/150" },
    { name: "Laptop", price: 799, image: "https://via.placeholder.com/150" },
    { name: "Headphones", price: 49, image: "https://via.placeholder.com/150" },
    { name: "Smartwatch", price: 199, image: "https://via.placeholder.com/150" },
    { name: "Camera", price: 499, image: "https://via.placeholder.com/150" },
];

function displayProducts(products) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach(product => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <button>Add to Cart</button>
        `;
        productList.appendChild(div);
    });
}

function searchProducts() {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchValue)
    );
    displayProducts(filteredProducts);
}

document.getElementById("search").addEventListener("input", searchProducts);

// Initial display
displayProducts(products);
