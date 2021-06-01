# Getting Started
To run this code, please first ensure you have Nodejs and npm installed on your machine. Next, clone the repo
and, from within the root directory of the project, run:
```bash
$ npm install
```
to install all dependencies. Finally, run:
```bash
npm start
```
to start the project locally on port 8080.

# Testing the string reversal / palindrome checker endpoint
To test the string reversal functionality via Postman or your browser, send a request to the reversal endpoint. For example:
```bash
$ curl "http://localhost:8080/reverse?name=Daniel%20Fullerton"
```

To test using automated unit tests, run the following from the root of the project:
```
$ npm test
```

# Deploying the application
This app is intended to run on any platform with Docker support. For systems requiring a bundled zip (such as Elastic Beanstalk)
of the application code, run
```bash
$ npm run bundle
```
to create a file named **"bundle.zip"** in the root directory. You can now upload this to your platform of choice.
