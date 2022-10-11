# React Take Home Test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).  We've created this to simulate the type of work we expect from developers working in our system.  There's some chosen software libraries that are either close to or exactly the libraries we use in our own development.  Here's a list so you're familiar:

* react-bootstrap: https://react-bootstrap.github.io/
* axios: https://axios-http.com/
* @reduxjs/toolkit: https://redux-toolkit.js.org/

If you feel the task at hand is better suited with another library please don't hesitate to include it.  Any libraries you add please include a short reason why you feel it's inclusion was necessary.

Finally, documentation for the API we're calling can be found here: https://randomuser.me/

## Starting the app

1. `yarn install` to install all the packages
2. `yarn start` Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## The Task

We would like you to finish this application, including finding and fixing any bugs or spelling errors you may see in it.  We have one remaining task:

### TST-1234 Add infinite scrolling pagination to users list

Users list currently is limited to 20 results, we'd like to see the results grow as you scroll down

#### Expected Result

When i scroll to the end, more results will appear

#### Actual Result

When I scroll to the end, I don't see any further results past 20

#### Steps To Reproduce

1. open app
2. scroll to bottom
3. more results should be added to the list of results allowing you to scroll infinitely

#### Developer Checklist

1. in `components/users/Users.tsx` add a ref to the `Container` to check when the div has scrolled to the bottom, alternatively use `react-infinite-scroller`
2. create useState to store the current "page" defaulting to 1
3. create a function that increases the page by 1 and then calls fetchUsersAsync with the appropriate page variable
4. when a div has scrolled to the bottom call function from step #3

## When you finish

Once you've completed this task and fixed any bugs you found, please fill out the `review.md` file, then zip up the result(excluding node modules please) and email it to us for review.
