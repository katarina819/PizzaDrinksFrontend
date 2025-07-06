/* # Pizza & Drinks Ordering System — Documentation

## Data Structure

- **`pizzas`**: Array of pizza objects. Each pizza has:
  - `name` (string): Pizza name.
  - `vegetarian` (boolean): Indicates if vegetarian.
  - `image` (string): Image path.
  - `description` (string): Ingredients description.
  - `sizes` (array): List of sizes with:
    - `size` (string): Size label (Small, Medium, Large).
    - `price` (number): Price for that size.

- **`drinks`**: Array of drink objects. Each drink has:
  - `name` (string): Drink name.
  - `size` (string): Volume/size.
  - `price` (number): Price.
  - `sugarFree` (boolean): Sugar-free indicator.
  - `image` (string): Image path.
  - `description` (string): Drink description.

---

## Variables and DOM Elements

- `pizzaList`: Container element for pizzas.
- `drinkList`: Container element for drinks.
- `cartItems`: Container listing cart items.
- `totalSpan`: Element displaying total price.
- `cart`: Array holding current cart items.

---

## Functions

### `addToCart(item)`
Adds an item (with `name`, `size`, and `price`) to the cart array and calls `updateCart()`.

### `updateCart()`
- Clears current cart display.
- For each item in the cart, creates a list entry with item details and a "Remove" button.
- Updates the total price display.
- The "Remove" button deletes the item from the cart and updates the display.

### `createPizzaElements()`
- Clears the pizza list container.
- For each pizza:
  - Displays pizza name with 🌱 emoji if vegetarian.
  - Creates buttons for each available size and price.
  - Clicking a button adds that pizza size to the cart.

### `createDrinkElements()`
- Clears the drink list container.
- For each drink:
  - Displays drink name with 🚫🍬 emoji if sugar-free, size, and price.
  - Adds "Add to Cart" button.
  - Clicking the button adds the drink to the cart.

---

## Event Listeners

### Order Form Submission
- Prevents default form submission.
- Validates cart is not empty.
- If payment is by card, validates card number, expiry, and CVV fields.
- Shows order confirmation message.
- Clears cart and resets form.

### Payment Method Change
- Shows or hides credit card info fields based on payment method selection.
- Sets required attribute on card inputs only if "card" is selected.

---

## Usage Notes
- The system dynamically builds the menu and manages cart on the client side.
- Items can be added or removed from cart with real-time total updates.
- Payment form adapts to cash or card selection.
- Order placement currently simulates confirmation; backend integration can be added later. */


const pizzas = [
  {
    name: 'Margherita',
    vegetarian: true,
    image: "images/margherita.jpg",
    description: "Tomato sauce, mozzarella, fresh basil",
    sizes: [
      { size: 'Small', price: 5.40 },
      { size: 'Medium', price: 6.50 },
      { size: 'Large', price: 7.80 }
    ]
  },
  {
    name: 'Capricciosa',
    vegetarian: false,
    image: "images/capricciosa.jpg",
    description: "Tomato sauce, mozzarella, ham, mushrooms, artichokes, olives",
    sizes: [
      { size: 'Small', price: 7.10 },
      { size: 'Medium', price: 8.50 },
      { size: 'Large', price: 9.90 }
    ]
  },
  {
    name: 'Pepperoni',
    vegetarian: false,
    image: "images/pepperoni.jpg",
    description: "Tomato sauce, mozzarella, spicy pepperoni",
    sizes: [
      { size: 'Small', price: 6.50 },
      { size: 'Medium', price: 7.80 },
      { size: 'Large', price: 9.10 }
    ]
  },
  {
    name: 'Vegetariana',
    vegetarian: true,
    image: "images/vegetariana.jpg",
    description: "Mushrooms, peppers, onions, olives, mozzarella",
    sizes: [
      { size: 'Small', price: 5.90 },
      { size: 'Medium', price: 7.10 },
      { size: 'Large', price: 8.30 }
    ]
  },
  {
    name: 'Quattro Formaggi',
    vegetarian: true,
    image: "images/quattro Formaggi.jpg",
    description: "Mozzarella, gorgonzola, parmesan, ricotta",
    sizes: [
      { size: 'Small', price: 7.60 },
      { size: 'Medium', price: 8.80 },
      { size: 'Large', price: 9.20 }
    ]
  },
  {
    name: 'Funghi',
    vegetarian: true,
    image: "images/funghi.jpg",
    description: "Tomato sauce, mozzarella, fresh mushrooms",
    sizes: [
      { size: 'Small', price: 5.80 },
      { size: 'Medium', price: 7.00 },
      { size: 'Large', price: 8.40 }
    ]
  },
  {
    name: 'Hawaiian',
    vegetarian: false,
    image: "images/hawaiian.jpg",
    description: "Tomato sauce, mozzarella, ham, pineapple",
    sizes: [
      { size: 'Small', price: 7.40 },
      { size: 'Medium', price: 8.90 },
      { size: 'Large', price: 10.50 }
    ]
  },
  {
    name: 'Diavola',
    vegetarian: false,
    image: "images/diavola.jpg",
    description: "Tomato sauce, mozzarella, spicy salami, chili peppers",
    sizes: [
      { size: 'Small', price: 6.90 },
      { size: 'Medium', price: 8.20 },
      { size: 'Large', price: 9.60 }
    ]
  },
  {
    name: 'BBQ Chicken',
    vegetarian: false,
    image: "images/BBQ Chicken.jpg",
    description: "BBQ sauce, grilled chicken, red onions, mozzarella",
    sizes: [
      { size: 'Small', price: 7.90 },
      { size: 'Medium', price: 9.50 },
      { size: 'Large', price: 11.10 }
    ]
  },
  {
    name: 'Tuna',
    vegetarian: false,
    image: "images/tuna.jpg",
    description: "Tomato sauce, mozzarella, tuna, red onions",
    sizes: [
      { size: 'Small', price: 6.70 },
      { size: 'Medium', price: 8.00 },
      { size: 'Large', price: 9.30 }
    ]
  }
];

