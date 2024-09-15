# Travel Itinerary Generator(Frontend)

This is the frontend for our web application, **Travel Itinerary Generator**, built to help users create personalized travel itineraries based on their preferences. The frontend is built using **React** and communicates with the backend API for managing user data and itineraries.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Sign up and login functionality.
- **Create Itineraries**: Users can create, view, and update itineraries.
- **Interactive UI**: Provides an easy-to-use interface for selecting destinations and planning trips.
- **Integration with Backend**: Fully integrated with the backend API for managing travel data.
- **Responsive Design**: Fully responsive and optimized for different screen sizes.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **React Router**: For navigation between different pages.
- **Axios**: For making API calls to the backend.
- **CSS/SCSS**: For styling components.

## Setup and Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Md-Mursaleen/Travel-itinerary-generator.git
   ```

2. Navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   The app will run locally at `http://localhost:3000`.

## Running the App

- **Development**: To run the app in development mode, use:

  ```bash
  npm start
  ```

- **Build**: To create a production build, use:

  ```bash
  npm run build
  ```

- **Linting**: Run lint checks using:
  ```bash
  npm run lint
  ```

## Project Structure

```plaintext
frontend/
│
├── public/
├── src/
│   ├── components/  # Reusable components

├── App.js      # Main app component
├── index.js    # Entry point of the app
├── api.js      # Contain API calls
└── ...other files

│
├── package.json           # NPM dependencies and scripts
└── README.md              # Frontend documentation
```

## Contributing

If you'd like to contribute to this project, follow these steps:

1. **Fork** the repository to your GitHub account.
2. **Clone** your forked repository locally:
    ```bash
    git clone https://github.com/your-username/Travel-itinerary-generator.git
    ```
3. **Create a new branch** for your changes:
    ```bash
    git checkout -b feature-branch-name
    ```
4. **Make your changes** and commit them with a descriptive commit message:
    ```bash
    git commit -m "Add description of your changes"
    ```
5. **Push your branch** to your forked repository:
    ```bash
    git push origin feature-branch-name
    ```
6. **Submit a pull request** to the main repository, describing the changes you made.

Your contribution will be reviewed, and once approved, it will be merged into the project.
