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
