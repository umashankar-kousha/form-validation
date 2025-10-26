// DOM Elements
const formEl = document.getElementById("form");
const fullNameEl = document.getElementById("fullName");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const confirmPasswordEl = document.getElementById("confirmPassword");
const termsEl = document.getElementById("terms");

const fullNameWarnEl = document.getElementById("fullNameWarn");
const emailWarnEl = document.getElementById("emailWarn");
const passwordWarnEl = document.getElementById("passwordWarn");
const confirmPasswordWarnEl = document.getElementById("confirmPasswordWarn");

// Validating full name:
const validateFullName = function () {
  let fullName = fullNameEl.value.trim(" ");

  if (fullName == "") {
    fullNameWarnEl.textContent = "*Required";
    fullNameWarnEl.classList.remove("hide");
    fullNameEl.classList.add("invalid");
    return false;
  } else {
    let nameRegix = /^[A-Za-z ]+$/;
    let isValidName = nameRegix.test(fullName);
    if (!isValidName) {
      fullNameWarnEl.textContent = "*Full Name Should be Alphabet";
      fullNameWarnEl.classList.remove("hide");
      fullNameEl.classList.add("invalid");
    }
    return isValidName;
  }
  return true;
};

// Validating Email :
const validateEmail = () => {
  let email = emailEl.value.trim();

  if (email == "") {
    emailWarnEl.textContent = "*Required";
    emailWarnEl.classList.remove("hide");
    emailEl.classList.add("invalid");
    return false;
  } else {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let isValidEmail = emailRegex.test(email);
    if (!isValidEmail) {
      emailWarnEl.textContent = "*Please Enter valid eamil";
      emailWarnEl.classList.remove("hide");
      emailEl.classList.add("invalid");
    }
    return isValidEmail;
  }
  return true;
};

// Validate Password:
function validatePassword(event) {
  let password = passwordEl.value.trim();
  validateConfirmPassword(); // User after Entering password it Validates confirm password

  if (password == "") {
    passwordWarnEl.textContent = "*Required";
    passwordWarnEl.classList.remove("hide");
    passwordEl.classList.add("invalid");
    return false;
  } else {
    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    let isValidPassword = passwordRegex.test(password);
    if (!isValidPassword) {
      passwordWarnEl.textContent = `*Please Enter Valid Password minimum 8 characters,atleast one Upper Case,one Lower Case,& one digit,and only thease characters '!@#$%^&*'`;
      passwordWarnEl.classList.remove("hide");
      passwordEl.classList.add("invalid");
    }
    return isValidPassword;
  }

  return true;
}

// Validating Confirm Password:
function validateConfirmPassword() {
  let password = passwordEl.value.trim();
  let confirmPassword = confirmPasswordEl.value.trim();

  let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  let isValidPassword = passwordRegex.test(confirmPassword);
  if (confirmPassword == "") {
    confirmPasswordWarnEl.textContent = `*Required`;
    confirmPasswordWarnEl.classList.remove("hide");
    confirmPasswordEl.classList.add("invalid");
    return false;
  } else if (!isValidPassword) {
    confirmPasswordWarnEl.textContent = `*Please Enter Valid Password minimum 8 characters,atleast one Upper Case,one Lower Case,& one digit,and only thease characters '!@#$%^&*'`;
    confirmPasswordWarnEl.classList.remove("hide");
    confirmPasswordEl.classList.add("invalid");
    return isValidPassword;
  } else if (confirmPassword !== password) {
    confirmPasswordWarnEl.textContent = `*Confirm Password Should be same as Password`;
    confirmPasswordWarnEl.classList.remove("hide");
    confirmPasswordEl.classList.add("invalid");
    return false;
  } else {
    confirmPasswordWarnEl.textContent = "";
    confirmPasswordWarnEl.classList.add("hide");
    confirmPasswordEl.classList.remove("invalid");
  }
  return true;
}

// All inputs Blur Events For Validation:

fullNameEl.addEventListener("blur", () => {
  validateFullName();
});

emailEl.addEventListener("blur", () => {
  validateEmail();
});

passwordEl.addEventListener("blur", (event) => {
  validatePassword(event);
});

confirmPasswordEl.addEventListener("blur", () => {
  validateConfirmPassword();
});

// All Inputs Focus Events For revok Warning and Styles:
fullNameEl.addEventListener("focus", () => {
  fullNameWarnEl.textContent = "";
  fullNameWarnEl.classList.add("hide");
  fullNameEl.classList.remove("invalid");
});

emailEl.addEventListener("focus", () => {
  emailWarnEl.textContent = "";
  emailWarnEl.classList.add("hide");
  emailEl.classList.remove("invalid");
});

passwordEl.addEventListener("focus", () => {
  passwordWarnEl.textContent = "";
  passwordWarnEl.classList.add("hide");
  passwordEl.classList.remove("invalid");
});

confirmPasswordEl.addEventListener("focus", () => {
  confirmPasswordWarnEl.textContent = "";
  confirmPasswordWarnEl.classList.add("hide");
  confirmPasswordEl.classList.remove("invalid");
});

// Final Form Submission

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  // Check all inputs is valid before Submission:
  let isValidName = validateFullName();
  let isValidEmail = validateEmail();
  let isValidPassword = validatePassword();
  let isValidConfirmPassword = validateConfirmPassword();

  // All Inputs are valid then form submits
  if (
    isValidName &&
    isValidEmail &&
    isValidPassword &&
    isValidConfirmPassword
  ) {
    // form reset after Submission
    fullNameEl.value = "";
    emailEl.value = "";
    passwordEl.value = "";
    confirmPasswordEl.value = "";
    termsEl.checked = false;
    alert("form submitted Succesfully"); // User know form is submitted
  }
});

// Shows T&C as an aleret
function showTermsAndConditions() {
  alert(
    "Terms and Conditions : By Signing up,you agree to our rules and policies. Always be respecful and fallow our guidelines."
  );
}
