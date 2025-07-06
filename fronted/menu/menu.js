/*
  Pizza & Drinks Menu JavaScript
  ------------------------------

  Description:
  This script manages the data and dynamic display of pizza and drink menu items
  on the Pizza & Drinks Box webpage.

  Data:
  - `pizzas`: An array of pizza objects, each containing:
      * name (string)
      * vegetarian (boolean)
      * image (string URL/path)
      * description (string)
      * sizes (array of objects with size name and price)
  - `drinks`: An array of drink objects, each containing:
      * name (string)
      * size (string)
      * price (number)
      * sugarFree (boolean)
      * image (string URL/path)
      * description (string)

  Functions:
  - displayPizzas():
      Dynamically creates and appends pizza cards to the container with id "pizza-menu".
      Each card shows the pizza image, name (with vegetarian icon 🌱 if applicable),
      description, and starting price (smallest size).

  - displayDrinks():
      Dynamically creates and appends drink cards to the container with id "drink-menu".
      Each card shows the drink image, name (with sugar-free icon 🚫🍬 if applicable),
      description, and price.

  - renderPizzas():
      Alternative rendering function that appends pizza items to the container with id "pizza-list".
      Each item shows the image, name (with vegetarian icon), description, and a list of prices per size.

  - renderDrinks():
      Alternative rendering function that appends drink items to the container with id "drink-list".
      Each item shows the image, name (with sugar-free icon), description, size, and price.

*/

const pizzas = [
  {
    name: "Margherita",
    vegetarian: true,
    image: "images/margherita.jpg" ,
    description: "Tomato sauce, mozzarella, fresh basil",
    sizes: [
      { size: "Small", price: 5.99 },
      { size: "Medium", price: 7.99 },
      { size: "Large", price: 9.99 }
    ]
  },
  {
    name: "Pepperoni",
    vegetarian: false,
    image: "images/pepperoni.jpg",
    description: "Tomato sauce, mozzarella, spicy pepperoni",
    sizes: [
      { size: "Small", price: 6.99 },
      { size: "Medium", price: 8.99 },
      { size: "Large", price: 10.99 }
    ]
  },
  {
    name: "Funghi",
    vegetarian: true,
    image: "images/funghi.jpg",
    description: "Tomato sauce, mozzarella, mushrooms, oregano",
    sizes: [
      { size: "Small", price: 6.49 },
      { size: "Medium", price: 8.49 },
      { size: "Large", price: 10.49 }
    ]
  },
  {
    name: "Quattro Formaggi",
    vegetarian: true,
    image: "images/quattro Formaggi.jpg",
    description: "Mozzarella, gorgonzola, parmesan, provolone",
    sizes: [
      { size: "Small", price: 7.50 },
      { size: "Medium", price: 9.50 },
      { size: "Large", price: 11.50 }
    ]
  },
  {
    name: "Diavola",
    vegetarian: false,
    image: "images/diavola.jpg",
    description: "Tomato sauce, mozzarella, spicy salami, chili",
    sizes: [
      { size: "Small", price: 7.20 },
      { size: "Medium", price: 9.20 },
      { size: "Large", price: 11.20 }
    ]
  },
  {
    name: "Hawaiian",
    vegetarian: false,
    image: "images/hawaiian.jpg",
    description: "Tomato sauce, mozzarella, ham, pineapple",
    sizes: [
      { size: "Small", price: 6.80 },
      { size: "Medium", price: 8.80 },
      { size: "Large", price: 10.80 }
    ]
  },
  {
    name: "Capricciosa",
    vegetarian: false,
    image: "images/capricciosa.jpg",
    description: "Tomato sauce, mozzarella, ham, mushrooms, olives",
    sizes: [
      { size: "Small", price: 7.30 },
      { size: "Medium", price: 9.30 },
      { size: "Large", price: 11.30 }
    ]
  },
  {
    name: "Vegetariana",
    vegetarian: true,
    image: "images/vegetariana.jpg",
    description: "Tomato sauce, mozzarella, vegetables, olives",
    sizes: [
      { size: "Small", price: 6.70 },
      { size: "Medium", price: 8.70 },
      { size: "Large", price: 10.70 }
    ]
  },
  {
    name: "BBQ Chicken",
    vegetarian: false,
    image: "images/BBQ Chicken.jpg",
    description: "Tomato sauce, mozzarella, grilled chicken, red onions, BBQ sauce drizzle",
    sizes: [
      { size: "Small", price: 7.60 },
      { size: "Medium", price: 9.60 },
      { size: "Large", price: 11.60 }
    ]
  },
  {
    name: "Tuna",
    vegetarian: false,
    image: "images/tuna.jpg",
    description: "Tomato sauce, mozzarella, tuna, onions",
    sizes: [
      { size: "Small", price: 6.90 },
      { size: "Medium", price: 8.90 },
      { size: "Large", price: 10.90 }
    ]
  }
];

