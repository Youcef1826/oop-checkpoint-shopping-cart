"use strict"


// Create an object class for the product to store the properties for id, name and price of the product.
class Product {
    constructor(id, name, price) {
        this.id = id,
        this.name = name,
        this.price = price
    }
};


// Create an object class for the shopping cart item to store the properties for product and its quantity.
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product,
        this.quantity = quantity
    }
    // add the method to calculate the total price of the item.
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
};


// Create another object class for the shopping cart which contains an array of ShoppingCartItem instances. 
class ShoppingCart {
    constructor() {
        this.items = [];
    }
    //Get the total of items inside the cart
    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }
    // Add items
    addItem(product, quantity) {
        const ifInCart = this.items.find(item => item.product.id === product.id);

        if(ifInCart) {
            ifInCart.quantity += quantity;
        } else {
            this.items.push(new ShoppingCartItem(product, quantity));
        }
    }
    // Remove items
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }
    // Display cart items
    displayCart() {
        this.items.forEach(item => {
            console.log(`Product : ${item.product.name}, Quantity : ${item.quantity}, Total Price : ${item.getTotalPrice()} €`);
        })
    }
};


// Create products
const product1 = new Product(1, "Iphone 15", 990); // ID, name, price
const product2 = new Product(2, "Samsung 24", 900);
const product3 = new Product(3, "PS10", 2000);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 3);
cart.addItem(product2, 2);
cart.addItem(product3, 5);

// Display the cart
console.log('Cart before removing item :');
cart.displayCart();

// Remove an item from the cart
cart.removeItem(2); // Remove by ID

// Display the cart again
console.log('Cart after removing item :');
cart.displayCart();
