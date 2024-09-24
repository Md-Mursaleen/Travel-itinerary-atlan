import os
import firebase_admin
from firebase_admin import credentials
import google.generativeai as genai
import googlemaps

# Initialize Firebase Admin SDK
cred = credentials.Certificate(os.getenv("FIREBASE_CREDENTIALS_PATH"))
firebase_admin.initialize_app(cred)

# Set up the Google Gemini API key
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Initialize the Google Gemini model    
model = genai.GenerativeModel('gemini-1.5-flash')

# Initialize Google Maps API client
gmaps = googlemaps.Client(key=os.getenv("GOOGLE_MAPS_API_KEY"))

