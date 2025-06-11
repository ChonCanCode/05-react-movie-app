import "./style.css";
import MovieCard from "./components/MovieCard";

//notes when exporting in default remember not to import under {} as this will be a named function. If export default remove {} from import.

function App() {
  const movieNumber = 2;

  return (
    <>
      {movieNumber === 1 ? (
        <MovieCard movie={{ title: "Tim's Film", release_date: "2024" }} />
      ) : (
        <MovieCard movie={{ title: "Joes Film", release_date: "2020" }} />
      )}
    </>
  );
}

export default App;
