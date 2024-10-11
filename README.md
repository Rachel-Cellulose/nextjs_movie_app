# Movie App

## Description
The Movie App is a web application that allows users to search for movies and view details about their favorite films. It fetches data from the IMDB Top 100 movies list via the RapidAPI to provide real-time movie information, including release date, title, and descriptions.

## Features
- Search for movies by title
- View detailed information about movies (title, release date, poster, and description)
- Responsive design for mobile and desktop
- Light and dark mode support
- Fallback mechanism using local storage to handle API rate limits

## Tech Stack
- **Frontend:** Next.js, React
- **Styling:** CSS, Tailwind CSS
- **API:** [Movie Database API on RapidAPI](https://rapidapi.com/rapihub-rapihub-default/api/imdb-top-100-movies)
- **Version Control:** Git, GitHub
- **Deployment:** Netlify

## Demo
The application is deployed on Netlify and can be accessed here: [Movie App Demo](https://nextjs-movie-appp.netlify.app).

## Requirements
- Node.js (version 14.x or above)
- npm or yarn
- RapidAPI key for the Movie API

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Rachel-Cellulose/nextjs_movie_app.git
   cd nextjs_movie_app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   *or*
   ```bash
   yarn install
   ```

3. Configure the API Key:
   - Create a `.env.local` file in the project root and add your RapidAPI key:
     ```
     RAPID_API_KEY=api_key_here
     ```

4. Run the development server:
   ```bash
   npm run dev
   ```
   *or*
   ```bash
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Important Notes
1. **Local Storage for Handling Rate Limits:**  
   Due to rate limits on the RapidAPI key, the app uses local storage as a fallback data source. If an API key is not found, the app will attempt to fetch data from local storage. When an API key is provided, it fetches data from the API unless local storage already contains the data. 

2. **IMDB Top 100 Movies Data:**  
   The app uses the IMDB Top 100 movies data from RapidAPI, requiring an API key to access the data.

## Development Details
- **Framework:** Next.js
- **Styling:** Tailwind CSS
- **Error Handling:** Proper management of loading states and error messages for better user experience

## Deployment
The app is deployed on Netlify and can be accessed at the provided demo link above.

## API Information
To use the Movie API, sign up on RapidAPI and obtain a free API key. This key is essential for fetching movie data.