# Form Validation

A practice project for HTML form validation using the Constraint Validation API and custom error handling. This project demonstrates real-time validation with visual feedback and prevents form submission when validation fails.

## Live Preview

Open `index.html` directly in your browser to try the form, or serve the project locally with a simple static server.

## Features

- Real-time validation as users type
- Email validation with browser-native checks
- Country selection restricted to allowed values (US, CA, GB, AU)
- Postal code validation using a numeric-only format
- Password length validation (minimum 8 characters)
- Confirm-password matching check
- Visual validation feedback using green and red borders
- Descriptive inline error messages
- Submission blocking until all inputs are valid

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Constraint Validation API

## Project Structure

```text
form-validation/
├── index.html      # Sign-up form with required fields
├── index.js        # Validation logic and event handlers
├── style.css       # Form styling with validation feedback
└── README.md       # Documentation
```

## Validation Rules

| Field | Rules | Error Message |
|-------|-------|---------------|
| Email | Must be a valid email address | "Value must be a valid email address." |
| Country | Must select a supported country | "Country must be registered (US, AU, CA, GB)." |
| Postal Code | Must be 4 digits only | "Invalid postal code format." |
| Password | Must be at least 8 characters | "Password must be at least 8 characters long." |
| Confirm Password | Must match the password | "Passwords do not match." |

## How It Works

1. The form is initialized in `initValidation()`.
2. Each input listens for `input` events and validates immediately.
3. Each field has its own validation function for custom logic.
4. On submit, all fields are rechecked before the form is allowed to submit.
5. If validation fails, inline error messages appear and the form is prevented from submitting.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/LeejanAlipio/form-validation.git
```

2. Open the project folder:

```bash
cd form-validation
```

3. Start a local server (recommended):

```bash
python -m http.server 8000
```

4. Open your browser and visit:

```text
http://localhost:8000
```

## Usage

Try submitting the form with invalid values to see the validation errors:

- Email must be valid
- Country must be selected
- Postal code must use digits only
- Password must be at least 8 characters
- Confirmation must match the original password

## Notes

- This is a client-side validation practice project.
- Real production apps should also validate on the server for security.
- The app uses native browser validation features and custom JavaScript checks.

## License

This project is open source and available under the MIT License.
