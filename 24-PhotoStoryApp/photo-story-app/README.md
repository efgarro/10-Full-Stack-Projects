# **PhotoStory React App**

This project is part of the Full Stack Designer Codecademy curriculum that completes Module 24 - Portafolio Project. The project however, was geared towards a feature of the 'Soy Costa Rica' Destination App, and the Unsplash API was used instead. All tasks and requirements were modified accordingly.

## **React Router Paths**

```
/home
/search/:hub
/guanacaste
/jaco
/monteverde
/la-fortuna
/puerto-viejo
```

## Identify State

- The search text the user has entered
- Login Status
- The list of photographs giving the region's ambience, look and feel.
- The list of photographs giving the tico's mood for the week.
- The list of photographs of people going about ordinary tasks.

## React Components

- Home Page
  - CoverPic
  - HeaderOne
  - AmbiencePics
  - Footer
<br></br>
- Hub Page
  - HeaderTwo
  - HubDashboard
  - AmbiencePics
  - Footer
<br></br>
- Contact Page
  - HeaderTwo
  - ContactForm
  - Footer

## **CSS Style Guide**

### **Categorizing of Rules and Class Naming Convenction**

As recommended by SMACSS Style Guide and Jonathan Snook's lecture.
- http://smacss.com/book/
- https://www.youtube.com/watch?v=fAcW-wOFYjw


```js
.moduleName--subComponent
```


### **Organizing Class Properties**

As recommended by Kevin Powel

- https://www.youtube.com/watch?v=3Y03OSNw6zo

For example:
```css
.navbar--menu {
  /* display */
  display: flex;
  flex-direction: column;

  /* positioning */
  position: static;
  
  /* box-model */
  margin: 0;
  padding: 1rem;
  
  /* typography*/
  font-family: var(--ff-subheading);
  font-weight: 400;
  
  /* manipulating */
  transform: translateX(100%);
  transition: transform 350ms ease-out;
  
  /* miscellaneous */
  border-radius: 2px;
}
```
<br></br>

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
