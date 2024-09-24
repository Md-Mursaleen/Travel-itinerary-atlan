import os
import json
import firebase_admin
from firebase_admin import credentials
import google.generativeai as genai
import googlemaps

# Path to the secret file
secret_file_path = '/etc/secrets/firebase_credentials.json'

# Load Firebase credentials
with open(secret_file_path) as f:
    cred_data = json.load(f)

# Initialize Firebase Admin SDK
cred = credentials.Certificate(cred_data)
firebase_admin.initialize_app(cred)

# Set up the Google Gemini API key
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Initialize the Google Gemini model    
model = genai.GenerativeModel('gemini-1.5-flash')

# Initialize Google Maps API client
gmaps = googlemaps.Client(key=os.getenv("GOOGLE_MAPS_API_KEY"))

