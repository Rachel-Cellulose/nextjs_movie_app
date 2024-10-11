import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Import the Link component from Next.js
import fs from "fs";
import path from "path";
import styles from "../src/styles/Movies.module.css";

export default function Home({ data }) {
  const [searchQuery, setSearchQuery] = useState(""); 

  const filteredMovies = data.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = () => {
  };

  return (
    <main className={styles.main}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search for a movie..."
          className={styles.searchBar}
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
        
      </div>

      {/* Movie cards */}
      <div className={styles.cardsContainer}>
        {filteredMovies.length > 0 ? (
          filteredMovies.map((d) => {
            return (
              <Link href={`/movies/${d.id}`} key={d.id}>
                {/* Link to the dynamic movie page */}
                <div className={styles.card}>
                  <div className={styles.wrapper}>
                    <Image
                      src={d.image}
                      alt={d.title}
                      width={300}
                      height={300}
                      className={styles.movieImage}
                    />
                    <div className={styles.titleframe}>
                      <div className={styles.title}>
                        <h1>{d.title}</h1>
                      </div>
                    </div>
                    <div>
                      <p>Release Date: {d.year}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <p className={styles.noResults}>No movies found.</p> // Display message if no movies match the search query
        )}
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const apiKey = process.env.RAPID_API_KEY;
  const dataFilePath = path.join(process.cwd(), "data", "movies.json");
  let data = [];

  // conditions for apikey not working multiple times
  if (fs.existsSync(dataFilePath)) {
    // Read data from the local file
    const jsonData = fs.readFileSync(dataFilePath, "utf8");
    data = JSON.parse(jsonData);
  } else if (apiKey) {

    // Fetch data from the API and save it to the file
    const url = "https://imdb-top-100-movies.p.rapidapi.com/";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      data = await response.json();

      // Save data to local file
      fs.mkdirSync(path.dirname(dataFilePath), { recursive: true });
      fs.writeFileSync(dataFilePath, JSON.stringify(data));
    } catch (error) {
      console.error("Error fetching data:", error);
      data = [];
    }
  } else {

    console.error("RAPID_API_KEY not found and data file does not exist");
    data = [];
  }

  return {
    props: {
      data,
    },
  };
}
