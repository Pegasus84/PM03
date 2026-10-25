# Issue Submission Form

## Project Overview

The Issue Submission Form is a beginner-friendly web application built using HTML, CSS and JavaScript. It allows users to submit an issue by providing their personal details, department, issue category and a description of the problem.

The purpose of this project is to demonstrate form handling, input validation, DOM manipulation and event handling using JavaScript.

## Technologies Used

- **HTML5** – Creates the structure of the form.
- **CSS3** – Styles the form and provides visual feedback.
- **JavaScript** – Validates user input and displays error and success messages.

## Features

- Input fields for name, department, email, issue category and message.
- Validation to prevent submission when required fields are missing.
- Email format validation.
- Specific error messages for invalid or missing information.
- Visual highlighting of fields containing errors.
- Success message when all fields contain valid information.
- Maximum message length of 500 characters.
- Responsive layout for different screen sizes.
- DOM manipulation and a form submit event listener.

## Project Structure

```text
IssueSubmissionForm/
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run the Application

1. Download or clone the project repository.
2. Ensure that all project files are in the same folder.
3. Open `index.html` in a web browser.
4. Enter the required information into the form.
5. Click **Submit issue** to test the validation.

No additional software installation is required.

## Validation Rules

| Field          | Validation                                              |
| -------------- | ------------------------------------------------------- |
| Name           | Cannot be empty                                         |
| Department     | A department must be selected                           |
| Email          | Cannot be empty and must have a reasonable email format |
| Issue Category | A category must be selected                             |
| Message        | Cannot be empty and must not exceed 500 characters      |

The application displays specific error messages when validation fails. When all fields pass validation, a success message is displayed.

## Testing

The following test cases should be executed to verify the application's functionality.

| Test Case                                     | Expected Result                     |
| --------------------------------------------- | ----------------------------------- |
| Submit the form with all fields empty         | Required-field errors are displayed |
| Leave the name empty                          | Name error is displayed             |
| Leave the department unselected               | Department error is displayed       |
| Leave the email empty                         | Email required error is displayed   |
| Enter an invalid email address, such as `abc` | Email format error is displayed     |
| Leave the issue category unselected           | Category error is displayed         |
| Leave the message empty                       | Message error is displayed          |
| Enter a message longer than 500 characters    | Message length error is displayed   |
| Enter valid information in all fields         | Success message is displayed        |
| Enter a message of exactly 500 characters     | Message length validation passes    |

Actual results and pass/fail statuses should be recorded in the completed test table.

## Required Evidence

The following evidence should be submitted with the project:

- HTML, CSS and JavaScript source
