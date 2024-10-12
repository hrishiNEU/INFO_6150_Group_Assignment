$(document).ready(function () {
  const emailInput = $("#floatingInput");
  const passwordInput = $("#floatingPassword");
  const signInBtn = $("#signInBtn");
  const emailError = $("#emailError");
  const passwordError = $("#passwordError");

  const emailRegex = /^[^\s@]+@northeastern\.edu$/;

  function validateInputs() {
    const email = emailInput.val();
    const password = passwordInput.val();

    let isValid = true;

    if (!emailRegex.test(email)) {
      emailError.text("Please use a valid northeastern.edu email.");
      isValid = false;
    } else {
      emailError.text("");
    }

    if (password.length < 6) {
      passwordError.text("Password must be at least 6 characters.");
      isValid = false;
    } else {
      passwordError.text("");
    }

    signInBtn.prop("disabled", !isValid);
    return isValid;
  }

  emailInput.on("input", validateInputs);
  passwordInput.on("input", validateInputs);

  // Handle form submission
  $("form").on("submit", function (event) {
    event.preventDefault();

    if (validateInputs()) {
      window.location.href = "landingPage.html";
    }
  });
});
