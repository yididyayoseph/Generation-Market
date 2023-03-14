const newProduct = new ProductsController(0);

import { ProductsController } from "./itemsController.js";

const submitError = document.getElementById("submit-error");

const btn = document.getElementById("submit");

function newProductForm(event) {
  event.preventDefault();

  const newItemName = document.getElementById("newItemName");
  const newItemDescription = document.getElementById("newItemDescription");
  const newItemImageUrl = document.getElementById("newItemImageUrl");

  const name = newItemName.value;
  const description = newItemDescription.value;
  const imageUrl = newItemImageUrl.value;
  const createdAt = new Date().toLocaleDateString("en-US");

  if (name.length === 0 || description.length === 0 || imageUrl.length === 0) {
    submitError.innerHTML = "Please enter input in all the fields";
    return false;
  }

  newProduct.addItem(name, description, imageUrl, createdAt);

  newItemName.value = "";
  newItemDescription.value = "";
  newItemImageUrl.value = "";
}

btn.addEventListener("click", newProductForm);