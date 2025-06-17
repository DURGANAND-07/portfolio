document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const msgBox = document.getElementById("form-message");

  if (name && email && message) {
    msgBox.textContent = "Thanks! Your message has been sent.";
    msgBox.style.color = "green";

    // Reset form fields
    this.reset();
  } else {
    msgBox.textContent = "Please fill out all fields.";
    msgBox.style.color = "red";
  }
});
