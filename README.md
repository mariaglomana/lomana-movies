# Movies

This project lets a user download a list of movies and filter the results by the title, rate random movies, and see a detailed view of a precise movie of its interest. In order to have access to this content, the user will have to create an account but its data will be available and editable from the profile section of the application.

## Instalation

To run the app in the development mode, open the project directory and run:

```
`npm start`
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Libraries

- [Material UI](https://material-ui.com/) (based in MaterialDesign design system): since there were no previous design or prototype to follow, I considered important to use this library in order to achieve the best user experience as possible.
- [Axios](https://github.com/axios/axios): one of the most used promise based HTTP client for the browser and node.js, with some advantages over an standard fetch call, such as enable client-side protection against XSRF.

## Pages

- [Welcome](http://localhost:3000/welcome): landing page with links to sign up and sign in.
- [Sign up](http://localhost:3000/sign_up): it lets user create a new account.
- [Sign in](http://localhost:3000/sign_in): it lets user log in with an email and password.
- [Movies](http://localhost:3000/movies): shows a list of movies and lets user filter the results by the movie title and load more movies by clicking a button.
- [Rate](http://localhost:3000/rate): shows a random movie for the user to rate. Both in movies and rate section, it is possible to see a detail view of a movie by clicking on the info button of a movie card.
- [Profile](http://localhost:3000/profile): shows the information associated to the user's account and lets him edit the registered first name, second name or password.

## Authorization token (jwt)

The auth token is given by the api, inside the response of a successful user's sign up and sign in.
The useUser hook will be responsible for saving it (or deleting in the case of the log out) in the browser storage using `Window.sessionStorage`.
The conexion between the useUser and the components in charge of listening the auth events is made through a useContext hook (userContext), as well as the redirection between the private and public pages when required.

## Pending improvements

Some of the improvements that could have been implemented are:

- Display of a list of the higheest rated movies.
- Let user saved an unrated movie inside a Watchlist.
- Create statistics on user's movies preferences by analyzing the rated movies.

## Contributing

Contributions are very welcome! Please open a Pull Request or contact me at [linkedin](https://www.linkedin.com/in/mariagarciadelomana/).
