const formValidation = () => {
  const button = document.querySelector(".contact-btn"),
    allInputs = document.querySelectorAll(".input-valdation"),
    emailInput = document.querySelector(".email-valdation"),
    errorMessage = document.querySelector(".error-message"),
    errorBox = document.querySelector(".error-messages");

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  if (!button) {
    return;
  }

  button.addEventListener("click", (e) => {
    allInputs.forEach((item, i) => {
      if (item.value === "" || item.value.trim() === '') {
        e.preventDefault();
        const getText = errorMessage.getAttribute("data-message");
        errorMessage.innerText = getText;
        item.classList.add("error");
        errorBox.classList.add("active-error");
      } else  if(emailInput.value === '' || !validateEmail(emailInput.value)) {
        e.preventDefault();
        emailInput.classList.add("error");
        errorBox.classList.add("active-error");
      } else {
        item.classList.remove("error");
        errorBox.classList.remove("active-error");
        emailInput.classList.remove("error");
      }

    });
  });
};

export default formValidation;
