This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

To run this project go into the project directory and use `npm start`:
```
cd /path/to/vulnerable-list
npm start
```

### Attack Examples

This javascript line creates a pop alert:
`<img onmouseover="alert('PWNED!!!!!!');" src="favicon.ico" />`

This will not work:
`<script>alert('PWNED!!!!!!')</script>`

helmet.js code:
```
const helmet = require('helmet');
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: [" 'none' "],
    baseUri: [" 'none' "],
    formAction: [" 'none' "],
  },
}))
```
