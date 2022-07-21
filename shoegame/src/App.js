import Login from "./components/Login";

function App() {
  return (
    <body className="App">
      <h1>SHOEGAME</h1>
      <switch>
      <Login/>
      </switch>

      <switch>
      <Home/>
        </switch>

        <switch>
        <About/>
        </switch>

        <switch>
        <Shoes/>
        </switch>
     
    </body>
  );
}

export default App;
