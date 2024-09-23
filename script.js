const form = document.getElementById("email-form");
const formSection = document.getElementById("form-section");
const formEmail = document.getElementById("email");
const formEmailError = document.getElementById("email-error");

const successModal = document.getElementById("success-modal");
const successModalEmail = document.getElementById("submitted-email");
const successModalBtn = document.getElementById("success-modal-btn");

const handleSubmit = (e) => {
  const data = Object.fromEntries(new FormData(e.target));
  // console.log(data);
  // for (const property in data) {
  // console.log(`${property}: ${data[property]}`);
  // }
  // console.log(`Email submitted: ${data["email"]}`);

  // if the email field is valid, we let the form submit
  if (!formEmail.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
  } else {
    // Send the data to the modal
    successModalEmail.textContent = data["email"];
    // Show the success modal (and hide the main form page)
    toggleModal();
  }

  // Prevent the form from being sent by canceling the event
  e.preventDefault(e);
};

form.addEventListener("submit", handleSubmit);

successModalBtn.addEventListener("click", (event) => {
  // Reset the form (and the error message)
  form.reset();
  //formEmail.value = "";
  formEmailError.textContent = "";
  // Go back to the main form page (and hide the success modal)
  toggleModal();
});

function toggleModal() {
  successModal.classList.toggle("visually-hidden");
  formSection.classList.toggle("visually-hidden");
}

function showError() {
  if (formEmail.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    formEmailError.textContent = "Missing your email";
  } else if (formEmail.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    formEmailError.textContent = "Valid email required";
  } else if (formEmail.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    formEmailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${formEmail.value.length}.`;
  }

  // Set the styling appropriately
  formEmailError.className = "error active";
}
