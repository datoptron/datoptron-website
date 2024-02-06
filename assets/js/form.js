function validateForm() {
  const fullname = document.getElementById('form-fullname');
  const email = document.getElementById('form-email');
  const message = document.getElementById('form-message');
  const privacyCheckbox = document.getElementById('form-privacy');

  const formIsValid = fullname.value.length && email.value.length && message.value.length && privacyCheckbox.checked;

  const submitButton = document.getElementById('submit-btn');

  if (formIsValid) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

function submitForm() {
  const form = document.getElementById('contact-form');
  form.action="https://formspree.io/f/xdoqewew";
}