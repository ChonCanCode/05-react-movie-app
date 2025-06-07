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

export default App;
