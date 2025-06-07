import "./style.css";
import { MovieCard } from "./components/MovieCard";

//conditional rendering

function App() {
  const movieNumber = 1;

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
