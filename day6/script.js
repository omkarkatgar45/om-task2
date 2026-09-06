const productsBox = document.getElementById("products");
const status = document.getElementById("status");

const fallbackImage =
    "https://dummyjson.com/image/300x200/cccccc/000000?text=No+Image";

async function loadProducts() {

    try {

        status.textContent = "Loading products...";

        const response = await fetch(
            "https://dummyjson.com/products?limit=5"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        productsBox.innerHTML = data.products.map(product => {

            const image =
                product.images && product.images.length > 0
                    ? product.images[0]
                    : product.thumbnail;

            return `
                <div class="card">

                    <img
                        src="${image}"
                        alt="${product.title}"
                        onerror="this.src='${fallbackImage}'"
                    >

                    <h2>${product.title}</h2>

                    <p>
                        ${product.description.substring(0, 80)}...
                    </p>

                    <p class="price">
                        $${product.price}
                    </p>

                </div>
            `;
        }).join("");

        status.textContent = "5 Products Loaded Successfully";

    } catch (error) {

        status.textContent =
            "Unable to load products. Please check your internet connection.";

        console.error(error);
    }
}

loadProducts();