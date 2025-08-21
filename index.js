// Sample featured products data
const featuredProducts = [
  {
    id: 1,
    name: "Crying Sticker",
    price: 3.99,
    image: "stickers proj final/crying.jpg",
  },
  {
    id: 2,
    name: "perpelexed Sticker",
    price: 2.49,
    image: "stickers proj final/cab0edfa-eda1-465a-a6bc-fdc8ade1ce24.webp",
  },
  {
    id: 3,
    name: "Sigma Sticker",
    price: 4.99,
    image:
      "stickers proj final/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u3.jpg",
  },
  {
    id: 4,
    name: "cool sticker",
    price: 5.5,
    image:
      "./stickers proj final/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
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
    `;
    productsGrid.appendChild(card);
  });
}

renderProducts();
