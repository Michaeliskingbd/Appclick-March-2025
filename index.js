// document.getElementById("addBtn").addEventListener("click", function () {
//   const input = document.getElementById("taskInput");
//   const taskText = input.value.trim();

//   if (taskText === "") {
//     alert("Please enter valid input");
//     return;
//   }

//   const li = document.createElement("li");
//   li.textContent = taskText;

//   //Complete
//   const completeBtn = document.createElement("button");
//   completeBtn.textContent = "✔";
//   completeBtn.onclick = () => li.classList.toggle("completed");

//   //delete Button
//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "🗑";
//   deleteBtn.onclick = () => li.remove();

//   li.appendChild(completeBtn);
//   li.appendChild(deleteBtn);

//   const parent = document.getElementById("taskList");
//   parent.insertBefore(li, parent.firstChild);

//   input.value = "";
// });

// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("error", error));

const getApi = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    console.log(data.products);
    displayProducts(data.products);
  } catch (error) {
    console.error("Error", error);
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
            <p>comment: ${product.reviews[0].reviewerName}</p>
        `;
    list.appendChild(li);
  });
}

// Automatically run on page load
window.addEventListener("DOMContentLoaded", getApi);
