const shoppingForm = document.getElementById("shopping-form");
const itemInput = document.getElementById("item-input");
const shoppingList = document.getElementById("shopping-list");
const listMessage = document.querySelector("#list-message");
const clearButton = document.getElementById("clear-button");

// Update the message when the list changes.
function updateMessage() {
  const itemCount = shoppingList.children.length;

  if (itemCount === 0) {
    listMessage.textContent = "Your list is empty.";
  } else {
    listMessage.textContent = `${itemCount} item${itemCount === 1 ? "" : "s"} in your list.`;
  }
}

// Add a new item when the form is submitted.
shoppingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const itemName = itemInput.value.trim();

  if (itemName === "") {
    listMessage.textContent = "Please enter an item.";
    itemInput.focus();
    return;
  }

  const listItem = document.createElement("li");
  listItem.classList.add("shopping-item");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.setAttribute("aria-label", `Mark ${itemName} as purchased`);

  const itemText = document.createElement("span");
  itemText.textContent = itemName;

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.textContent = "Remove";
  deleteButton.classList.add("delete-button");
  deleteButton.setAttribute("aria-label", `Remove ${itemName}`);

  // Change the item's style when it is checked.
  checkbox.addEventListener("change", function () {
    listItem.classList.toggle("purchased", checkbox.checked);
  });

  // Remove this item when its button is clicked.
  deleteButton.addEventListener("click", function () {
    listItem.remove();
    updateMessage();
  });

  listItem.append(checkbox, itemText, deleteButton);
  shoppingList.appendChild(listItem);

  itemInput.value = "";
  itemInput.focus();

  updateMessage();
});

// Remove all items from the list.
clearButton.addEventListener("click", function () {
  shoppingList.replaceChildren();
  updateMessage();
});

updateMessage();
