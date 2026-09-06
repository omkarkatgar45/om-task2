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
        name: "Bottle",
        price: 450,
        category: "Accessories"
    },
    {
        name: "Headphones",
        price: 2200,
        category: "Electronics"
    }
];

const calculateTotal = (items) => {
    let total = 0;

    for (const item of items) {
        total = total + item.price;
    }

    return total;
};

const totalPrice = calculateTotal(products);

console.log("Total Price: ₹" + totalPrice);

const { name, price } = products[0];

console.log("Product Name:", name);
console.log("Product Price: ₹" + price);