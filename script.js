// Get the form and message area from the HTML.
const issueForm = document.getElementById("issueForm");
const formMessage = document.getElementById("formMessage");

// Listen for the form submission.
issueForm.addEventListener("submit", function (event) {
  // Stop the page from reloading.
  event.preventDefault();

  // Read and clean the user's input.
  const name = document.getElementById("name").value.trim();
  const department = document.getElementById("department").value;
  const email = document.getElementById("email").value.trim();
  const category = document.getElementById("category").value;
  const message = document.getElementById("message").value.trim();

  let isValid = true;

  // Clear errors from the previous attempt.
  clearErrors();
  formMessage.textContent = "";
  formMessage.className = "form-message";

  // Check the name.
  if (name === "") {
    showError("name", "Please enter your full name.");
    isValid = false;
  }

  // Check the department.
  if (department === "") {
    showError("department", "Please select your department.");
    isValid = false;
  }

  // Check the email.
  if (email === "") {
    showError("email", "Please enter your email address.");
    isValid = false;
  } else if (!isValidEmail(email)) {
    showError("email", "Please enter a valid email, e.g. name@example.com.");
    isValid = false;
  }

  // Check the issue category.
  if (category === "") {
    showError("category", "Please select an issue category.");
    isValid = false;
  }

  // Check the message and its maximum length.
  if (message === "") {
    showError("message", "Please describe the issue.");
    isValid = false;
  } else if (message.length > 500) {
    showError("message", "Your message must be 500 characters or fewer.");
    isValid = false;
  }

  // Stop submission if any validation failed.
  if (!isValid) {
    formMessage.textContent =
      "Please correct the highlighted fields and try again.";

    formMessage.classList.add("error-state");
    return;
  }

  // Show success when all fields are valid.
  formMessage.textContent =
    "Success! Your issue has been validated and is ready for submission.";

  formMessage.classList.add("success-state");

  // Reset the fields after successful validation.
  issueForm.reset();
});

// Check whether the email format is reasonable.
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
}

// Display an error beside a specific field.
function showError(fieldName, message) {
  const field = document.getElementById(fieldName);
  const error = document.getElementById(fieldName + "Error");

  field.classList.add("invalid");
  field.setAttribute("aria-invalid", "true");
  error.textContent = message;
}

// Clear previous errors and highlighting.
function clearErrors() {
  const fields = ["name", "department", "email", "category", "message"];

  fields.forEach(function (fieldName) {
    const field = document.getElementById(fieldName);
    const error = document.getElementById(fieldName + "Error");

    field.classList.remove("invalid");
    field.removeAttribute("aria-invalid");
    error.textContent = "";
  });
}
