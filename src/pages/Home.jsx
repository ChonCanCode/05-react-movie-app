import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import "../css/Home.css";
import { getPopularMovies, searchMovies } from "../services/api";

//useEffect allows you to add side effects to your functions or to your components and define when they should run.

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = getPopularMovies();

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };

  return (
    <>
      <div className="home">
        <form onSubmit={handleSearch} className="serach=form">
          <input
            type="text"
            placeholder="Search for movie..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
        <div className="movies-grid">
          {movies.map(
            (movie) =>
              movie.title
                .toLowerCase()
                .startsWith(searchQuery.toLowerCase()) && (
                <MovieCard movie={movie} key={movie.id} />
              )
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
