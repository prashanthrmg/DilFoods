# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `Project Explanation :`

#### `Frontend :`
To build our application we majorly used React.js

We have used react-router-dom for page routing

following are the routes we have :

/ is default route which shows differnt stats which is related to our cake shop.

/itemSales for representing month wise item sales shoen in Bar Graph 

/orderStatus for tracking order status shown in Bar Graph 

/revenueAnalysis for showing monthwise revenue analysis represented in Line Graph

#### `Backend :`
We need to configure endpoints to fetch data to analise the sales, revenue, order status and recent transactions.

we would need the following endpoints :
To get item-wise sales 
 endpoint : /itemSales
 method: GET

To get order status :
 endpoint : /orderStatus
 method: GET

To get revenue details :
 endpoint : /revenue
 method: GET

To get recent transactions :
 endpoint : /transactions
 method: GET

We can use Node.js for to implement these endpoints in backend or we can use Nest.js framework


#### `Database :`
To store the graph data which is usually unstructured, we can use MongoDB

Cake shop requires real-time data processsing,MongoDb's ability to handle large amounts of data with
low latency can be valuable

It provides an intuitive and efficient way to store and retrive this information.

Cake shop involves complex relationships,MongoDB's document-oriented model simplifies representing and querying such data.