const drinks = [
  {
    name: 'Coca-Cola',
    size: '0.5L',
    price: 2.50,
    sugarFree: false,
    image: 'images/Coca-Cola.jpg',
    description: 'Classic refreshing cola drink.'
  },
  {
    name: 'Fanta',
    size: '0.5L',
    price: 2.50,
    sugarFree: false,
    image: 'images/fanta.jpg',
    description: 'Orange-flavored fizzy soft drink.'
  },
  {
    name: 'Jamnica (Sparkling Water)',
    size: '0.5L',
    price: 2.00,
    sugarFree: true,
    image: 'images/jamnica (Sparkling Water).jpg',
    description: 'Natural mineral sparkling water.'
  },
  {
    name: 'Sprite',
    size: '0.33L',
    price: 2.20,
    sugarFree: true,
    image: 'images/sprite.jpg',
    description: 'Lemon-lime flavored soda, sugar-free.'
  },
  {
    name: 'Jana (Still Water)',
    size: '0.5L',
    price: 2.10,
    sugarFree: true,
    image: 'images/jana (Still Water).jpg',
    description: 'Pure natural still spring water.'
  },
  {
    name: 'Pepsi Max (Sugar Free)',
    size: '0.5L',
    price: 2.50,
    sugarFree: true,
    image: 'images/Pepsi Max.jpg',
    description: 'Cola taste with zero sugar.'
  },
  {
    name: 'Cedevita Orange',
    size: '0.33L',
    price: 2.30,
    sugarFree: false,
    image: 'images/Cedevita Orange.jpg',
    description: 'Orange-flavored multivitamin instant drink.'
  },
  {
    name: 'Ice Tea Peach',
    size: '0.5L',
    price: 2.40,
    sugarFree: false,
    image: 'images/Ice Tea Peach.jpg',
    description: 'Sweetened peach flavored iced tea.'
  },
  {
    name: 'Red Bull',
    size: '0.25L',
    price: 3.00,
    sugarFree: false,
    image: 'images/Red Bull.jpg',
    description: 'Energy drink that revitalizes body and mind.'
  },
  {
    name: 'Sensation Lime-Kiwi',
    size: '0.5L',
    price: 2.20,
    sugarFree: false,
    image: 'images/Sensation Lime-Kiwi.jpg',
    description: 'Sparkling lime and kiwi flavored soft drink.'
  }
];


const pizzaList = document.getElementById('pizza-list');
const drinkList = document.getElementById('drink-list');
const cartItems = document.getElementById('cart-items');
const totalSpan = document.getElementById('total');

let cart = [];

