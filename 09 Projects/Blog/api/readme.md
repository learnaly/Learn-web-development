
# Server

## About

Blog server will be a simple express (node.js) server, including:
- Authentication. Authenticate every incoming request, so we know it's coming from an already registered account in our server.
- Validation for our POST requests, so incoming POST request body data, can be validated before even getting to our main server api endpoint logic.
- Tests so we can test our server api endpoints before deploying it, so we are sure api works as intended (VERY IMPORTANT!).

API endpoints:
- Posts (GET, GET MANY, CREATE, UPDATE, DELETE)
- Account register
- Account login
- Account GET

## Usage

### Install

```sh
  // yarn
  yarn

  // npm
  npm i
```

### Start

```sh
  yarn start
```

### Test

```sh
  yarn test
```

## Notes

- **EsLint** - Linting is just a process of a library checking if code we wrote is grammatically correct / ok by some standard (rules). So all those eslint-* dev dependencies are just used for checking our code grammar.
- **Nodemon** - It's used to listen for changes in our development files and restart our server any time some change occurs, so we don't have to manually restart the server any time we make a code update during development.
- **Mocha** - It's a library used for testing our code.
- **Chai** - Used for testing our API, it basically runs our server and simulates sending an actual HTTP request to our endpoint, so we see how our server responds / behaves, very, very important to test out if we have any bugs, if we covered edge cases, and our server is responding as intended, esspecially as we add more complexity to our server, all previous tests shouldn't break with new changes, this will make sure we see if our new code introduced a bug in our previous code, for other endpoints.
- **Static methods in classes**, are methods on entire class, not a method of class instance:
```js
  class Cat {
    static type() {
      return 'animal';
    }
  }

  Cat.type(); // animal
```
- **ajv** - Middleware used for validating incoming HTTP request data, we can make it check JSON object for specific properties and values, if it's all good, proceed with the request, if some fields are not according to our defined validation schema, then throw a 400 error, explaining what the error is with the JSON data sent.
- **JWT** - JSON Web Token, is a standard for creating tokens (strings) out of some data, using a secret, in a secure way. On login we encrypt some data with a server secret, and on every following request front-end app includes that token in headers, so request can pass authentication. If server verifies the token using same secret successfully, it knows it's a valid token, and we can consider user authenticated, and let him proceed with the request.
