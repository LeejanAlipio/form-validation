# Form Validation

A practice project for HTML form validation using the Constraint Validation API and custom error handling. This project demonstrates real-time validation with visual feedback and prevents form submission when validation fails.

## Features

- **Real-time validation** — Validates input as users type
- **Email validation** — Checks for valid email format
- **Country selection** — Limited to registered countries (US, CA, GB, AU)
- **Postal code validation** — Requires numeric-only input (4 characters)
- **Password validation** — Minimum 8 characters required
- **Password confirmation** — Ensures both password fields match
- **Visual feedback** — Green border for valid inputs, red for invalid
- **Error messages** — Clear, descriptive error messages for each field
- **Form submission prevention** — Blocks submission if any field is invalid

## Tech Stack

- HTML5 with native form attributes
- CSS3 for styling and validation feedback
- Vanilla JavaScript using the Constraint Validation API

## Project Structure

```
form-validation/
├── index.html      # Sign-up form with required fields
├── index.js        # Validation logic and event handlers
├── style.css       # Form styling with validation feedback
└── README.md       # This file
```

## Validation Rules

| Field | Rules | Error Message |
|-------|-------|---------------|
| Email | Valid email format required | "Value must be a valid email address." |
| Country | Must select from US, CA, GB, AU | "Country must be registered (US, AU, CA, GB)." |
| Postal Code | 4-digit numeric only | "Invalid postal code format." |
| Password | Minimum 8 characters | "Password must be at least 8 characters long." |
| Confirm Password | Must match password field | "Passwords do not match." |

## How It Works

1. **Initialization** — `initValidation()` sets up real-time event listeners on all form inputs
2. **Real-time Validation** — Each input field validates as the user types with instant visual feedback
3. **Validation Functions** — Separate functions for each field type handle specific validation logic
4. **Form Submission** — On submit, all fields are validated; submission is prevented if any validation fails
5. **Error Display** — Error messages appear below each invalid field

## Usage

Simply open `index.html` in a browser and interact with the form:

- **Type an email** — See instant validation feedback (green/red border)
- **Select a country** — Choose from the dropdown list
- **Enter postal code** — Must be 4 digits
- **Create password** — Minimum 8 characters
- **Confirm password** — Must match the password field
- **Submit** — Try submitting with invalid data; you'll see an alert and the form won't submit

## Validation Features

### Real-time Feedback
- Valid inputs show a **green border**
- Invalid inputs show a **red border**
- Error messages appear below each field immediately

### Error Prevention
- Form cannot be submitted until all fields pass validation
- Custom error messages guide users to correct their input
- Uses browser's Constraint Validation API for native HTML5 validation

### JavaScript Validation
- Email: Uses HTML5 `type="email"` validation
- Country: Custom validation against registered countries array
- Postal Code: Regex pattern `/^\d+$/` ensures numeric-only input
- Password: Minimum length check and confirmation matching

## Styling

- Clean, minimal design with centered form
- Grey form container with rounded corners
- Color-coded validation feedback (green for valid, red for invalid)
- Responsive font sizing and spacing
- Clear error text in red

## Notes

- This is a front-end practice project with client-side validation only
- For production, implement server-side validation for security
- Error messages are user-friendly and help guide form completion
- The project demonstrates proper use of the HTML5 Constraint Validation API

## License

This project is open source and available under the MIT License.
