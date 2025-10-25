const fullNameEl = document.getElementById("fullName");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const fullNameWarnEl = document.getElementById("fullNameWarn");
const emailWarnEl = document.getElementById("emailWarn");
const passwordWarnEl = document.getElementById("passwordWarn");

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

function validatePassword() {
  let password = passwordEl.value.trim();
  if (password == "") {
    passwordWarnEl.textContent = "*Required";
    passwordWarnEl.classList.remove("hide");
    passwordEl.classList.add("invalid");
  }
}

fullNameEl.addEventListener("blur", () => {
  validateFullName();
});

emailEl.addEventListener("blur", () => {
  validateEmail();
});

passwordEl.addEventListener("blur", () => {
  validatePassword();
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
