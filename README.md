# react testing with enzyme

Introduction to Enzyme testing for React.

## Why Enzyme

Enzyme was developed by Airbnb for testing React components’ outputs.

## Code gone Wrong

Some code that is wrong will fail to compile. 
Why will this snippet fail to compile?

```js
function App() {
  return (
    <div className="App">
      <header className="App-header">
        Login
      </header>
    </div>
    <Login />
  );
}
```

Often times however, our code compiles without errors but fails at runtime.

Create-react-app install Jest test runner.

Jest will look for test files with any of the following popular naming conventions:

## Create react app README content

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment
