# Travel Itinerary Generator(Backend)

This is the backend service for our web application, **Travel Itinerary Generator**, designed to help users create personalized travel itineraries based on preferences such as budget, interests, and trip duration. Built using **Python** and **Flask**, it offers API endpoints for user authentication, itinerary generation, weather data fetching, and interacting with places of interest.

## Features

- **User Registration & Authentication**: Secure authentication using Firebase.
- **Itinerary Generation**: Powered by the Google Gemini API for curated travel plans.
- **Weather Data**: Fetch real-time weather information using the OpenWeatherMap API.
- **MongoDB Integration**: Persistent storage of user data and itineraries.
- **RESTful API**: Structured API for seamless front-end integration.

## Prerequisites

Before running the application, ensure you have the following:

- **Python** (version 3.7 or higher)
- **MongoDB Atlas** (or any other MongoDB instance for database)
- **Firebase** (for user authentication services)
- **Google Gemini API** (for travel itinerary generation)
- **OpenWeatherMap API** (for weather data access)

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Md-Mursaleen/Travel-itinerary-generator.git
   cd backend
   ```

2. **Create a virtual environment**

   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables**

   Create a `.env` file in the project root and add the following:

   ```env
   FLASK_APP=run.py
   FLASK_ENV=development
   MONGODB_URI=your_mongodb_uri
   DATABASE_NAME=your_database_name
   WEATHER_API_KEY=your_openweathermap_api_key
   FIREBASE_API_KEY=your_firebase_api_key
   ```

5. **Run the application**

   ```bash
   flask run
   ```

   The backend should now be running on `http://127.0.0.1:5000`.

## API Endpoints

- **User Registration & Login**: `/register`, `/login`
- **Generate Itinerary**: `/generate-itinerary`, `/generate-itinerary-with-destination`
- **Fetch Weather**: `/get-weather`
- **Save Itinerary**: `/save-itinerary`
- **Fetch Itineraries**: `/fetch-itineraries`
- **User Info**: `/user-info`

## Deployment

The backend can be deployed to platforms like Heroku, Render, or any other service supporting Python and Flask. Ensure that the environment variables are correctly set on the platform you choose.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request.
