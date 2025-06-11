import "./style.css";
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";

//notes when exporting in default remember not to import under {} as this will be a named function. If export default remove {} from import.

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
