import { Button } from "@material-ui/core";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          onClick={() => alert("hello")}
          size="small"
          href="#"
          style={{
            // fontFamily: Roboto,
            fontSize: 15,
            backgroundColor: "#019cde",
          }}
          variant="contained"
          color="primary"
        >
          Hello World
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
