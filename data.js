// Fetch products and display them
const getApi = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    displayProducts(data.products);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

// Render product cards
function displayProducts(products) {
  const list = document.getElementById("productList");
  list.innerHTML = "";

  products.forEach((product) => {
    const li = document.createElement("li");
    li.className = "product";
    li.innerHTML = `
          <img src="${product.thumbnail}" alt="${product.title}">
          <h3>${product.title}</h3>
          <p>Price: $${product.price}</p>
          <p>${product.description.slice(0, 60)}...</p>
        `;
    list.appendChild(li);
  });
}

// Automatically run on page load
window.addEventListener("DOMContentLoaded", getApi);