// === DRINKS DATA ===
const drinks = [
  {
    name: "Coca-Cola",
    size: "0.5L",
    price: 2.50,
    sugarFree: false,
    image: "images/Coca-Cola.jpg",
    description: "Classic refreshing soda with original flavor"
  },
  {
    name: "Fanta",
    size: "0.5L",
    price: 2.50,
    sugarFree: false,
    image: "images/fanta.jpg",
    description: "Orange flavored fizzy drink with a fruity taste"
  },
  {
    name: "Jamnica (Sparkling Water)",
    size: "0.5L",
    price: 2.00,
    sugarFree: true,
    image: "images/jamnica (Sparkling Water).jpg",
    description: "Croatian sparkling mineral water"
  },
  {
    name: "Sprite",
    size: "0.33L",
    price: 2.20,
    sugarFree: true,
    image: "images/sprite.jpg",
    description: "Lemon-lime soda with a light, refreshing taste"
  },
  {
    name: "Jana (Still Water)",
    size: "0.5L",
    price: 2.10,
    sugarFree: true,
    image: "images/Jana (Still Water).jpg",
    description: "Still natural spring water"
  },
  {
    name: "Pepsi Max (Sugar Free)",
    size: "0.5L",
    price: 2.50,
    sugarFree: true,
    image: "images/Pepsi Max.jpg",
    description: "Zero sugar cola with bold Pepsi flavor"
  },
  {
    name: "Cedevita Orange",
    size: "0.33L",
    price: 2.30,
    sugarFree: false,
    image: "images/Cedevita Orange.jpg",
    description: "Vitamin-rich orange flavored drink"
  },
  {
    name: "Ice Tea Peach",
    size: "0.5L",
    price: 2.40,
    sugarFree: false,
    image: "images/Ice Tea Peach.jpg",
    description: "Peach flavored chilled black tea"
  },
  {
    name: "Red Bull",
    size: "0.25L",
    price: 3.00,
    sugarFree: false,
    image: "images/Red Bull.jpg",
    description: "Energy drink that boosts alertness and energy"
  },
  {
    name: "Sensation Lime-Kiwi",
    size: "0.5L",
    price: 2.20,
    sugarFree: false,
    image: "images/Sensation Lime-Kiwi.jpg",
    description: "Sparkling water with lime and kiwi flavor"
  }
];

// === DISPLAY FUNCTIONS ===
function displayPizzas() {
  const container = document.getElementById('pizza-menu');
  pizzas.forEach(pizza => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${pizza.image}" alt="${pizza.name}">
      <h3>${pizza.name} ${pizza.vegetarian ? '🌱' : ''}</h3>
      <p>${pizza.description}</p>
      <p><strong>From €${pizza.sizes[0].price.toFixed(2)}</strong></p>
    `;
    container.appendChild(card);
  });
}

function displayDrinks() {
  const container = document.getElementById('drink-menu');
  drinks.forEach(drink => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${drink.image}" alt="${drink.name}">
      <h3>${drink.name} ${drink.sugarFree ? '🚫🍬' : ''}</h3>
      <p>${drink.description}</p>
      <p><strong>€${drink.price.toFixed(2)}</strong></p>
    `;
    container.appendChild(card);
  });
}



function renderPizzas() {
  const container = document.getElementById('pizza-list');
  pizzas.forEach(pizza => {
    const item = document.createElement('div');
    item.className = 'item';
    item.innerHTML = `
      <img src="${pizza.image}" alt="${pizza.name}" />
      <h3>${pizza.name} ${pizza.vegetarian ? '🌱' : ''}</h3>
      <p>${pizza.description}</p>
      <p><strong>Prices:</strong></p>
      <ul>
        ${pizza.sizes.map(s => `<li>${s.size} - €${s.price.toFixed(2)}</li>`).join('')}
      </ul>
    `;
    container.appendChild(item);
  });
}

function renderDrinks() {
  const container = document.getElementById('drink-list');
  drinks.forEach(drink => {
    const item = document.createElement('div');
    item.className = 'item';
    item.innerHTML = `
      <img src="${drink.image}" alt="${drink.name}" />
      <h3>${drink.name} ${drink.sugarFree ? '🚫🍬' : ''}</h3>
      <p>${drink.description}</p>
      <p><strong>Size:</strong> ${drink.size}</p>
      <p><strong>Price:</strong> €${drink.price.toFixed(2)}</p>
    `;
    container.appendChild(item);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  displayPizzas();
  displayDrinks();
});


