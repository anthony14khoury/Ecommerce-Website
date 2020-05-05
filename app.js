// Variables
const cartButton = document.querySelector('.cart-btn');
const closeCartButton = document.querySelector('.close-cart');
const clearCartButton = document.querySelector('.close-cart');
const cartDOM = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productsDOM = document.querySelector('.products-center');


// Cart
let cart = [];

// Getting the Products
class Products
{    
     async getProducts()
     {
          try
          {
               let result = await fetch('products.json');
          }
          catch (error)
          {
               console.log(error);
          }
     }
}

// Display Products
class UI
{

}

// Local Storage
class Storage
{

}

document.addEventListener("DOMContentLoaded", ()=>{
     const ui = new UI();
     const products = new Products();
})

