# Display Data from an API

## Project Description

This application uses the Fetch API to retrieve sample user data
from a public API and display selected fields on a web page.

## Features

- Retrieves data using a GET request.
- Converts the response into JSON.
- Displays the user's name, username, email, city and company.
- Shows loading, success and error messages.
- Includes a button to demonstrate error handling.

## API Used

JSONPlaceholder: https://jsonplaceholder.typicode.com/users/1

This public API provides sample data for testing and learning.
No API key or confidential credentials are required.

## Request, Response and JSON

- Request: The browser sends a GET request to the API URL.
- Response: The API returns an HTTP response containing data.
- JSON: JavaScript Object Notation is a format for representing
  structured data. `response.json()` converts the response body
  into a JavaScript value that the application can use.

## JavaScript Concepts

- `fetch()` sends the HTTP request.
- `async` and `await` handle the asynchronous operation.
- `response.ok` checks whether the HTTP response was successful.
- `response.json()` converts the response body into JSON data.
- `try...catch` handles request and processing errors.
- `finally` re-enables the buttons after the request finishes.
- DOM selectors locate page elements for displaying data.

## Testing Checklist

- [ ] Click Load User Data and confirm the user details appear.
- [ ] Confirm the loading message is displayed.
- [ ] Click Test Error Handling and confirm an error message appears.
- [ ] Confirm the page remains usable after the failed request.
- [ ] Load the user data again to confirm the application recovers.

## Evidence

Capture screenshots of:

1. The application displaying API data.
2. The error message after clicking Test Error Handling.
