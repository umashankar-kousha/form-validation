const fullNameEl = document.getElementById("fullName");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const confirmPasswordEl = document.getElementById("confirmPassword");

const fullNameWarnEl = document.getElementById("fullNameWarn");
const emailWarnEl = document.getElementById("emailWarn");
const passwordWarnEl = document.getElementById("passwordWarn");
const confirmPasswordWarnEl = document.getElementById("confirmPasswordWarn");

const validateFullName = function () {
  let fullName = fullNameEl.value.trim(" ");
  if (fullName == "") {
    fullNameWarnEl.textContent = "*Required";
    fullNameWarnEl.classList.remove("hide");
    fullNameEl.classList.add("invalid");
  }
};

const validateEmail = () => {
  let email = emailEl.value.trim();
  if (email == "") {
    emailWarnEl.textContent = "*Required";
    emailWarnEl.classList.remove("hide");
    emailEl.classList.add("invalid");
  } else {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let isValidEmail = emailRegex.test(email);
    if (!isValidEmail) {
      emailWarnEl.textContent = "*Please Enter valid eamil";
      emailWarnEl.classList.remove("hide");
      emailEl.classList.add("invalid");
    }
  }
};

function validatePassword(event) {
  let password = passwordEl.value.trim();

  if (password == "") {
    passwordWarnEl.textContent = "*Required";
    passwordWarnEl.classList.remove("hide");
    passwordEl.classList.add("invalid");
  } else {
    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    let isValidPassword = passwordRegex.test(password);
    if (!isValidPassword) {
      passwordWarnEl.textContent = `*Please Enter Valid Password minimum 8 characters,atleast one Upper Case,one Lower Case,& one digit,and only thease characters '!@#$%^&*'`;
      passwordWarnEl.classList.remove("hide");
      passwordEl.classList.add("invalid");
    }
  }
  validateConfirmPassword();
}

function validateConfirmPassword() {
  let password = passwordEl.value.trim();
  let confirmPassword = confirmPasswordEl.value.trim();

  let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  let isValidPassword = passwordRegex.test(confirmPassword);
  if (confirmPassword == "") {
    confirmPasswordWarnEl.textContent = `*Required`;
    confirmPasswordWarnEl.classList.remove("hide");
    confirmPasswordEl.classList.add("invalid");
  } else if (!isValidPassword) {
    confirmPasswordWarnEl.textContent = `*Please Enter Valid Password minimum 8 characters,atleast one Upper Case,one Lower Case,& one digit,and only thease characters '!@#$%^&*'`;
    confirmPasswordWarnEl.classList.remove("hide");
    confirmPasswordEl.classList.add("invalid");
  } else if (confirmPassword !== password) {
    confirmPasswordWarnEl.textContent = `*Confirm Password Should be same as Password`;
    confirmPasswordWarnEl.classList.remove("hide");
    confirmPasswordEl.classList.add("invalid");
  } else {
    confirmPasswordWarnEl.textContent = "";
    confirmPasswordWarnEl.classList.add("hide");
    confirmPasswordEl.classList.remove("invalid");
  }
}

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
