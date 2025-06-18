import "./css/App.css";
import Favourite from "./pages/Favourites";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourite />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
