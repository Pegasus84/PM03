const loadButton = document.getElementById("load-button");
const errorButton = document.getElementById("error-button");
const statusMessage = document.querySelector("#status-message");
const userCard = document.getElementById("user-card");

// Display a message and update its style.
function showStatus(message, type = "") {
  statusMessage.textContent = message;
  statusMessage.className = type;
}

// Retrieve user data from an API.
async function loadUserData(simulateFailure = false) {
  loadButton.disabled = true;
  errorButton.disabled = true;
  userCard.hidden = true;

  showStatus("Loading data from the API...");

  // This invalid URL is used to demonstrate error handling.
  const url = simulateFailure
    ? "https://jsonplaceholder.typicode.com/invalid-demo-endpoint"
    : "https://jsonplaceholder.typicode.com/users/1";

  try {
    const response = await fetch(url);

    // Handle HTTP errors such as a 404 response.
    if (!response.ok) {
      throw new Error(`Request failed: HTTP ${response.status}`);
    }

    // Convert the response body into a JavaScript object.
    const user = await response.json();

    // Display selected fields from the returned JSON data.
    document.getElementById("user-name").textContent = user.name;
    document.getElementById("user-username").textContent = user.username;
    document.getElementById("user-email").textContent = user.email;
    document.getElementById("user-city").textContent = user.address.city;
    document.getElementById("user-company").textContent = user.company.name;

    userCard.hidden = false;
    showStatus("User data loaded successfully!", "success");
  } catch (error) {
    showStatus(
      `Unable to load data. ${error.message}. Please try again.`,
      "error",
    );
  } finally {
    // Re-enable buttons whether the request succeeds or fails.
    loadButton.disabled = false;
    errorButton.disabled = false;
  }
}

// Load real sample data when clicked.
loadButton.addEventListener("click", function () {
  loadUserData();
});

// Request an invalid endpoint to demonstrate error handling.
errorButton.addEventListener("click", function () {
  loadUserData(true);
});
