# OPChamps - An op.gg Clone

This markdown file includes a feature list, project build run-down, and reacts generic readme.

# Features:

  - Login/Auth
    > Users will have dedicated database using either mongo/sql. Where user info will be stored and tied to info such as comments and favorite champions.
  - Champions page and search functionality
    > The constantly-updated Riot API will fill the site with new and old League of Legends Champions and their stats/info. The start page will essentially be a search results page that shows all champions(approx 150). A search bar that will perpetually exist in the navbar will allow a user to narrow the results based on champion name or a champions most played role.
  - Champion page
    > A series of pages for a champion that will show statistics and detailed information for a specific League of Legends champion.
  - Matchups
    > A preview and button will lead to a matchup page that shows favorable matchups for a specific champion as well as its counter-matchups.
  - User comments
    > A user will be able to leave comments on a champion specific page as well as specific matchups.
  - User favorites
    > A sidebar on the start page will show a users favorite champions and will allow the user to quickly find their page without a search.

# User stories:

 - As a OPChamps User, I'd like to be able to leave my thoughts on a specific champion for other users to see.
 - As a OPChamps User, I'd like to be able to leave my thoughts on a specific matchup for other users to see.
 - As a OPChamps User, I'd like to see specific item builds on champions to help me while playing.
 - As a OPChamps User, I'd like to be able to search for a specific champion and see their info/stats.
 - As a OPChamps User, I'd like to be able to favorite champions for easy access in the future.

# React docs:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