function addToCart(item) {
  cart.push(item);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} (${item.size}) - €${item.price.toFixed(2)}`;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.style.marginLeft = '10px';
    removeBtn.onclick = () => {
      cart.splice(index, 1);
      updateCart();
    };

    li.appendChild(removeBtn);
    cartItems.appendChild(li);
    total += item.price;
  });

  totalSpan.textContent = total.toFixed(2);
}

function createPizzaElements() {
  const pizzaList = document.getElementById('pizza-list');
  pizzaList.innerHTML = ''; 

  pizzas.forEach(pizza => {
    const pizzaDiv = document.createElement('div');
    pizzaDiv.className = 'item';

   
    let nameText = pizza.name;
    if (pizza.vegetarian) {
      nameText += ' 🌱';  // Emoji for vegetarian
    }

    // Create a title for the pizza
    const nameElem = document.createElement('strong');
    nameElem.textContent = nameText;
    pizzaDiv.appendChild(nameElem);
    pizzaDiv.appendChild(document.createElement('br'));

    // Create a button for each size to add to the cart
    pizza.sizes.forEach(sizeOption => {
      const btn = document.createElement('button');
      btn.textContent = `${sizeOption.size} - €${sizeOption.price.toFixed(2)}`;
      btn.onclick = () => addToCart({
        name: pizza.name,
        size: sizeOption.size,
        price: sizeOption.price
      });
      btn.style.marginRight = '10px';
      pizzaDiv.appendChild(btn);
    });

    pizzaList.appendChild(pizzaDiv);
  });
}


function createDrinkElements() {
  const drinkList = document.getElementById('drink-list');
  drinkList.innerHTML = ''; // Clear before adding new elements

  drinks.forEach(drink => {
    const drinkDiv = document.createElement('div');
    drinkDiv.className = 'item';
    drinkDiv.style.marginBottom = '15px';

    let nameText = drink.name;
    if (drink.sugarFree) {
      nameText += ' 🚫🍬';  // Emoji for sugar-free
    }

    // Create HTML with name, size, and price
    const infoSpan = document.createElement('strong');
    infoSpan.textContent = `${nameText} - ${drink.size} - €${drink.price.toFixed(2)}`;
    drinkDiv.appendChild(infoSpan);

    // New line
    drinkDiv.appendChild(document.createElement('br'));

    // Add button to add to cart
    const btn = document.createElement('button');
    btn.textContent = 'Add to Cart';
    btn.style.marginLeft = '10px';
    btn.onclick = () => addToCart({
      name: drink.name,
      size: drink.size,
      price: drink.price
    });
    drinkDiv.appendChild(btn);

    drinkList.appendChild(drinkDiv);
  });
}


createPizzaElements();
createDrinkElements();

/* document.getElementById('about-btn').addEventListener('click', () => {
  window.location.href = 'about.html';
}); */


document.getElementById("order-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("customer-name").value;
  const address = document.getElementById("customer-address").value;
  const phone = document.getElementById("customer-phone").value;
  const payment = paymentSelect.value;

  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  if (payment === "card") {
    const cardNumber = document.getElementById("card-number").value;
    const cardExpiry = document.getElementById("card-expiry").value;
    const cardCVV = document.getElementById("card-cvv").value;

    if (!cardNumber || !cardExpiry || !cardCVV) {
      alert("Please fill in all credit card details.");
      return;
    }

  }

  
  const orderSummary = `
    Order placed successfully! 🚚
    Name: ${name}
    Address: ${address}
    Phone: ${phone}
    Payment: ${payment === "cash" ? "Cash on Delivery" : "Credit Card"}
  `;

  document.getElementById("order-message").textContent = orderSummary;

  // Clear everything
  cart = [];
  updateCart();
  document.getElementById("order-form").reset();
});

const paymentSelect = document.getElementById("payment-method");
const creditCardDiv = document.getElementById("credit-card-info");

paymentSelect.addEventListener("change", () => {
  if (paymentSelect.value === "card") {
    creditCardDiv.style.display = "block";
    document.getElementById("card-number").required = true;
    document.getElementById("card-expiry").required = true;
    document.getElementById("card-cvv").required = true;
  } else {
    creditCardDiv.style.display = "none";
    document.getElementById("card-number").required = false;
    document.getElementById("card-expiry").required = false;
    document.getElementById("card-cvv").required = false;
  }
});

