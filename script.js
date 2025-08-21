let featuredProducts = JSON.parse(localStorage.getItem("panier"));

// If nothing in localStorage, use default and save to localStorage
if (!featuredProducts) {
  featuredProducts = defaultProducts;
  localStorage.setItem("panier", JSON.stringify(defaultProducts));
}

const productsGrid = document.getElementById("cart-items");
const totalSpan = document.getElementById("total"); // ✅ Reference to total <span>

function renderProducts() {
  productsGrid.innerHTML = "";
  let total = 0; // ✅ Initialize total

  featuredProducts.forEach((product) => {
    const card = document.createElement("li");
    card.className = "product-card";
    card.innerHTML = `
      <h3>${product.nom}</h3>
      <p class="price">$${product.prix.toFixed(2)}</p>
    `;
    productsGrid.appendChild(card);

    total += product.prix; // ✅ Add product price to total
  });

  // ✅ Update the total display
  totalSpan.textContent = total.toFixed(2);
}

renderProducts();
