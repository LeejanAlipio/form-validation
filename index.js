const elements = {
  form: document.querySelector('#sign-up-form'),
  emailInput: document.querySelector('#email'),
  countryInput: document.querySelector('#country'),
  postalCodeInput: document.querySelector('#postal-code'),
  passwordInput: document.querySelector('#password'),
  confirmPasswordInput: document.querySelector('#confirm-password'),
  emailError: document.querySelector('#email-error'),
  countryError: document.querySelector('#country-error'),
  postalCodeError: document.querySelector('#postal-error'),
  passwordError: document.querySelector('#password-error'),
  confirmPasswordError: document.querySelector('#confirm-password-error'),
};

function validateEmail() {
  if (elements.emailInput.validity.valid) {
    elements.emailError.textContent = '';
  } else if (elements.emailInput.validity.valueMissing) {
    elements.emailError.textContent = 'Please enter an email address.';
  } else if (elements.emailInput.validity.typeMismatch) {
    elements.emailError.textContent = 'Value must be a valid email address.';
  }
}

function validateCountry() {
  const registeredCountries = ['US', 'AU', 'CA', 'GB'];
  const selectedValue = elements.countryInput.value.toUpperCase();

  if (elements.countryInput.validity.valueMissing) {
    elements.countryInput.setCustomValidity('Country must not be unknown.');
    elements.countryError.textContent = 'Country must not be unknown.';
  } else if (!registeredCountries.includes(selectedValue)) {
    elements.countryInput.setCustomValidity('Invalid country.');
    elements.countryError.textContent = 'Country must be registered (US, AU, CA, GB).';
  } else {
    elements.countryInput.setCustomValidity('');
    elements.countryError.textContent = '';
  }
}

function validatePostalCode() {
  const postalRegex = /^\d+$/;

  if (elements.postalCodeInput.validity.valueMissing) {
    elements.postalCodeError.textContent = 'Postal code is required.';
  } else if (!postalRegex.test(elements.postalCodeInput.value.trim())) {
    elements.postalCodeError.textContent = 'Invalid postal code format.';
  } else {
    elements.postalCodeError.textContent = '';
  }
}

function validatePasswords() {
  if (elements.passwordInput.validity.valueMissing) {
    elements.passwordError.textContent = 'Password is required.';
  } else if (elements.passwordInput.value.length < 8) {
    elements.passwordError.textContent = 'Password must be at least 8 characters long.';
  } else {
    elements.passwordError.textContent = '';
  }

  if (elements.confirmPasswordInput.value !== elements.passwordInput.value) {
    elements.confirmPasswordInput.setCustomValidity('Passwords do not match.');
    elements.confirmPasswordError.textContent = 'Passwords do not match.';
  } else {
    elements.confirmPasswordInput.setCustomValidity('');
    elements.confirmPasswordError.textContent = '';
  }
}

function initValidation() {
  // Real-time input listeners
  elements.emailInput.addEventListener('input', validateEmail);
  elements.countryInput.addEventListener('input', validateCountry);
  elements.postalCodeInput.addEventListener('input', validatePostalCode);
  elements.passwordInput.addEventListener('input', validatePasswords);
  elements.confirmPasswordInput.addEventListener('input', validatePasswords);

  // Block submission if any field remains invalid
  elements.form.addEventListener('submit', (event) => {
    validateEmail();
    validateCountry();
    validatePostalCode();
    validatePasswords();

    if (!elements.form.checkValidity()) {
      event.preventDefault(); 
      alert('Please correct the errors before submitting.');
    }
  });
}

initValidation();
