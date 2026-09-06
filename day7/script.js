const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const results = document.getElementById("results");
const message = document.getElementById("message");

const fallbackImage =
    "https://dummyjson.com/image/300x200/cccccc/000000?text=No+Image";


searchForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const keyword = searchInput.value.trim();

    results.innerHTML = "";

    if (keyword === "") {
        message.textContent = "Please enter a product name.";
        return;
    }

    message.textContent = "Searching products...";

    try {

        // Encode search text so spaces/special characters work
        const searchText = encodeURIComponent(keyword);

        const response = await fetch(
            `https://dummyjson.com/products/search?q=${searchText}`
        );

        if (!response.ok) {
            throw new Error("Unable to fetch products");
        }

        const data = await response.json();

        console.log(data);


        if (!data.products || data.products.length === 0) {

            message.textContent =
                `No products found for "${keyword}".`;

            return;
        }


        // map() creates product cards
        results.innerHTML = data.products.map(product => {

            const image =
                product.thumbnail ||
                (product.images && product.images.length > 0
                    ? product.images[0]
                    : fallbackImage);

            return `
                <div class="product-card">

                    <img
                        src="${image}"
                        alt="${product.title}"
                        onerror="this.onerror=null; this.src='${fallbackImage}'"
                    >

                    <h2>${product.title}</h2>

                    <p>
                        ${product.description}
                    </p>

                    <p class="price">
                        $${product.price}
                    </p>

                </div>
            `;

        }).join("");


        message.textContent =
            `${data.products.length} product(s) found for "${keyword}".`;


    } catch (error) {

        console.error("Error:", error);

        results.innerHTML = "";

        message.textContent =
            "Something went wrong. Please check your internet connection.";

    }

});