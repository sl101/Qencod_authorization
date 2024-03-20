## Available Scripts

### description:

- to display authentication by default, a redirect to
  the authentication page "/auth/login" from the main page "/" is used

- default data is used for login authentication testing
  REACT_APP_TEST_EMAIL
  REACT_APP_TEST_PASSWORD
  from environment

- password reset: to reset, a request with a link is provided,
  which must be sent by the server to the user's email; after confirming the password reset,
  a response with status 200 should be received from the server back to the application from the email,
  after which the user will be redirected to the password change page "/password-set".

- password change: when changing the password, a response from the server is expected
  with confirmation of the password change and new tokens, after which a redirect to
  the authentication page occurs. Currently the redirection is navigate("/login");

- sending an access token: to access services that require authentication,
  access_token is used - we wrap it in an axios instance and use it if necessary.
  To update tokens we use refresh_token. Execution of logic is provided when the server is active.
  At the moment, just functions with requests in the services/auth.js file
