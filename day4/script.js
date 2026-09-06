
const products = [
    {
        name: "Notebook",
        price: 250,
        category: "Stationery"
    },
    {
        name: "Backpack",
        price: 1200,
        category: "Bags"
    },
    {
        name: "Keyboard",
        price: 1500,
        category: "Electronics"
    },
    {
        name: "Water Bottle",
        price: 450,
        category: "Accessories"
    },
    {
        name: "Pen Set",
        price: 300,
        category: "Stationery"
    }
];


const affordableProducts = products.filter(
    product => product.price < 1000
);


const productNames = affordableProducts.map(
    product => product.name
);


const totalPrice = products.reduce(
    (total, product) => total + product.price,
    0
);


const foundProduct = products.find(
    product => product.name === "Keyboard"
);


console.log("All Products:");

products.forEach(product => {
    console.log(
        `${product.name} - ₹${product.price} - ${product.category}`
    );
});


console.log("Products under ₹1,000:");
console.log(productNames);

console.log("Total Price:");
console.log(`₹${totalPrice}`);

console.log("Found Product:");
console.log(foundProduct);