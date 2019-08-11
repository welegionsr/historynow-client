Dont forget to populate the MongoDB database using the scripts in /mongo-scripts.

Some things not working/not existing:

1. Nothing in admin dashboard other than creating an event.
2. No polling / socket.io - didn't have time to do it properly (some bad polling implementation was kept as comment).
3. Site is mostly responsive, but the event cards aren't functional for mobile devices (use hover effects).
Didn't have time to make a different layout for mobile devices
4. Some weird bug after updating an event - it doesn't update straight away, but if you check the redux store, you'll see it did update. If you navigate out and back to the page, it'll show as updated.
I guess it's something to do with sync/async, something happens too fast somewhere.
5. No hard validation (regex) on form fields, just very basic validation (client side). 
There's validation in the Mongoose schema though.
6. I changed the behavior of wishlist items ordering - I don't re-order them after an event is wishlisted - it looks bad.
I just have an indicator on the card, and I have a dedicated wishlist page.


That's it I guess, hopefully what's there will work properly :)


--------------------------------------------

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

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
