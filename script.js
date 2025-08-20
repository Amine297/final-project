let cart = [];
let total = 0;

function addToCart(product, price) {
  cart.push({ product, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.product} - $${item.price.toFixed(2)}`;
    cartList.appendChild(li);
  });

  document.getElementById("total").textContent = total.toFixed(2);
}
// Sample featured products data
const featuredProducts = [
  {
    id: 1,
    name: "Crying Sticker",
    price: 3.99,
    image: "https://i.imgur.com/1bX5QH6.png",
  },
  {
    id: 2,
    name: "Sad Sticker",
    price: 2.49,
    image: "https://i.imgur.com/QphN04B.png",
  },
  {
    id: 3,
    name: "Funny Sticker",
    price: 4.99,
    image: "https://i.imgur.com/8Km9tLL.png",
  },
  {
    id: 4,
    name: "cool sticker",
    price: 5.5,
    image: "https://i.imgur.com/jtYpvt6.png",
  },
];

const productsGrid = document.getElementById("featured-products");

function renderProducts() {
  productsGrid.innerHTML = "";
  featuredProducts.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p class="price">$${product.price.toFixed(2)}</p>
      <button>Add to Cart</button>
    `;
    productsGrid.appendChild(card);
  });
}

renderProducts();
