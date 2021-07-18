## THIS E-COMMERCE WEBSITE IS DEPLOYED LIVE
https://crwn-clothing-nikhil.herokuapp.com/

## It is a demo clothing e-commerce website made with React!

## Features
- Consists of multiple routes. 
- Sign-In/Sign-Out integrated by Firebase
- Add Items and see them in cart dropdown and checkout page. 
- Processes payment (with demo card details provided at checkout page) integrated by using Stripe.
- Website well optimized for responsiveness (Works well with smaller screen sizes as well!)
- Collection data is fetched from external source (Firebase database)
- Peristence is available across all routes
- Performance improved using lazy, Suspence and memo

## Libraries/Frameworks used
- React (react, react-dom, react-router-dom)
- Firebase : For authentication as well as storing collection data
- NodeJs, Express : For backend
- Scss : Fore styling (node-sass)
- Redux : For state management
- Redux-persist : For persistence 
- Redux-saga : For making asynchronous actions. 
- Redux-logger : Middleware used only in development for logging redux state changes.
- Styled-Components : For using CSS in JS at some places
- Compression : For improving performance (by optimising gzip) on deployment at heroku. 


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
