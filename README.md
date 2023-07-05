# FASI - Federasi Aerosport Indonesia

FASI is a client-side web application built using React. It utilizes Redux and Redux Thunk for state management, Firebase Auth for user authentication, and Axios for backend connectivity.

## Installation

To install and run the application locally, follow these steps:

**1. Clone the repository:**

```
git clone git@github.com:liu-purnomo/fasi-frontend.git
```

**2. Navigate to the project directory:**

```
cd aerosport
```

**3. Install the dependencies:**

```
npm install
```

**4. Set up Firebase:**

-   Create a Firebase project and obtain the necessary credentials.
-   Configure Firebase Auth and enable the required authentication methods.
-   Update the Firebase configuration in the .env file with your Firebase credentials.

**5. Run the application:**

```
npm run dev
```

then open http://localhost:5173/ in your browser.

## Technologies Used

-   React: A JavaScript library for building user interfaces.
-   Redux: A predictable state container for JavaScript apps.
-   Redux Thunk: A middleware that allows you to write asynchronous logic that interacts with the Redux store.
-   Firebase Auth: A service provided by Firebase for user authentication.
-   Axios: A promise-based HTTP client for making API requests.

## Folder Structure

```
aerosport/
  |- public/
  |- src/
      |- actions/
      |- components/
      |- reducers/
      |- services/
      |- App.js
      |- index.js
  |- .env
  |- package.json
  |- README.md
```

## Contribution

Contributions to this project are welcome. If you would like to contribute, please follow these steps:

**1. Fork the repository.**

**2. Create a new branch**

```
git checkout -b feature/fiture-name
```

**3. Make your changes and commit them**

```
git add .
git commit -m "Add some feature"
```

**4. Push to the branch**

```
git push origin feature/feature-name
```

**5. Create a new pull request.**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Maintainer

-   Liu Purnomo
-   Email: hi@liupurnomo.com
-   Website: https://liupurnomo.com
