## Thought process

Based on the specifications of the task I tried to build a form that it is flexible and can accept any amount of fields at any given time.

From the Parent, different fields can be sent to the form through props and the form takes care of rendering those props into inputs.
The inner state of the form is also sent back to the parent in case there is need of further processing.

To keep the components as simple as possible, the only APIs used are `useState` and `useEffect`.

In a working environment for form creation and validation I would have choose the combo `Formik` and `Yup` but in this case
I just wrote a small simple regex pattern and used the state to handle the validation.

I wrote some tests using `testing-library/react`, this library tests user behaviour rather than just testing functionality from methods one by one. Testing how the user interacts with the app by mocking the user flows gives (in my opinion) a more robust test coverage of the components.

As a side note, I don't have any previous experience with TypeScript, so probably there are many functionalities missing, although just by adding
it to the project it already catches a lot of issues in comparisson with developing using just ES6+React.

## Auto generated Readme part

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
