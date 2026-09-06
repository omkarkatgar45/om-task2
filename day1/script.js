const prices = [750, 1250, 1800, 950, 2200];

for (const price of prices) {
    if (price > 1000) {
        console.log("Item price is above ₹1,000: ₹" + price);
    }
}