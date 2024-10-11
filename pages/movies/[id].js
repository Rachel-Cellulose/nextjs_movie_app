import { useRouter } from "next/router";
import Image from "next/image";
import fs from "fs";
import path from "path";
import styles from "../../src/styles/Movies.module.css";

export default function MoviePage({ movie }) {
  const router = useRouter();
  const { id } = router.query;

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.singleMovieContainer}>
      <h1>{movie.title}</h1>
      <Image
        src={movie.image}
        alt={movie.title}
        width={400}
        height={600}
        className={styles.movieImage}
      />
      <p>
        <strong>Release Date:</strong> {movie.releaseDate}
      </p>
      <p>
        <strong>Description:</strong> {movie.description}
      </p>
    </div>
  );
}

export async function getStaticPaths() {
  const dataFilePath = path.join(process.cwd(), "data", "movies.json");
  let data = [];

  if (fs.existsSync(dataFilePath)) {
    const jsonData = fs.readFileSync(dataFilePath, "utf8");
    data = JSON.parse(jsonData);
  }

  const paths = data.map((movie) => ({
    params: { id: movie.id.toString() },
  }));

  return {
    paths,
    fallback: false, // Show fallback page if the movie isnt on the website
  };
}

export async function getStaticProps({ params }) {
  const dataFilePath = path.join(process.cwd(), "data", "movies.json");
  let movie = null;

  if (fs.existsSync(dataFilePath)) {
    const jsonData = fs.readFileSync(dataFilePath, "utf8");
    const data = JSON.parse(jsonData);
    movie = data.find((m) => m.id.toString() === params.id);
  }

  return {
    props: {
      movie: movie || null,
    },
  };
}
