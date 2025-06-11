import MovieCard from "../components/MovieCard";

function Home() {
  const movies = [
    { id: 1, title: "Movie 1", release_date: "2020" },
    { id: 2, title: "Movie 2", release_date: "2020" },
    { id: 3, title: "Movie 3", release_date: "2020" },
    { id: 4, title: "Movie 4", release_date: "2020" },
  ];

  const handleSearch = () => {};

  return (
    <>
      <div
      //   className="home"
      >
        <form onSubmit={handleSearch} className="serach=form">
          <input
            type="text"
            placeholder="Search for movie..."
            className="search-input"
          />
        </form>
        <div
        // className="movies-grid"
        >
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
