import "./style.css";

function App() {
  return (
    <>
      <div>
        <Component property="display" />
        <Component property="using prop" />
      </div>
    </>
  );
}

function Component({ property }) {
  return (
    <>
      <h1>{property}</h1>
    </>
  );
}

// export default App;

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

// export default App;
